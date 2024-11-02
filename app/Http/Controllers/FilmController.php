<?php

namespace App\Http\Controllers;

use App\Models\Film;
use Illuminate\Support\Facades\DB; 
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Country;
use App\Models\Genre;
use App\Models\Platform;
use App\Models\Comment;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;



class FilmController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $searchTerm = $request->input('search');
        $selectedGenre = $request->input('genre');
        $selectedPlatform = $request->input('platform');
        $selectedCountry = $request->input('country'); 

        $query = Film::with('genres');

        if ($searchTerm) {
            // Pencarian berdasarkan judul film atau nama aktor
            $query->where('title', 'like', '%' . $searchTerm . '%')
                  ->orWhereHas('actors', function ($q) use ($searchTerm) {
                      $q->where('name', 'like', '%' . $searchTerm . '%'); 
                  });
        }
    
    
        if ($selectedGenre) {
            $query->whereHas('genres', function ($q) use ($selectedGenre) {
                $q->where('tb_genre.genre_name', $selectedGenre);
            });
        }
    
        if ($selectedPlatform) {
            $query->whereHas('platforms', function ($q) use ($selectedPlatform) {
                $q->where('tb_platform.name_platform', $selectedPlatform);
            });
        }
    
        if ($selectedCountry) {
            // Karena relasi one-to-many, gunakan where langsung
            $query->where('country', $selectedCountry);
        }

        // paginasi
        $films = $query->paginate(8);
    
        // Data lain untuk ditampilkan
        $countrys = Country::all();
        $platforms = Platform::all();
        $genres = Genre::all();

        // dd($countrys, $genres, $platforms);
    
        return inertia::render('Homepage', [
            'title' => "Putar Putar Film Home",
            'description' => "Selamat Datang Bro",
            'films' => $films,
            'countrys' => $countrys,
            'genres' => $genres,
            'platforms' => $platforms,
        ]);
    }
    

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        $film = Film::with(['genres', 'platforms', 'actors'])->where('film_id', $id)->first();

        return Inertia::render('HalamanFilm', [
            'film' => $film,
            'user' => Auth::check() ? Auth::user() : null, // Gunakan Auth facade secara langsung
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Film $film)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Film $film)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Film $film)
    {
        //
    }

    public function storeComment(Request $request, $id)
    {
        Log::info("Received comment request:", [
            'user_id' => Auth::user()->id, // Ambil user_id dari Auth
            'comment' => $request->input('comment'),
            'rating' => $request->input('rating'),
        ]);

        $request->validate([
            'comment' => 'required|string',
            'rating' => 'required|integer|min:1|max:5',
        ]);

        // Buat komentar baru
        DB::table('tb_comment')->insert([
            'user_id' => Auth::user()->id,
            'film_id' => $id,
            'comment' => $request->input('comment'),
            'rating' => $request->input('rating'),
            'status' => 'approved',
        ]);

        return response()->json(['message' => 'Komentar berhasil ditambahkan'], 200);
    }


public function getAllFilms()
{
    // Ambil semua film tanpa paginasi
    $films = Film::all();
    return response()->json($films);
}

}
