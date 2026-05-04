<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Evaluation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class EvaluationController extends Controller
{
    /**
     * Display a listing of the evaluations.
     */
    public function index(Request $request)
    {
        $query = Evaluation::with(['student:id,name', 'teacher:id,name']);

        // Optional filtering by student or teacher
        if ($request->has('student_id')) {
            $query->where('student_id', $request->student_id);
        }
        if ($request->has('teacher_id')) {
            $query->where('teacher_id', $request->teacher_id);
        }

        return response()->json([
            'status' => 'success',
            'data' => $query->orderBy('date', 'desc')->get()
        ]);
    }

    /**
     * Store a newly created evaluation in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'student_id' => 'required|exists:users,id',
            'teacher_id' => 'required|exists:users,id',
            'date' => 'required|date',
            'memorization_score' => 'nullable|integer|min:0|max:100',
            'revision_score' => 'nullable|integer|min:0|max:100',
            'notes' => 'nullable|string'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $evaluation = Evaluation::create($request->all());

        return response()->json([
            'status' => 'success',
            'message' => 'تم إضافة التقييم بنجاح',
            'data' => $evaluation->load(['student:id,name', 'teacher:id,name'])
        ], 201);
    }

    /**
     * Display the specified evaluation.
     */
    public function show($id)
    {
        $evaluation = Evaluation::with(['student:id,name', 'teacher:id,name'])->find($id);

        if (!$evaluation) {
            return response()->json(['message' => 'التقييم غير موجود'], 404);
        }

        return response()->json([
            'status' => 'success',
            'data' => $evaluation
        ]);
    }

    /**
     * Update the specified evaluation in storage.
     */
    public function update(Request $request, $id)
    {
        $evaluation = Evaluation::find($id);

        if (!$evaluation) {
            return response()->json(['message' => 'التقييم غير موجود'], 404);
        }

        $validator = Validator::make($request->all(), [
            'date' => 'sometimes|date',
            'memorization_score' => 'nullable|integer|min:0|max:100',
            'revision_score' => 'nullable|integer|min:0|max:100',
            'notes' => 'nullable|string'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $evaluation->update($request->all());

        return response()->json([
            'status' => 'success',
            'message' => 'تم تحديث التقييم بنجاح',
            'data' => $evaluation->load(['student:id,name', 'teacher:id,name'])
        ]);
    }

    /**
     * Remove the specified evaluation from storage.
     */
    public function destroy($id)
    {
        $evaluation = Evaluation::find($id);

        if (!$evaluation) {
            return response()->json(['message' => 'التقييم غير موجود'], 404);
        }

        $evaluation->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'تم حذف التقييم بنجاح'
        ]);
    }
}
