<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BusinessPhoto extends Model
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
     * Get the business related to this club
     */
    public function business()
    {
        return $this->hasOne(Business::class);
    }
}