<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Genre extends Model
{
    protected $table = 'tb_genre';
    protected $primaryKey = 'genre_name';
    protected $keyType = 'string'; 

    use HasFactory;
}


