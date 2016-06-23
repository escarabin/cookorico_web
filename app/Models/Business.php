<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

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
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }


    /**
     * Get the clubs related to this business
     */
    public function clubs()
    {
        return $this->hasMany('App\Models\Club');
    }


    /**
     * Get the clubs related to this business
     */
    public function type()
    {
        return $this->hasOne('App\Models\BusinessType');
    }
}