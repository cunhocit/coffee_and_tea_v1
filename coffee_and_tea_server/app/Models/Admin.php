<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;

class Admin extends Authenticatable implements JWTSubject
{
    use Notifiable;

    protected $table = 'admin';
    protected $fillable = [
        'name',
        'email',
        'password',
        'phone',
        'birth_date',
        'image',
        'verify',
        'verify_at'
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
