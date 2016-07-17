<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Plan extends Model
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
     * Get the user that subscribed for this plan
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    /**
     * Get current plan's pricing
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function pricingPlan()
    {
        return $this->belongsTo('App\Models\PricingPlan');
    }
}