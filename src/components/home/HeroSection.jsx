import React from 'react';
import { MdPlayArrow, MdArrowForward, MdSchool, MdGroups, MdLibraryBooks } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-40 pb-32 px-4 bg-white overflow-hidden" dir="rtl">
      
      {/* 🟢 Background Accents */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-50 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-50/50 rounded-full blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-12 relative z-10">
        
        {/* 📝 Content Side */}
        <div className="space-y-10">
          <div className="inline-flex items-center gap-3 px-12 py-6 bg-emerald-50 text-emerald-800 rounded-full text-2xl font-bold mx-auto border border-emerald-100 shadow-sm">
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
            وَقُل رَّبِّ زِدْنِي عِلْمًا
          </div>





          <h1 className="text-5xl md:text-8xl font-black text-gray-900 leading-[1.1] tracking-tight animate-slide-up">
            حفظ، تجويد وتفسير <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-600 to-emerald-800">
              بأسلوب عصري فريد
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-500 font-medium leading-relaxed max-w-3xl mx-auto animate-slide-up delay-100">
            اكتشف بيئة تعليمية تفاعلية تجمع بين أصالة المنهج وحداثة الوسيلة، مع نخبة من المتخصصين في علوم القرآن واللغة العربية.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 animate-slide-up delay-200">
            <button 
              onClick={() => navigate('/register', { state: { accountType: 'student' } })}
              className="px-12 py-6 bg-emerald-800 text-white rounded-[2rem] text-xl font-black shadow-2xl shadow-emerald-100 hover:bg-emerald-900 hover:scale-105 transition-all flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              اشتراك الآن
              <MdArrowForward className="rotate-180" size={24} />
            </button>
            
            <button 
              onClick={() => navigate('/register', { state: { accountType: 'student' } })}
              className="px-12 py-6 bg-white border-2 border-gray-100 text-gray-600 rounded-[2rem] text-xl font-black hover:bg-gray-50 transition-all flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              تواصل مع مستشار تعليمي
            </button>
          </div>

          {/* 📊 Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 pt-16 border-t border-gray-50 animate-fade-in delay-300">
            <HeroStat icon={<MdSchool />} label="طالب نشط" val="+2,000" />
            <HeroStat icon={<MdGroups />} label="معلم متخصص" val="+150" />
            <HeroStat icon={<MdLibraryBooks />} label="مادة تعليمية" val="+500" />
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; opacity: 0; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}} />
    </section>
  );
}

const HeroStat = ({ icon, label, val }) => (
  <div className="flex flex-col items-center text-center">
    <div className="flex items-center gap-2 text-emerald-700 mb-1">
      <span className="text-2xl">{icon}</span>
      <span className="text-3xl font-black">{val}</span>
    </div>
    <p className="text-xs font-black text-gray-400 uppercase tracking-widest">{label}</p>
  </div>
);

export default HeroSection;