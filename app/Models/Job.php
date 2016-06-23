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
        'date'
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
}