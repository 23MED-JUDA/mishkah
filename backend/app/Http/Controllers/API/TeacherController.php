<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TeacherController extends Controller
{
    /**
     * Display a listing of all teachers.
     */
    public function index()
    {
        // Get all teachers with the circles they are teaching
        $teachers = User::where('role', 'teacher')
            ->with(['teachingCircles:id,name,teacher_id'])
            ->get();
            
        return response()->json([
            'status' => 'success',
            'data' => $teachers
        ]);
    }

    /**
     * Display the specified teacher with detailed relationships.
     */
    public function show($id)
    {
        $teacher = User::where('role', 'teacher')
            ->with([
                'teachingCircles.students:id,name', // Load the students for each circle the teacher teaches
            ])
            ->find($id);

        if (!$teacher) {
            return response()->json(['message' => 'المعلم غير موجود'], 404);
        }

        return response()->json([
            'status' => 'success',
            'data' => $teacher
        ]);
    }

    /**
     * Update the specified teacher in storage.
     */
    public function update(Request $request, $id)
    {
        $teacher = User::where('role', 'teacher')->find($id);

        if (!$teacher) {
            return response()->json(['message' => 'المعلم غير موجود'], 404);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'sometimes|string|max:255',
            'phone' => 'nullable|string|max:20',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $teacher->update($request->only(['name', 'phone']));

        return response()->json([
            'status' => 'success',
            'message' => 'تم تحديث بيانات المعلم بنجاح',
            'data' => $teacher
        ]);
    }
}
