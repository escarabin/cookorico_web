<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Alert extends Model
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
     * Get the user that created the alert
     */
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    /**
     * Get the alert's job naming
     */
    public function jobNaming()
    {
        return $this->belongsTo('App\Models\JobNaming');
    }
}