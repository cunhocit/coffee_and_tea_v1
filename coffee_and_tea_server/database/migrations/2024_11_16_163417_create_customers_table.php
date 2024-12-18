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
        Schema::create('customer', function (Blueprint $table) {
            $table->id();
            $table->string('email')->unique();
            $table->string('password')->nullable();
            $table->string('name')->nullable();
            $table->string('gender')->nullable();
            $table->string('phone')->nullable();
            $table->string('birth_date')->nullable();
            $table->string('address')->nullable();
            $table->integer('balance')->default(0);
            $table->string('image')->nullable();
            $table->integer('verify')->nullable();
            $table->integer('verify_at')->nullable();
            $table->string('status')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customers');
    }
};
