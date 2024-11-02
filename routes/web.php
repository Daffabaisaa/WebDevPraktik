<?php

use App\Http\Controllers\FilmController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [FilmController::class, 'index'])->name('home');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::post('/film/{id}/comment', [FilmController::class, 'storeComment'])->name('film.comment.store');

Route::get('/login', function () {
    return Inertia::render('Auth/Login');
})->name('login');

Route::get('/film/{id}', [FilmController::class, 'show'])->name('film.show');
Route::get('/api/films', [FilmController::class, 'getAllFilms']);


require __DIR__.'/auth.php';
