<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JobNaming extends Model
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
     * Get the group which this job naming is in
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function jobNamingGroup()
    {
        return $this->belongsTo(JobNamingGroup::class);
    }
}