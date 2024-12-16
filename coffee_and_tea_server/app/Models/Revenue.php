<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Revenue extends Model
{
    use HasFactory;

    protected $table = 'revenue';
    protected $primaryKey = 'id';

    protected $fillable = [
        'category',
        'product',
        'quantity',
        'revenue',
    ];
}
