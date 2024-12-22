<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    use HasFactory;
    protected $table = 'orders';
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
        'transport',
        'discount_voucher',
        'status',
    ];
}
