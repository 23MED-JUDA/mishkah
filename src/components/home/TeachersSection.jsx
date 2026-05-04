import React from 'react';
import { FaStar } from 'react-icons/fa';

function TeachersSection() {
  const teachers = [
    {
      id: 1,
      name: "الأستاذة أميرة محمد",
      specialty: "معلمة قراءات وتجويد",
      description: "مجازة بالقراءات العشر الصغرى والكبرى بخبرة تزيد عن 10 سنوات في تعليم النساء والأطفال.",
      image: null
    },
    {
      id: 2,
      name: "الشيخ أحمد محمود",
      specialty: "معلم حفظ وتفسير",
      description: "حاصل على إجازة في الحفظ وتفسير القرآن الكريم بأسلوب مبسط وشيق للطلاب.",
      image: null
    },
    {
      id: 3,
      name: "الشيخ إبراهيم خالد",
      specialty: "معلم علوم شرعية ولغة عربية",
      description: "متخصص في تبسيط العلوم الشرعية وقواعد اللغة العربية لغير الناطقين بها بخبرة واسعة.",
      image: null
    }

  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">نخبة من المعلمين المتخصصين</h2>
        <p className="text-gray-500 mb-12">معلمون مجازون ذوي كفاءة عالية لضمان أفضل تجربة تعليمية</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow text-center">
              {teacher.image ? (
                <img src={teacher.image} alt={teacher.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-emerald-50" />
              ) : (
                <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-emerald-100 flex items-center justify-center text-emerald-700 text-4xl border-4 border-emerald-50">
                  {teacher.name.charAt(0)}
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-800 mb-1">{teacher.name}</h3>

              <p className="text-emerald-600 text-sm font-semibold mb-3">{teacher.specialty}</p>
              
              <div className="flex justify-center gap-1 text-yellow-400 mb-4">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {teacher.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeachersSection;
