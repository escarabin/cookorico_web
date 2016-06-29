<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Experience extends Model
{

    /**
     * Get the user that owns this business
     */
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }


    /**
     * Get the business related to this experience
     */
    public function business()
    {
        return $this->belongsTo('App\Models\Business');
    }


    /**
     * Get the experience's job naming
     */
    public function jobNaming()
    {
        return $this->belongsTo('App\Models\JobNaming');
    }
}