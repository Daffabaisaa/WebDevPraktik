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
use Illuminate\Support\Facades\Log;


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

    /**
     * Display the specified resource.
     */
    // public function show(Film $film)
    // {
    //     //
    // }

  

    public function show($id)
    {
        $film = Film::with(['genres','platforms','actors'])->where('film_id', $id)->first();

        // dd($film);
        
    return inertia::render('HalamanFilm', [
        'film' => $film,
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

    // FilmController.php

public function getAllFilms()
{
    // Ambil semua film tanpa paginasi
    $films = Film::all();
    return response()->json($films);
}

}
