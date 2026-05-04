<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TaskController extends Controller
{
    /**
     * Display a listing of tasks.
     */
    public function index(Request $request)
    {
        $query = Task::with(['student:id,name', 'teacher:id,name']);

        // Optional filtering
        if ($request->has('student_id')) {
            $query->where('student_id', $request->student_id);
        }
        if ($request->has('teacher_id')) {
            $query->where('teacher_id', $request->teacher_id);
        }
        if ($request->has('status')) {
            $query->where('status', $request->status);
        }

        return response()->json([
            'status' => 'success',
            'data' => $query->orderBy('due_date', 'asc')->get()
        ]);
    }

    /**
     * Store a newly created task in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'student_id' => 'required|exists:users,id',
            'teacher_id' => 'required|exists:users,id',
            'due_date' => 'nullable|date',
            'status' => 'nullable|in:pending,completed'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $task = Task::create($request->all());

        return response()->json([
            'status' => 'success',
            'message' => 'تم إضافة المهمة بنجاح',
            'data' => $task->load(['student:id,name', 'teacher:id,name'])
        ], 201);
    }

    /**
     * Display the specified task.
     */
    public function show($id)
    {
        $task = Task::with(['student:id,name', 'teacher:id,name'])->find($id);

        if (!$task) {
            return response()->json(['message' => 'المهمة غير موجودة'], 404);
        }

        return response()->json([
            'status' => 'success',
            'data' => $task
        ]);
    }

    /**
     * Update the specified task in storage.
     */
    public function update(Request $request, $id)
    {
        $task = Task::find($id);

        if (!$task) {
            return response()->json(['message' => 'المهمة غير موجودة'], 404);
        }

        $validator = Validator::make($request->all(), [
            'title' => 'sometimes|string|max:255',
            'description' => 'nullable|string',
            'due_date' => 'nullable|date',
            'status' => 'sometimes|in:pending,completed'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $task->update($request->all());

        return response()->json([
            'status' => 'success',
            'message' => 'تم تحديث المهمة بنجاح',
            'data' => $task->load(['student:id,name', 'teacher:id,name'])
        ]);
    }

    /**
     * Remove the specified task from storage.
     */
    public function destroy($id)
    {
        $task = Task::find($id);

        if (!$task) {
            return response()->json(['message' => 'المهمة غير موجودة'], 404);
        }

        $task->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'تم حذف المهمة بنجاح'
        ]);
    }
}
