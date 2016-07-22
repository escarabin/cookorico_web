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
        return $this->belongsTo(UserType::class);
    }

    /**
     * Get user's civility
     */
    public function civility()
    {
        return $this->belongsTo(Civility::class);
    }

    /**
     * Get user's status
     */
    public function status()
    {
        return $this->belongsTo(UserStatus::class);
    }

    /**
     * Get businesses that this user owns
     */
    public function businesses()
    {
        return $this->belongsToMany(Business::class);
    }

    /**
     * Get user's spoken languages
     */
    public function languages()
    {
        return $this->belongsToMany(Language::class);
    }

    /**
     * Get user's spoken languages
     */
    public function diplomas()
    {
        return $this->belongsToMany(Diploma::class);
    }

    /**
     * Get user's job applications
     */
    public function applications()
    {
        return $this->hasMany(Application::class);
    }

    /**
     * Get user's work experiences
     */
    public function experiences()
    {
        return $this->hasMany(Experience::class);
    }

    /**
     * Get user's work experiences
     */
    public function education()
    {
        return $this->hasMany(Study::class);
    }

    /**
     * Get user's new job alerts
     */
    public function alerts()
    {
        return $this->hasMany(Alert::class);
    }

    /**
     * Get user's testimonials
     */
    public function testimonials()
    {
        return $this->hasMany(Testimonial::class, 'employee_user_id');
    }

    /**
     * Get the plans that current user subscribed to
     */
    public function plans()
    {
        return $this->hasMany(Plan::class);
    }

    /**
     * Get testimonials created by this user
     */
    public function createdTestimonials()
    {
        return $this->hasMany(Testimonial::class, 'recruiter_user_id');
    }

    /**
     * Get the job naming that the user is looking for
     */
    public function lookingForJobNaming()
    {
        return $this->belongsTo(JobNaming::class, 'looking_for_job_naming_id');
    }

    /**
     * Get user's job posts
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function jobPosts() {
        return $this->hasMany(Job::class);
    }
}