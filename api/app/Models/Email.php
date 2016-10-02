<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Email extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'subject', 'message'
    ];

    /**
     * Get the user who the mail was sent to
     */
    public function recipient()
    {
        return $this->belongsTo(User::class);
    }
}