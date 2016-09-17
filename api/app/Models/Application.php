<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Application extends Model
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
     * Get the related job
     */
    public function job()
    {
        return $this->belongsTo(Job::class);
    }

    /**
     * Get the user that submitted the application
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}