import React, { useState } from "react";
import { 
  MdCalendarMonth, MdVideoCall, MdPlayCircleOutline, 
  MdPerson, MdAccessTime, MdKeyboardArrowLeft,
  MdOutlineInfo
} from "react-icons/md";

function Episods() {
  const [days] = useState([
    { name: "الأحد", date: 12, active: true },
    { name: "الإثنين", date: 13 },
    { name: "الثلاثاء", date: 14 },
    { name: "الأربعاء", date: 15 },
    { name: "الخميس", date: 16 },
    { name: "الجمعة", date: 17 },
    { name: "السبت", date: 18 },
  ]);

  const [episodes] = useState([
    { id: 1, day: "الأحد", type: "live", title: "حلقة الحفظ المكثف", student: "محمد أحمد", time: "04:30 م", teacher: "الشيخ محمود" },
    { id: 2, day: "الأحد", type: "recorded", title: "شرح أحكام التجويد", student: "سارة أحمد", time: "05:00 م", teacher: "المعلمة مريم" },
    { id: 3, day: "الثلاثاء", type: "live", title: "حلقة التثبيت والمراجعة", student: "محمد أحمد", time: "10:00 ص", teacher: "الشيخ محمود" },
    { id: 4, day: "الخميس", type: "recorded", title: "قصص الأنبياء للأطفال", student: "محمد أحمد", time: "05:30 م", teacher: "أ. خالد" },
    { id: 5, day: "الجمعة", type: "live", title: "تلاوة جماعية", student: "محمد أحمد", time: "04:30 م", teacher: "الشيخ محمود" },
  ]);

  const getEpisodesByDay = (dayName) => episodes.filter((ep) => ep.day === dayName);

  return (
    <main className="flex-1 flex flex-col px-4 md:px-8 py-6 bg-gray-50/50" dir="rtl">
      
      {/* 🟢 Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div className="text-right">
          <h1 className="text-3xl font-black text-gray-900 mb-2">جدول حلقات الأبناء</h1>
          <p className="text-gray-500 font-medium">متابعة مواعيد الحلقات المباشرة والمسجلة لجميع أبنائك خلال الأسبوع</p>
        </div>
        
        <div className="flex bg-white p-1 rounded-2xl border border-gray-100 shadow-sm">
          <button className="px-6 py-2 bg-emerald-700 text-white rounded-xl text-xs font-black shadow-lg shadow-emerald-100">الأسبوع الحالي</button>
          <button className="px-6 py-2 text-gray-400 font-black text-xs hover:bg-gray-50 rounded-xl transition-all">الأسبوع القادم</button>
        </div>
      </div>

      {/* 📅 Weekly Horizontal Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-10">
        {days.map((day, idx) => (
          <div key={idx} className={`p-6 rounded-[2rem] border-2 transition-all flex flex-col items-center justify-center gap-2 group cursor-pointer
            ${day.active ? 'bg-emerald-700 border-emerald-700 text-white shadow-xl shadow-emerald-100 scale-105' : 'bg-white border-transparent hover:border-emerald-100 shadow-sm'}`}>
            <span className={`text-[10px] font-black uppercase tracking-widest ${day.active ? 'text-emerald-100' : 'text-gray-400 group-hover:text-emerald-600'}`}>{day.name}</span>
            <span className={`text-2xl font-black ${day.active ? 'text-white' : 'text-gray-900'}`}>{day.date}</span>
            {getEpisodesByDay(day.name).length > 0 && !day.active && (
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1" />
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* 📋 Daily Schedule Grid */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between px-4 mb-2">
            <h3 className="text-xl font-black text-gray-800 flex items-center gap-3">
              <span className="w-2 h-8 bg-emerald-600 rounded-full" />
              تفاصيل الجدول لليوم المختار
            </h3>
            <span className="text-xs font-black text-gray-400 uppercase tracking-widest">عرض الكل</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {days.filter(d => d.active).map(activeDay => {
              const dayEpisodes = getEpisodesByDay(activeDay.name);
              return dayEpisodes.length > 0 ? (
                dayEpisodes.map(ep => (
                  <div key={ep.id} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 group hover:shadow-xl transition-all relative overflow-hidden">
                    <div className="flex justify-between items-start mb-6">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-transform group-hover:scale-110 shadow-sm
                        ${ep.type === 'live' ? 'bg-emerald-50 text-emerald-700' : 'bg-blue-50 text-blue-700'}`}>
                        {ep.type === 'live' ? <MdVideoCall /> : <MdPlayCircleOutline />}
                      </div>
                      <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest
                        ${ep.type === 'live' ? 'bg-red-50 text-red-600 animate-pulse' : 'bg-gray-100 text-gray-500'}`}>
                        {ep.type === 'live' ? 'بث مباشر' : 'محاضرة مسجلة'}
                      </span>
                    </div>

                    <h4 className="text-xl font-black text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">{ep.title}</h4>
                    
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-2 text-gray-500 font-bold text-sm">
                        <MdPerson className="text-emerald-600" size={18} />
                        <span>الطالب: {ep.student}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 font-bold text-sm">
                        <MdAccessTime className="text-emerald-600" size={18} />
                        <span>الوقت: {ep.time}</span>
                      </div>
                      <p className="text-[10px] text-gray-400 font-bold pr-7">المعلم: {ep.teacher}</p>
                    </div>

                    <button className="w-full py-4 bg-gray-50 text-emerald-700 rounded-2xl font-black text-sm flex items-center justify-center gap-2 hover:bg-emerald-700 hover:text-white transition-all shadow-sm">
                      {ep.type === 'live' ? 'دخول الحلقة الآن' : 'مشاهدة التسجيل'}
                      <MdKeyboardArrowLeft size={20} />
                    </button>
                    
                    <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50/50 rounded-full -translate-x-12 -translate-y-12 blur-2xl opacity-50" />
                  </div>
                ))
              ) : (
                <div key="no-ep" className="col-span-full py-20 bg-white rounded-[3rem] border-2 border-dashed border-gray-100 flex flex-col items-center justify-center text-gray-300">
                  <MdCalendarMonth size={60} className="mb-4" />
                  <p className="font-black">لا توجد حلقات مجدولة لهذا اليوم</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ℹ️ Info Sidebar */}
        <div className="space-y-6">
          <div className="bg-emerald-900 p-8 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
            <div className="relative z-10">
              <MdVideoCall size={40} className="text-emerald-400 mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-black mb-2">تعليمات البث المباشر</h4>
              <ul className="text-xs font-medium text-emerald-200 space-y-4 mb-8">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 shrink-0" />
                  يرجى التأكد من استقرار الإنترنت قبل بدء الحلقة بـ 5 دقائق.
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 shrink-0" />
                  توفير مكان هادئ للابن لضمان أعلى مستويات التركيز.
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 shrink-0" />
                  تأكد من عمل الكاميرا والمايكروفون بشكل صحيح.
                </li>
              </ul>
              <button className="w-full py-4 bg-emerald-700 hover:bg-emerald-600 rounded-2xl font-black text-sm transition-all shadow-xl">اختبار سرعة الإنترنت</button>
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-800 rounded-full blur-3xl opacity-50" />
          </div>

          <div className="bg-amber-400 p-8 rounded-[3rem] shadow-xl relative overflow-hidden group flex items-center gap-6">
            <div className="w-16 h-16 bg-white/20 rounded-[1.5rem] flex items-center justify-center backdrop-blur-md relative z-10">
              <MdOutlineInfo size={32} className="text-amber-900" />
            </div>
            <div className="relative z-10">
              <h4 className="text-lg font-black text-amber-950 mb-1">تعديل المواعيد</h4>
              <p className="text-xs font-bold text-amber-900/60 leading-relaxed">لتعديل موعد حلقة أو الاعتذار، يرجى التواصل مع إدارة المنصة.</p>
            </div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-300 rounded-full blur-3xl opacity-50" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Episods;