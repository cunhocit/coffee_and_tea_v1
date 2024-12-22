<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'name', 'email', 'password', 'role',
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    // Kiểm tra xem người dùng có phải là admin không
    public function isAdmin()
    {
        return $this->role === 'admin';
    }

    // Kiểm tra xem người dùng có phải là customer không
    public function isCustomer()
    {
        return $this->role === 'customer';
    }
}

