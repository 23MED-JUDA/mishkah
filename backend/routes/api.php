<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\CircleController;
use App\Http\Controllers\API\EvaluationController;
use App\Http\Controllers\API\TaskController;
use App\Http\Controllers\API\StudentController;
use App\Http\Controllers\API\TeacherController;
use App\Http\Controllers\API\DashboardController;
use App\Http\Controllers\API\CourseController;

// Public routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login'])->name('login');
Route::get('/courses', [CourseController::class, 'index']); // Public for browsing

// مسار تجريبي مفتوح (للتأكد من ظهور البيانات في المتصفح)
Route::get('/tasks', [TaskController::class, 'index']);
Route::get('/dashboard-stats', [DashboardController::class, 'index']);

// Protected routes
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', function (Request $request) {
        return $request->user();
    });

    // Circles
    Route::apiResource('circles', CircleController::class);
    
    // Evaluations
    Route::apiResource('evaluations', EvaluationController::class);
    
    // Students
    Route::apiResource('students', StudentController::class);

    // Teachers
    Route::apiResource('teachers', TeacherController::class);

    // Admin specific
    Route::get('/admin/users', [AuthController::class, 'allUsers']);
});