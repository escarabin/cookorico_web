<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
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
     * Get the user that made the transaction
     */
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    /**
     * Get the type of pricing plan was bought
     */
    public function pricingPlan()
    {
        return $this->hasOne('App\Models\PricingPlan');
    }

    /**
     * Get the payment type
     */
    public function paymentType()
    {
        return $this->hasOne('App\Models\PayementType');
    }
}