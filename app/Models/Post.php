<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'content'
    ];


    /**
     * Get the user that published the post
     */
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }
}