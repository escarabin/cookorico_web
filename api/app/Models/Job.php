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
     * Get job post applications
     */
    public function applications()
    {
        return $this->hasMany(Application::class);
    }

    /**
     * Get the job's business
     */
    public function business()
    {
        return $this->belongsTo(Business::class);
    }

    /**
     * Get the user that posted the job offer
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the job's type
     */
    public function jobNaming()
    {
        return $this->belongsTo(JobNaming::class);
    }

    /**
     * Get the job's contract type
     */
    public function contractType()
    {
        return $this->belongsTo(ContractType::class);
    }

    /**
     * Get the job's type
     */
    public function type()
    {
        return $this->belongsTo(JobType::class);
    }

    /**
     * Get the job's required study level
     */
    public function studyLevel()
    {
        return $this->belongsTo(StudyLevel::class);
    }

    /**
     * Get the job's required experience level
     */
    public function jobXpLevel()
    {
        return $this->belongsTo(JobXpLevel::class);
    }

    /**
     * Get the job's required study level
     */
    public function languages()
    {
        return $this->belongsToMany(Language::class);
    }

    /**
     * Get the job's alert frequency
     */
    public function alertFrequency()
    {
        return $this->belongsTo(AlertFrequency::class);
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