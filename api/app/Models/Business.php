<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Log;

class Business extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title'
    ];

    /**
     * Get the user that owns this business
     */
    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    /**
     * Get the clubs related to this business
     */
    public function clubs()
    {
        return $this->belongsToMany(Club::class);
    }

    /**
     * Get the clubs related to this business
     */
    public function type()
    {
        return $this->belongsTo(BusinessType::class);
    }

    /**
     * Get the business's place
     */
    public function place() {
        return $this->belongsTo(Place::class);
    }

    /**
     * Get the business's photos
     */
    public function photos() {
        return $this->hasMany(BusinessPhoto::class);
    }

    /**
     * Get the business's jobs
     */
    public function jobs() {
        return $this->hasMany(Job::class)
                    ->where('created_at', '>', date("Y-m-d", strtotime("-2 months")));
    }
}