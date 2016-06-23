<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserState extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title'
    ];

    /**
     * Get user's who speaks this language
     */
    public function users()
    {
        return $this->belongsToMany('App\Models\User');
    }
}