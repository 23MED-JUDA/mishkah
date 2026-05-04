import React from 'react'
import { 
  MdTrendingUp, MdCheckCircle, MdTimeline, 
  MdFlag, MdAutoGraph, MdOutlineCalendarMonth,
  MdOutlineEmojiEvents, MdOutlineSpeed
} from "react-icons/md";

function Tracking() {
  const weeklyStats = [
    { day: 'الأحد', date: 24, progress: 80, active: false },
    { day: 'الإثنين', date: 25, progress: 95, active: false },
    { day: 'الثلاثاء', date: 26, progress: 70, active: false },
    { day: 'الأربعاء', date: 27, progress: 90, active: false },
    { day: 'الخميس', date: 28, progress: 100, active: true },
    { day: 'الجمعة', date: 29, progress: 0, disabled: true },
    { day: 'السبت', date: 30, progress: 0, disabled: true },
  ];

  return (
    <main className="flex-1 flex flex-col px-4 md:px-8 py-6 bg-gray-50/50" dir="rtl">
      
      {/* 🟢 Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div className="text-right">
          <h1 className="text-3xl font-black text-gray-900 mb-2">متابعة مسارك التعليمي</h1>
          <p className="text-gray-500 font-medium">أنت تبلي بلاءً حسناً! لقد أنجزت 85% من أهداف هذا الشهر</p>
        </div>
        
        <div className="flex gap-3">
          <div className="bg-white px-4 py-2 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-2">
            <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-xs font-black text-emerald-700">أنت في المسار الصحيح</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* 📊 Left: Main Stats & Progress Map */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Path Map Card */}
          <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 relative overflow-hidden">
            <div className="flex justify-between items-center mb-10">
              <span className="px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-xs font-black">المستوى المتقدم</span>
              <h3 className="text-xl font-black text-gray-800 flex items-center gap-2">
                <MdTimeline className="text-emerald-600" />
                خريطة المسار التعليمي
              </h3>
            </div>

            <div className="relative flex justify-between items-center px-4 md:px-12">
              {/* Connecting Line Background */}
              <div className="absolute top-1/2 left-12 right-12 h-1.5 bg-gray-50 -translate-y-1/2 rounded-full" />
              {/* Progress Line */}
              <div className="absolute top-1/2 left-1/2 right-12 h-1.5 bg-emerald-600 -translate-y-1/2 rounded-full shadow-lg shadow-emerald-200" />

              <StepNode icon={<MdCheckCircle />} label="التأسيس" status="مكتمل" active={false} done={true} />
              <StepNode icon={<MdAutoGraph />} label="المرحلة الحالية" status="قيد الحفظ" active={true} done={false} />
              <StepNode icon={<MdOutlineEmojiEvents />} label="المراجعة النهائية" status="انتظار" active={false} done={false} />
            </div>
            
            <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-50/50 rounded-full -translate-x-16 -translate-y-16 blur-3xl" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Goal Card 1 */}
            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 group hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mb-6 group-hover:bg-amber-500 group-hover:text-white transition-all">
                <MdFlag size={28} />
              </div>
              <h4 className="text-lg font-black text-gray-800 mb-2">اختبار الجزء الثالث</h4>
              <p className="text-sm text-gray-400 font-bold mb-6 leading-relaxed">اختبار في مراجعة حفظ الجزء بالكامل بإتقان مع أحكام التجويد</p>
              <div className="flex items-center justify-between">
                <button className="text-emerald-700 font-black text-sm hover:underline">عرض التفاصيل</button>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-emerald-600" />
                  <div className="w-2 h-2 rounded-full bg-emerald-600" />
                  <div className="w-2 h-2 rounded-full bg-gray-200" />
                </div>
              </div>
            </div>

            {/* Motivation Card */}
            <div className="bg-emerald-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl group">
              <div className="relative z-10">
                <div className="mb-6">
                  <MdOutlineEmojiEvents size={40} className="text-amber-400 mb-4 animate-bounce" />
                  <h4 className="text-xl font-black mb-2">"خيركم من تعلم القرآن وعلمه"</h4>
                  <p className="text-sm text-emerald-200 font-medium leading-relaxed mb-6">لقد أحرزت إنجازًا رائعًا هذا الأسبوع، واصل تقدمك لتصل للختمة المباركة</p>
                </div>
                <button className="w-full py-4 bg-emerald-700 hover:bg-emerald-600 rounded-2xl font-black text-sm transition-all shadow-xl">ابدأ ورد اليوم</button>
              </div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-800 rounded-full blur-3xl opacity-50 group-hover:scale-150 transition-transform duration-1000" />
            </div>
          </div>
        </div>

        {/* 📊 Right: Progress Metrics */}
        <div className="space-y-8">
          {/* Yearly Progress Card */}
          <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 text-center">
            <div className="inline-flex p-4 bg-emerald-50 rounded-3xl text-emerald-700 mb-6">
              <MdTrendingUp size={32} />
            </div>
            <p className="text-gray-400 font-black text-sm mb-2 uppercase tracking-widest">إنجاز العام</p>
            <h2 className="text-5xl font-black text-gray-900 mb-4">68%</h2>
            <p className="text-sm text-gray-500 font-bold mb-8 leading-relaxed">لقد حفظت <span className="text-emerald-700 font-black">18 جزءاً</span> من القرآن الكريم حتي الآن</p>
            
            <div className="relative h-4 bg-gray-50 rounded-full overflow-hidden mb-4">
              <div className="absolute top-0 right-0 bottom-0 bg-emerald-600 rounded-full shadow-lg shadow-emerald-100 transition-all duration-1000" style={{ width: '68%' }} />
            </div>
            <div className="flex justify-between text-[10px] font-black text-gray-400">
              <span>المستوى التالي: 75%</span>
              <span>المستوى الحالي: 60%</span>
            </div>
          </div>

          {/* Speed Metric */}
          <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 flex items-center justify-between">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
              <MdOutlineSpeed size={28} />
            </div>
            <div className="text-right">
              <p className="text-gray-400 font-black text-xs mb-1">متوسط سرعة الحفظ</p>
              <h4 className="text-xl font-black text-gray-900">3 صفحات / يوم</h4>
            </div>
          </div>

          {/* Points/Level */}
          <div className="bg-amber-400 rounded-[2.5rem] p-8 shadow-xl flex items-center justify-between relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-amber-900 font-black text-xs mb-1">نقاط التميز</p>
              <h4 className="text-3xl font-black text-amber-950">2,450</h4>
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md relative z-10">
              <MdOutlineEmojiEvents size={32} className="text-amber-900" />
            </div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-amber-300 rounded-full blur-3xl opacity-50" />
          </div>
        </div>
      </div>

      {/* 📅 Weekly Activity: Advanced Visual Timeline */}
      <div className="w-full mt-10">
        <div className="flex justify-between items-center mb-8 px-2">
          <button className="text-emerald-700 font-black text-sm hover:underline flex items-center gap-1">
            عرض التقارير المفصلة
            <MdChevronLeft size={20} />
          </button>
          <h3 className="text-2xl font-black text-gray-800 flex items-center gap-2">
            <MdOutlineCalendarMonth className="text-emerald-600" />
            النشاط الأسبوعي
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {weeklyStats.map((item, idx) => (
            <div 
              key={idx} 
              className={`group h-48 rounded-[2rem] border-2 transition-all p-6 flex flex-col justify-between items-center cursor-pointer
                ${item.active 
                  ? 'bg-emerald-600 border-emerald-600 text-white shadow-xl shadow-emerald-100 scale-105' 
                  : item.disabled 
                  ? 'bg-gray-50/50 border-transparent opacity-40 cursor-not-allowed'
                  : 'bg-white border-transparent hover:border-emerald-100 shadow-sm'}`}
            >
              <span className={`text-xs font-black uppercase ${item.active ? 'text-emerald-100' : 'text-gray-400 group-hover:text-emerald-600'}`}>{item.day}</span>
              <span className={`text-2xl font-black ${item.active ? 'text-white' : 'text-gray-900'}`}>{item.date}</span>
              
              <div className="w-full space-y-2">
                <div className="flex justify-between text-[10px] font-black">
                  <span>%{item.progress}</span>
                </div>
                <div className={`h-1.5 w-full rounded-full overflow-hidden ${item.active ? 'bg-emerald-700' : 'bg-gray-100'}`}>
                  <div 
                    className={`h-full rounded-full transition-all duration-1000 ${item.active ? 'bg-white' : 'bg-emerald-500'}`} 
                    style={{ width: `${item.progress}%` }} 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

const StepNode = ({ icon, label, status, active, done }) => (
  <div className="relative z-10 flex flex-col items-center group">
    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl transition-all duration-500 shadow-lg
      ${active 
        ? 'bg-emerald-600 text-white scale-125 ring-8 ring-emerald-50' 
        : done 
        ? 'bg-emerald-100 text-emerald-700' 
        : 'bg-white text-gray-300 border-2 border-gray-100'}`}>
      {icon}
    </div>
    <div className="mt-4 text-center">
      <p className={`text-sm font-black mb-1 transition-colors ${active ? 'text-emerald-800' : 'text-gray-900'}`}>{label}</p>
      <p className={`text-[10px] font-bold uppercase tracking-wider ${active ? 'text-emerald-600' : 'text-gray-400'}`}>{status}</p>
    </div>
  </div>
);

const MdChevronLeft = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
);

export default Tracking;