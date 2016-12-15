<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Contracts\Auth\CanResetPassword;

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
        'password',
        'remember_token',
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
        return $this->hasMany(Application::class)->orderBy('status_id', 'ASC');
    }

    /**
     * Get user's work experiences
     */
    public function experiences()
    {
        return $this->hasMany(Experience::class);
    }

    /**
     * Get user's experience level (1 year, 2 years, etc...)
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function jobXpLevel()
    {
        return $this->belongsTo(JobXpLevel::class);
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
     * Get the place user lives in
     */
    public function place()
    {
        return $this->belongsTo(Place::class);
    }

    /**
     * Get testimonials created by this user
     */
    public function createdTestimonials()
    {
        return $this->hasMany(Testimonial::class, 'recruiter_user_id');
    }

    /**
     * Get the job namings that the user is looking for
     */
    public function lookingForJobNamings()
    {
        return $this->belongsToMany(JobNaming::class);
    }

    /**
     * Get the job namings that the user is looking for
     */
    public function lookingForJobNamingPlaces()
    {
        return $this->belongsToMany(Place::class, 'job_naming_user');
    }

    /**
     * Get members of club if user is a club
     * @return mixed
     */
    public function clubMembers() {
        return $this->hasMany(ClubUser::class, 'club_user_id');
    }

    /**
     * Get user's job posts
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function jobPosts() {
        return $this->hasMany(Job::class)->orderBy('created_at', 'DESC');
    }
}