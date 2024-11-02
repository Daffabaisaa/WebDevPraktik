<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Film extends Model
{
    protected $table = 'tb_film';
    protected $primaryKey = 'film_id';
    protected $fillable = ['title'];

    use HasFactory;

    // Relasi Many-to-Many
    public function genres()
    {
        return $this->belongsToMany(Genre::class, 'film_genre', 'film_id', 'genre_name');
    }

    public function platforms()
    {
        return $this->belongsToMany(Platform::class, 'film_platform', 'film_id', 'name_platform');
    }

    public function actors()
    {
        return $this->belongsToMany(Cast::class, 'film_cast', 'film_id', 'cast_id');
    }

     // Relasi ke Country
     public function country()
     {
         // 'country_name' adalah foreign key di tabel films
         return $this->belongsTo(Country::class, 'country_name', 'country_name');
     }

}


