<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PlaceType extends Model
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
     * Get places related to this type (see https://developers.google.com/places/supported_types?hl=fr)
     */
    public function places()
    {
        return $this->belongsToMany('App\Models\Place');
    }
}