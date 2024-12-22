<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Voucher extends Model
{
    use HasFactory;

    protected $table = 'voucher';
    protected $primaryKey = 'id';
    protected $fillable = [
        'voucher_code',
        'discount_percentage',
        'quantity',
        'type_code',
        'end_date',
        'customer_claims',
        'created_at',
        'updated_at',
    ];
}
