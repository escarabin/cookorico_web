<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * Get businesses that this user owns
     */
    public function businesses()
    {
        return $this->hasMany('App\Models\Business');
    }

    /**
     * Get user's type
     */
    public function userType()
    {
        return $this->hasOne('App\Models\UserType');
    }

    /**
     * Get user's spoken languages
     */
    public function languages()
    {
        return $this->belongsToMany('App\Models\Language');
    }
}
