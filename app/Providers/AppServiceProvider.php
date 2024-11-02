<?php

namespace App\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    // public function boot(): void
    // {
    //     Vite::prefetch(concurrency: 3);
    // }

    // app/Providers/AppServiceProvider.php



    public function boot()
    {
        Inertia::share([
            'auth' => [
                'user' => fn () => Auth::user() ? Auth::user() : null,
            ],
        ]);
    }

}
