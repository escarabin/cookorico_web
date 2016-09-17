<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'content'
    ];


    /**
     * Get the employee who the testimonial is about
     */
    public function employee()
    {
        return $this->belongsTo(User::class, 'employee_user_id', 'id');
    }

    /**
     * Get the employee who the testimonial is about
     */
    public function recruiter()
    {
        return $this->belongsTo(User::class, 'recruiter_user_id', 'id');
    }

    /**
     * Get the testimonial's job naming
     */
    public function jobNaming()
    {
        return $this->belongsTo(JobNaming::class);
    }

    /**
     * Get the testimonial's business
     */
    public function business()
    {
        return $this->belongsTo(Business::class);
    }
}