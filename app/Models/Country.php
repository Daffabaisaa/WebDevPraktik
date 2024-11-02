<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    public $timestamps = false;

    protected $table = 'tb_country';
    protected $primaryKey = 'country_name';
    protected $keyType = 'string'; 
    

    use HasFactory;

    public function films()
    {
        // 'country_name' adalah foreign key di tabel films
        return $this->hasMany(Film::class, 'country_name', 'country_name');
    }
}
