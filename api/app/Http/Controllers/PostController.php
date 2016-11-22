<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

use App\Models\Post;

class PostController extends Controller
{
    /**
     * Show specific post
     *
     * @param $id
     * @return mixed
     */
    public function get($id)
    {
        $post = Post::find($id);

        return $post;
    }

    /**
     * Get all posts
     *
     * @return mixed
     */
    public function getAll() {
        $posts = Post::all();

        return $posts;
    }
}