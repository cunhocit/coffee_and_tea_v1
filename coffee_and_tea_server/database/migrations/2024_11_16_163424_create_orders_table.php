<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('email')->nullable();
            $table->string('cus_name');
            $table->string('phone');
            $table->string('address');
            $table->string('category')->nullable();
            $table->string('product');
            $table->integer('quantity');
            $table->integer('price');
            $table->string('pay_method')->nullable();
            $table->string('status')->nullable();
            $table->string('transport')->nullable();
            $table->string('discount_voucher')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
