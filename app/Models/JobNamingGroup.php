<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JobNamingGroup extends Model
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
     * Get job namings related to this group
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function jobNamings()
    {
        return $this->hasMany('App\Models\JobNaming');
    }
}