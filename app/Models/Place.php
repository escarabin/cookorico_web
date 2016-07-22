<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Place extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'lat', 'lon', 'adress'
    ];

    /**
     * Get place's type (see https://developers.google.com/places/supported_types?hl=fr)
     */
    public function types()
    {
        return $this->belongsToMany(PlaceType::class);
    }
}