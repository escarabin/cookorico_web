<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AlertFrequency extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title'
    ];

    protected $table = "alert_frequencies";
}