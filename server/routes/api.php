<?php

use App\Models\BlogPost;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use function Laravel\Prompts\text;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');


Route::get("/posts", function () {
    $posts = BlogPost::with("category")->paginate(1);
    return response()->json(["posts" => $posts]);
    
});
Route::get("/posts/{slug}", function ($slug) {
    $post = BlogPost::with("category")->where("slug", $slug)->get();
    return response()->json(["post" => $post[0]]);
    
});

Route::get("/user", function () {
    $user = User::with("socials")->find(1);
    return response()->json(["user" => $user]);
});
