<?php

namespace App\Valid;

use App\Models\Admin;

class AuthValid
{
    public function emailExists($email)
    {
        return Admin::where('email', $email)->exists();
    }
}
