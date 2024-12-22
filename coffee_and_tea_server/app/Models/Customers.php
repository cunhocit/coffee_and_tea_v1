<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;

class Customers extends Authenticatable implements JWTSubject
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
        'verify_at',
        'status',
        'created_at',
        'updated_at',
    ];

    protected $hidden = [
        'password'
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
