<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use PHPUnit\Metadata\Uses;

class Social extends Model
{
    use HasFactory;

    protected $fillable = ["logo", "url", "user_id"];



    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
