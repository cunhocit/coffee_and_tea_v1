<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class History extends Model
{
    use HasFactory;

    protected $table = 'history_order';
    protected $primaryKey = 'id';
    protected $fillable = [
        'email',
        'cus_name',
        'phone',
        'address',
        'category',
        'product',
        'quantity',
        'price',
        'pay_method',
        'status',
        'discount_percentage',
        'end_date',
    ];
}
