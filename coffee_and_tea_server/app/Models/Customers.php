<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customers extends Model
{
    use HasFactory;
    protected $table = 'customer';
    protected $primaryKey = 'id';
    protected $fillable = [
        'email',
        'password',
        'name',
        'gender',
        'phone',
        'birth_date',
        'address',
        'balance',
        'image',
        'verify',
        'status',
        'created_at',
        'updated_at',
    ];
}
