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
        return $this->belongsTo('App\Models\UserType');
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
        return $this->belongsToMany('App\Models\Business');
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

    /**
     * Get user's work experiences
     */
    public function education()
    {
        return $this->hasMany('App\Models\Study');
    }

    /**
     * Get user's new job alerts
     */
    public function alerts()
    {
        return $this->hasMany('App\Models\Alert');
    }

    /**
     * Get user's testimonials
     */
    public function testimonials()
    {
        return $this->hasMany('App\Models\Testimonial', 'employee_user_id');
    }

    /**
     * Get the plans that current user subscribed to
     */
    public function plans()
    {
        return $this->hasMany('App\Models\Plan');
    }

    /**
     * Get testimonials created by this user
     */
    public function createdTestimonials()
    {
        return $this->hasMany('App\Models\Testimonial', 'recruiter_user_id');
    }

    /**
     * Get user's job posts
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function jobPosts() {
        return $this->hasMany('App\Models\Job');
    }
}