<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Study extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'description'
    ];

    protected $table = "studies";

    /**
     * Get the user that made this study
     */
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    /**
     * Get the diploma
     */
    public function diploma()
    {
        return $this->belongsTo('App\Models\Diploma');
    }

    /**
     * Parsing study start date
     * @param $value
     * @return string
     */
    public function getStartDateAttribute($value) {
        $carbonDate = Carbon::parse($value);

        return $carbonDate->toDateString();
    }

    /**
     * Parsing study end date
     * @param $value
     * @return string
     */
    public function getEndDateAttribute($value) {
        $carbonDate = Carbon::parse($value);

        return $carbonDate->toDateString();
    }
}