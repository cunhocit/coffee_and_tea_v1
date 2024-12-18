<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;

class Customers extends Model implements JWTSubject
{
    use Notifiable;

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

    // JWT required methods
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }
}
