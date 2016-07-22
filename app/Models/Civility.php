<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Civility extends Model
{

    protected $table = 'civilities';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'lat', 'lon', 'adress'
    ];


    /**
     * Get the user that owns this business
     */
    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}