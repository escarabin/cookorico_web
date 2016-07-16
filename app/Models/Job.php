<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

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
    public function jobNaming()
    {
        return $this->belongsTo('App\Models\JobNaming');
    }

    /**
     * Get the job's contract type
     */
    public function contractType()
    {
        return $this->belongsTo('App\Models\ContractType');
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
     * Get the job's required experience level
     */
    public function jobXpLevel()
    {
        return $this->belongsTo('App\Models\JobXpLevel');
    }

    /**
     * Get the job's required study level
     */
    public function languages()
    {
        return $this->belongsToMany('App\Models\Language');
    }

    /**
     * Get the job's alert frequency
     */
    public function alertFrequency()
    {
        return $this->belongsTo('App\Models\AlertFrequency');
    }

    /**
     * Parse job start date
     * @param $value
     * @return string
     */
    public function getStartDateAttribute($value) {
        $carbonDate = Carbon::parse($value);

        return $carbonDate->toDateString();
    }

    /**
     * Parse job end date
     * @param $value
     * @return string
     */
    public function getEndDateAttribute($value) {
        $carbonDate = Carbon::parse($value);

        return $carbonDate->toDateString();
    }

    /**
     * Parse job end date
     * @param $value
     * @return string
     */
    public function getCreatedAtAttribute($value) {
        $carbonDate = Carbon::parse($value);

        return $carbonDate->toDateString();
    }
}