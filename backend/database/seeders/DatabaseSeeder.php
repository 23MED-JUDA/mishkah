<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Circle;
use App\Models\Task;
use App\Models\Evaluation;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Faker\Factory as Faker;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $faker = Faker::create('ar_SA');

        // Create main users for testing
        $admin = User::create([
            'name' => 'مدير النظام',
            'email' => 'admin@mishkat.com',
            'password' => Hash::make('password'),
            'role' => 'admin',
            'phone' => '0500000000'
        ]);

        $teacher1 = User::create([
            'name' => 'الشيخ أحمد',
            'email' => 'teacher@mishkat.com',
            'password' => Hash::make('password'),
            'role' => 'teacher',
            'phone' => '0500000001'
        ]);

        $student1 = User::create([
            'name' => 'الطالب محمد',
            'email' => 'student@mishkat.com',
            'password' => Hash::make('password'),
            'role' => 'student',
            'phone' => '0500000002'
        ]);

        // Generate 10 Teachers
        $teachers = collect([$teacher1]);
        for ($i = 0; $i < 9; $i++) {
            $teachers->push(User::create([
                'name' => $faker->name,
                'email' => $faker->unique()->safeEmail,
                'password' => Hash::make('password'),
                'role' => 'teacher',
                'phone' => $faker->phoneNumber
            ]));
        }

        // Generate 30 Students
        $students = collect([$student1]);
        for ($i = 0; $i < 29; $i++) {
            $students->push(User::create([
                'name' => $faker->name,
                'email' => $faker->unique()->safeEmail,
                'password' => Hash::make('password'),
                'role' => 'student',
                'phone' => $faker->phoneNumber
            ]));
        }

        // Generate Circles
        $circleNames = ['حلقة الإمام الشافعي', 'حلقة الإمام مالك', 'حلقة الإمام أحمد', 'حلقة الإمام أبو حنيفة', 'حلقة البخاري', 'حلقة مسلم'];
        $circles = [];
        
        foreach ($circleNames as $name) {
            $teacher = $teachers->random();
            $circle = Circle::create([
                'name' => $name,
                'teacher_id' => $teacher->id,
                'schedule_details' => 'أيام ' . $faker->dayOfWeek . ' و ' . $faker->dayOfWeek . ' بعد العصر'
            ]);
            
            // Attach random students to this circle
            $circleStudents = $students->random(rand(5, 10))->pluck('id');
            $circle->students()->attach($circleStudents);
            
            $circles[] = $circle;
        }

        // Generate Evaluations and Tasks
        foreach ($students as $student) {
            // Give each student 2-5 evaluations
            for ($i = 0; $i < rand(2, 5); $i++) {
                Evaluation::create([
                    'student_id' => $student->id,
                    'teacher_id' => $teachers->random()->id,
                    'date' => $faker->dateTimeBetween('-1 month', 'now'),
                    'memorization_score' => rand(70, 100),
                    'revision_score' => rand(70, 100),
                    'notes' => 'مستوى الطالب ' . $faker->randomElement(['ممتاز', 'جيد جداً', 'يحتاج إلى تحسين المراجعة', 'ممتاز في التجويد'])
                ]);
            }

            // Give each student 1-3 tasks
            for ($i = 0; $i < rand(1, 3); $i++) {
                Task::create([
                    'title' => 'حفظ سورة ' . $faker->randomElement(['البقرة', 'آل عمران', 'النساء', 'المائدة', 'الأنعام', 'التوبة', 'يونس']),
                    'description' => 'الرجاء حفظ الجزء المحدد والمراجعة مع التلاوة الصحيحة.',
                    'student_id' => $student->id,
                    'teacher_id' => $teachers->random()->id,
                    'due_date' => $faker->dateTimeBetween('now', '+2 weeks'),
                    'status' => $faker->randomElement(['pending', 'completed'])
                ]);
            }
        }
        // Generate Courses (Plans)
        $courseData = [
            ['title' => 'تفسير', 'description' => 'فهم الآيات القرآنية بعمق', 'level' => 'مبتدئ', 'price' => 180, 'type' => 'شهري'],
            ['title' => 'تجويد', 'description' => 'إتقان التلاوة وأحكام التجويد', 'level' => 'متوسط', 'price' => 200, 'type' => 'شهري'],
            ['title' => 'تحفيظ', 'description' => 'حفظ القرآن الكريم مع مراجعة مستمرة', 'level' => 'متقدم', 'price' => 250, 'type' => 'شهري'],
        ];

        foreach ($courseData as $data) {
            \App\Models\Course::create($data);
        }
    }
}
