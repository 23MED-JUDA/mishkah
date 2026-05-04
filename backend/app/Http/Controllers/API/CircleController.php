<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Circle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CircleController extends Controller
{
    /**
     * Display a listing of the circles.
     */
    public function index()
    {
        // Get all circles with their teacher and students
        $circles = Circle::with(['teacher:id,name,email', 'students:id,name'])->get();
        
        return response()->json([
            'status' => 'success',
            'data' => $circles
        ]);
    }

    /**
     * Store a newly created circle in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'teacher_id' => 'required|exists:users,id',
            'schedule_details' => 'nullable|string',
            'student_ids' => 'nullable|array',
            'student_ids.*' => 'exists:users,id'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $circle = Circle::create([
            'name' => $request->name,
            'teacher_id' => $request->teacher_id,
            'schedule_details' => $request->schedule_details,
        ]);

        if ($request->has('student_ids')) {
            $circle->students()->attach($request->student_ids);
        }

        return response()->json([
            'status' => 'success',
            'message' => 'تم إنشاء الحلقة بنجاح',
            'data' => $circle->load(['teacher:id,name', 'students:id,name'])
        ], 201);
    }

    /**
     * Display the specified circle.
     */
    public function show($id)
    {
        $circle = Circle::with(['teacher:id,name,email,phone', 'students:id,name,email'])->find($id);

        if (!$circle) {
            return response()->json(['message' => 'الحلقة غير موجودة'], 404);
        }

        return response()->json([
            'status' => 'success',
            'data' => $circle
        ]);
    }

    /**
     * Update the specified circle in storage.
     */
    public function update(Request $request, $id)
    {
        $circle = Circle::find($id);

        if (!$circle) {
            return response()->json(['message' => 'الحلقة غير موجودة'], 404);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'sometimes|string|max:255',
            'teacher_id' => 'sometimes|exists:users,id',
            'schedule_details' => 'nullable|string',
            'student_ids' => 'nullable|array',
            'student_ids.*' => 'exists:users,id'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $circle->update($request->only(['name', 'teacher_id', 'schedule_details']));

        if ($request->has('student_ids')) {
            // sync() will add new IDs and remove old ones that are not in the array
            $circle->students()->sync($request->student_ids);
        }

        return response()->json([
            'status' => 'success',
            'message' => 'تم تحديث بيانات الحلقة بنجاح',
            'data' => $circle->load(['teacher:id,name', 'students:id,name'])
        ]);
    }

    /**
     * Remove the specified circle from storage.
     */
    public function destroy($id)
    {
        $circle = Circle::find($id);

        if (!$circle) {
            return response()->json(['message' => 'الحلقة غير موجودة'], 404);
        }

        $circle->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'تم حذف الحلقة بنجاح'
        ]);
    }
}
