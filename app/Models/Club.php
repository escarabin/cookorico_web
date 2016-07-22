<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Club extends Model
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
     * Get the business related to this club
     */
    public function businesses()
    {
        return $this->hasMany(Business:class);
    }
}