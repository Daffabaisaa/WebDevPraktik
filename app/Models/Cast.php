<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cast extends Model
{
    protected $table = 'tb_cast';
    protected $primaryKey = 'cast_id';

    use HasFactory;
}