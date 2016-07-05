<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserStatus extends Model
{

    protected $table = 'user_status';

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