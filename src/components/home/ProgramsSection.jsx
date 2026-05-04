import React from 'react';
import { MdMenuBook, MdMic, MdFavorite, MdArrowForward } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

function ProgramsSection() {
  const navigate = useNavigate();

  const programs = [
    {
      id: 1,
      title: "التفسير والتدبر",
      description: "فهم معاني القرآن الكريم وتدبر آياته بأسلوب مبسط وعميق يلامس القلب.",
      iconName: "book",
      color: "emerald"
    },
    {
      id: 2,
      title: "التجويد والإتقان",
      description: "تعلم أحكام التجويد ومخارج الحروف لقراءة صحيحة خالية من اللحن والأخطاء.",
      iconName: "mic",
      color: "blue"
    },
    {
      id: 3,
      title: "الحفظ والمتابعة",
      description: "خطة متابعة ذكية للحفظ والمراجعة المستمرة مع نخبة من المعلمين المجازين.",
      iconName: "favorite",
      color: "amber"
    }

  ];

  const handleProgramClick = (program) => {
    navigate('/program-details', { state: { program } });
  };





  return (
    <section className="py-32 px-4 bg-gray-50/50 relative overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-block px-4 py-1 bg-emerald-100 text-emerald-800 rounded-lg text-[10px] font-black uppercase tracking-widest mb-6">
          مساراتنا التعليمية
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">برامجنا المتخصصة</h2>
        <p className="text-gray-500 font-medium mb-20 max-w-2xl mx-auto">اختر المسار الذي يناسب طموحك وابدأ رحلتك القرآنية في بيئة تعليمية محفزة.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {programs.map((program) => (
            <div 
              key={program.id} 
              onClick={() => handleProgramClick(program)}
              className="group bg-white p-12 rounded-[3.5rem] shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 cursor-pointer text-right relative overflow-hidden"
            >
              <div className={`w-20 h-20 rounded-3xl flex items-center justify-center text-4xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500
                ${program.color === 'emerald' ? 'bg-emerald-50 text-emerald-700 shadow-lg shadow-emerald-100' : 
                  program.color === 'blue' ? 'bg-blue-50 text-blue-700 shadow-lg shadow-blue-100' : 
                  'bg-amber-50 text-amber-700 shadow-lg shadow-amber-100'}`}>
                {program.iconName === 'book' ? <MdMenuBook /> : 
                 program.iconName === 'mic' ? <MdMic /> : 
                 <MdFavorite />}
              </div>


              <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-emerald-800 transition-colors">{program.title}</h3>
              <p className="text-gray-400 font-medium leading-relaxed mb-10 text-sm">
                {program.description}
              </p>

              <div className="flex items-center gap-2 text-emerald-700 font-black text-xs uppercase tracking-widest">
                استكشف البرنامج
                <MdArrowForward className="rotate-180 group-hover:translate-x-2 transition-transform" size={20} />
              </div>
              
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gray-50 rounded-full blur-3xl opacity-50 group-hover:bg-emerald-50 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgramsSection;
