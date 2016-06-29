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
        return $this->belongsTo('App\Models\User', 'id', 'employee_user_id');
    }

    /**
     * Get the employee who the testimonial is about
     */
    public function recruiter()
    {
        return $this->belongsTo('App\Models\User', 'id', 'recruiter_user_id');
    }

    /**
     * Get the testimonial's job naming
     */
    public function jobNaming()
    {
        return $this->belongsTo('App\Models\JobNaming');
    }
}