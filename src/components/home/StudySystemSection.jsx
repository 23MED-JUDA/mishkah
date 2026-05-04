import React from 'react';

function StudySystemSection() {
  const steps = [
    {
      number: "1",
      title: "تحديد المستوى",
      description: "يقوم المعلم بعمل اختبار مبدئي لتحديد المستوى المناسب لك للبدء منه."
    },
    {
      number: "2",
      title: "التخصيص والمتابعة",
      description: "وضع خطة مناسبة لك مع جدول زمني واضح ومتابعة مستمرة."
    },
    {
      number: "3",
      title: "الممارسة والتقييم",
      description: "حضور الحلقات والممارسة الدورية مع تقييم مستمر لتحسين الأداء."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white relative">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">نظام الدراسة</h2>
        <p className="text-gray-500 mb-16">خطوات واضحة تضمن لك التفوق والاستمرارية</p>

        <div className="space-y-8 relative">
          {/* الخط الواصل بين الدوائر */}
          <div className="hidden md:block absolute right-[50%] top-0 bottom-0 w-1 bg-emerald-100 z-0 transform translate-x-1/2"></div>

          {steps.map((step, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center gap-6 relative z-10 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              
              <div className={`flex-1 ${index % 2 !== 0 ? 'md:text-left' : 'md:text-right'}`}>
                <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>

              <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold border-4 border-white shadow-lg shrink-0 z-10 relative">
                {step.number}
              </div>

              <div className="flex-1"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StudySystemSection;
