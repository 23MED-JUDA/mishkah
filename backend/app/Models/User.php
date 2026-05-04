<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

use Laravel\Sanctum\HasApiTokens;
use App\Models\Circle;
use App\Models\Evaluation;
use App\Models\Task;
use App\Models\Payment;
use App\Models\Notification;

class User extends Authenticatable
{
    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
        'phone',
        'location',
        'national_id',
        'gender',
        'age',
        'track',
        'experience',
        'specialty',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    /** @use HasFactory<UserFactory> */
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    // Teacher Relationships
    public function teachingCircles(): HasMany
    {
        return $this->hasMany(Circle::class, 'teacher_id');
    }

    public function givenEvaluations(): HasMany
    {
        return $this->hasMany(Evaluation::class, 'teacher_id');
    }

    public function givenTasks(): HasMany
    {
        return $this->hasMany(Task::class, 'teacher_id');
    }

    // Student Relationships
    public function studentCircles(): BelongsToMany
    {
        return $this->belongsToMany(Circle::class, 'circle_student', 'student_id', 'circle_id')->withTimestamps();
    }

    public function receivedEvaluations(): HasMany
    {
        return $this->hasMany(Evaluation::class, 'student_id');
    }

    public function receivedTasks(): HasMany
    {
        return $this->hasMany(Task::class, 'student_id');
    }

    // Common Relationships
    public function payments(): HasMany
    {
        return $this->hasMany(Payment::class);
    }

    public function userNotifications(): HasMany
    {
        return $this->hasMany(Notification::class);
    }
}
