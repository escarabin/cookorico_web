<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BusinessType extends Model
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
     * Get the business types related to this pricing plan
     */
    public function pricingPlans()
    {
        return $this->belongsToMany('App\Models\BusinessType');
    }
}