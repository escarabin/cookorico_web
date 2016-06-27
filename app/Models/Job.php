<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Job extends Model
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
     * Get the job's business
     */
    public function business()
    {
        return $this->belongsTo('App\Models\Business');
    }

    /**
     * Get the user that posted the job offer
     */
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    /**
     * Get the job's type
     */
    public function naming()
    {
        return $this->belongsTo('App\Models\JobNaming');
    }

    /**
     * Get the job's type
     */
    public function type()
    {
        return $this->belongsTo('App\Models\JobType');
    }

    /**
     * Get the job's type
     */
    public function state()
    {
        return $this->belongsTo('App\Models\State');
    }

    /**
     * Get the job's required study level
     */
    public function studyLevel()
    {
        return $this->belongsTo('App\Models\StudyLevel');
    }

    /**
     * Get the job's required study level
     */
    public function languages()
    {
        return $this->belongsToMany('App\Models\Language');
    }
}