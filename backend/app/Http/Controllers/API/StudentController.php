<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class StudentController extends Controller
{
    /**
     * Display a listing of all students.
     */
    public function index()
    {
        // Get all students with their circles
        $students = User::where('role', 'student')
            ->with(['studentCircles:id,name,schedule_details'])
            ->get();
            
        return response()->json([
            'status' => 'success',
            'data' => $students
        ]);
    }

    /**
     * Display the specified student with detailed relationships.
     */
    public function show($id)
    {
        $student = User::where('role', 'student')
            ->with([
                'studentCircles.teacher:id,name', // Load the teacher of each circle
                'receivedEvaluations.teacher:id,name', // Load the teacher who gave the evaluation
                'receivedTasks'
            ])
            ->find($id);

        if (!$student) {
            return response()->json(['message' => 'الطالب غير موجود'], 404);
        }

        return response()->json([
            'status' => 'success',
            'data' => $student
        ]);
    }

    /**
     * Update the specified student in storage.
     */
    public function update(Request $request, $id)
    {
        $student = User::where('role', 'student')->find($id);

        if (!$student) {
            return response()->json(['message' => 'الطالب غير موجود'], 404);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'sometimes|string|max:255',
            'phone' => 'nullable|string|max:20',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $student->update($request->only(['name', 'phone']));

        return response()->json([
            'status' => 'success',
            'message' => 'تم تحديث بيانات الطالب بنجاح',
            'data' => $student
        ]);
    }
}
