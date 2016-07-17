<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PricingPlan extends Model
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
    public function businessTypes()
    {
        return $this->belongsToMany('App\Models\PricingPlan');
    }
}