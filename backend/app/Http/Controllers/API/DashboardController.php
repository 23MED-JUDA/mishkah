<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Video;
use App\Models\Course;
use App\Models\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * Get statistics for the dashboard.
     */
    public function index()
    {
        try {
            $videosCount = Video::count();
            $programsCount = Course::count();
            $teachersCount = User::where('role', 'teacher')->count();

            return response()->json([
                'success' => true,
                'data' => [
                    'videos_count' => $videosCount,
                    'programs_count' => $programsCount,
                    'teachers_count' => $teachersCount
                ]
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error fetching dashboard stats',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
