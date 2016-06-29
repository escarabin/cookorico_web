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
     * Get user's type
     */
    public function type()
    {
        return $this->hasOne('App\Models\UserType');
    }

    /**
     * Get user's civility
     */
    public function civility()
    {
        return $this->hasOne('App\Models\Civility');
    }
    /**
     * Get user's state
     */
    public function status()
    {
        return $this->hasOne('App\Models\UserStatus');
    }
    /**
     * Get businesses that this user owns
     */
    public function businesses()
    {
        return $this->hasMany('App\Models\Business');
    }

    /**
     * Get user's spoken languages
     */
    public function languages()
    {
        return $this->belongsToMany('App\Models\Language');
    }

    /**
     * Get user's spoken languages
     */
    public function diplomas()
    {
        return $this->belongsToMany('App\Models\Diploma');
    }

    /**
     * Get user's job applications
     */
    public function applications()
    {
        return $this->hasMany('App\Models\Application');
    }

    /**
     * Get user's work experiences
     */
    public function experiences()
    {
        return $this->hasMany('App\Models\Experience');
    }
}