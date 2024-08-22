<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogPost extends Model
{
    use HasFactory;
    protected $fillable = ["title", "thumbnail", "slug", "user_id", "category_id", "content"];


    public function category()
    {
        return $this->hasMany(Category::class);
    }
}
