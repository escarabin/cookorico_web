<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Experience extends Model
{

    /**
     * Get the user that owns this business
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }


    /**
     * Get the business related to this experience
     */
    public function business()
    {
        return $this->belongsTo(Business::class);
    }


    /**
     * Get the experience's job naming
     */
    public function jobNaming()
    {
        return $this->belongsTo(JobNaming::class);
    }

    /**
     * Parse experience start date
     * @param $value
     * @return string
     */
    public function getStartDateAttribute($value) {
        $carbonDate = Carbon::parse($value);

        return $carbonDate->toDateString();
    }

    /**
     * Parse experience end date
     * @param $value
     * @return string
     */
    public function getEndDateAttribute($value) {
        $carbonDate = Carbon::parse($value);

        return $carbonDate->toDateString();
    }
}