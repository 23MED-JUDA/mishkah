import React, { useEffect, useState } from "react";
import axios from "axios";
import { 
  MdChevronLeft, MdChevronRight, MdToday, 
  MdAccessTime, MdPerson, MdQuiz, MdCheckCircle,
  MdHeadsetMic
} from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Calendar() {
  const [events, setEvents] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const navigate = useNavigate();

  useEffect(() => {
    // 🧪 Mock Data for Demonstration
    setEvents([
      {
        id: 1,
        day: 5,
        title: "حلقة الحفظ المكثف",
        time: "04:00",
        teacher: "الشيخ عبدالله الجهني",
        type: "class"
      },
      {
        id: 2,
        idExam: 22,
        day: 5,
        title: "اختبار تجويد (المستوى 1)",
        time: "18:30",
        teacher: "منصة الاختبارات",
        type: "exam"
      },
      {
        id: 3,
        day: 12,
        title: "تفسير سورة الفاتحة",
        time: "10:00",
        teacher: "الشيخ محمد راتب",
        type: "class"
      },
      {
        id: 4,
        day: 20,
        title: "مراجعة المتون",
        time: "15:00",
        teacher: "ذاتي",
        type: "class"
      }
    ]);

    setStats({
      completed: 18,
      total: 24,
      examsLeft: 4,
      hours: 12,
    });
  }, []);

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const monthNames = [
    "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
    "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
  ];

  const handleEventClick = (event) => {
    if (event.type === "exam") {
      navigate(`/exam/${event.idExam || event.id}`);
    }
  };

  const isToday = (day) => {
    const today = new Date();
    return day === today.getDate() && 
           currentDate.getMonth() === today.getMonth() && 
           currentDate.getFullYear() === today.getFullYear();
  };

  return (
    <main className="flex-1 flex flex-col px-4 md:px-8 py-6 bg-gray-50/50" dir="rtl">
      
      {/* 🟢 Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="text-right">
          <h1 className="text-3xl font-black text-gray-900 mb-2">جدولك الزمني</h1>
          <p className="text-gray-500 font-medium">نظم وقتك مع حلقات تحفيظ مشكاة والدروس المباشرة</p>
        </div>
        
        <div className="flex bg-white p-1 rounded-2xl shadow-sm border border-gray-100">
          <button className="px-6 py-2 bg-emerald-700 text-white rounded-xl font-bold shadow-lg shadow-emerald-200">التقويم</button>
          <button className="px-6 py-2 text-gray-500 font-bold hover:bg-gray-50 rounded-xl transition">قائمة الحلقات</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* 🗓️ Left Sidebar: Today's Events & Support */}
        <div className="lg:col-span-1 space-y-6">
          
          {/* Today's Timeline Card */}
          <div className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-gray-100 overflow-hidden relative">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-2 text-emerald-700">
                <MdToday size={20} />
                <span className="font-black text-sm">اليوم</span>
              </div>
              <h3 className="font-black text-gray-800 text-lg">جدول اليوم</h3>
            </div>

            <div className="space-y-8 relative">
              {/* Vertical Line */}
              <div className="absolute top-2 right-3 bottom-0 w-0.5 bg-gray-100" />
              
              {events.filter(e => e.day === 5).map((event) => (
                <div key={event.id} className="relative flex items-start gap-4 pr-10 group">
                  {/* Dot */}
                  <div className="absolute right-1.5 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white bg-emerald-600 shadow-md group-hover:scale-125 transition-transform z-10" />
                  
                  <div className="flex-1 text-right">
                    <div className="flex items-center gap-2 justify-end mb-1">
                      <span className="text-[10px] font-bold text-gray-400 bg-gray-50 px-2 py-0.5 rounded-md flex items-center gap-1">
                        <MdAccessTime size={12} />
                        {event.time}
                      </span>
                    </div>
                    <div 
                      onClick={() => handleEventClick(event)}
                      className={`p-4 rounded-2xl border-2 transition-all cursor-pointer shadow-sm
                        ${event.type === 'exam' 
                          ? 'bg-amber-50 border-amber-100 hover:border-amber-300' 
                          : 'bg-emerald-50 border-emerald-100 hover:border-emerald-300'}`}
                    >
                      <h4 className="font-bold text-gray-800 text-sm mb-2">{event.title}</h4>
                      <div className="flex items-center gap-1 justify-end text-[10px] text-gray-500 font-bold">
                        <span>{event.teacher}</span>
                        <MdPerson size={14} className="text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-8 py-3 text-emerald-700 font-bold text-sm bg-emerald-50 rounded-xl hover:bg-emerald-100 transition">
              عرض كل الأحداث
            </button>
          </div>

          {/* Monthly Stats Card */}
          <div className="bg-emerald-900 text-white rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden">
            <h3 className="text-xl font-bold mb-6 relative z-10">إحصائياتك</h3>
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <div className="bg-emerald-800/50 p-4 rounded-2xl">
                <p className="text-[10px] text-emerald-300 font-bold mb-1">حلقات مكتملة</p>
                <h4 className="text-2xl font-black">{stats?.completed}</h4>
              </div>
              <div className="bg-emerald-800/50 p-4 rounded-2xl">
                <p className="text-[10px] text-emerald-300 font-bold mb-1">اختبارات متبقية</p>
                <h4 className="text-2xl font-black text-amber-400">{stats?.examsLeft}</h4>
              </div>
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-800 rounded-full blur-3xl opacity-50" />
          </div>

          {/* Support Widget */}
          <div className="bg-white rounded-[2.5rem] p-6 border border-gray-100 shadow-sm flex items-center justify-between group cursor-pointer hover:bg-emerald-600 transition-all">
            <div className="w-12 h-12 bg-emerald-50 group-hover:bg-white/20 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:text-white transition-all">
              <MdHeadsetMic size={24} />
            </div>
            <div className="text-right">
              <h4 className="font-black text-gray-800 group-hover:text-white transition-all text-sm">هل تحتاج لمساعدة؟</h4>
              <p className="text-[10px] text-gray-400 group-hover:text-emerald-100 transition-all font-bold">تواصل مع الدعم الفني</p>
            </div>
          </div>
        </div>

        {/* 📅 Right: Interactive Calendar Grid */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-[3rem] shadow-sm border border-gray-100 overflow-hidden p-8">
            
            {/* Calendar Controls */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
              <div className="flex items-center gap-4">
                <button 
                  onClick={handlePrevMonth}
                  className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-2xl text-gray-400 hover:bg-emerald-50 hover:text-emerald-600 transition-all"
                >
                  <MdChevronRight size={28} />
                </button>
                <div className="text-center px-4">
                  <h2 className="text-2xl font-black text-gray-900 leading-tight">
                    {monthNames[currentDate.getMonth()]}
                  </h2>
                  <p className="text-sm text-gray-400 font-black tracking-widest">{currentDate.getFullYear()}</p>
                </div>
                <button 
                  onClick={handleNextMonth}
                  className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-2xl text-gray-400 hover:bg-emerald-50 hover:text-emerald-600 transition-all"
                >
                  <MdChevronLeft size={28} />
                </button>
              </div>

              <div className="flex gap-2">
                <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-xl text-emerald-700 text-xs font-bold">
                  <span className="w-3 h-3 bg-emerald-600 rounded-full" />
                  حلقات دراسية
                </div>
                <div className="flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-xl text-amber-700 text-xs font-bold">
                  <span className="w-3 h-3 bg-amber-500 rounded-full" />
                  اختبارات وتقييم
                </div>
              </div>
            </div>

            {/* Weekdays Header */}
            <div className="grid grid-cols-7 mb-4">
              {['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة'].map((day) => (
                <div key={day} className="text-center py-4">
                  <span className="text-xs font-black text-gray-400 uppercase">{day}</span>
                </div>
              ))}
            </div>

            {/* Calendar Days Grid */}
            <div className="grid grid-cols-7 gap-4">
              {/* Padding for first day of month */}
              {Array.from({ length: (firstDayOfMonth(currentDate.getFullYear(), currentDate.getMonth()) + 1) % 7 }).map((_, i) => (
                <div key={`pad-${i}`} className="h-32 rounded-[1.5rem] bg-gray-50/30 border border-transparent" />
              ))}

              {Array.from({ length: daysInMonth(currentDate.getFullYear(), currentDate.getMonth()) }).map((_, i) => {
                const day = i + 1;
                const dayEvents = events.filter(e => e.day === day);
                const hasExam = dayEvents.some(e => e.type === 'exam');
                const hasClass = dayEvents.some(e => e.type === 'class');

                return (
                  <div
                    key={day}
                    className={`h-32 md:h-40 rounded-[2rem] p-4 text-right transition-all group relative border-2
                      ${isToday(day) 
                        ? "border-emerald-500 bg-emerald-50/30 ring-4 ring-emerald-50" 
                        : "border-transparent bg-gray-50 hover:bg-white hover:border-gray-200 hover:shadow-xl"
                      }`}
                  >
                    <span className={`text-lg font-black block mb-2 transition-colors ${isToday(day) ? 'text-emerald-700' : 'text-gray-400 group-hover:text-gray-900'}`}>
                      {day}
                    </span>
                    
                    <div className="space-y-1.5 overflow-hidden">
                      {dayEvents.map(event => (
                        <div 
                          key={event.id}
                          className={`text-[8px] md:text-[10px] font-bold px-2 py-1.5 rounded-lg truncate shadow-sm transition-transform hover:scale-105 cursor-pointer
                            ${event.type === 'exam' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-600 text-white'}`}
                        >
                          {event.title}
                        </div>
                      ))}
                    </div>

                    {isToday(day) && (
                      <div className="absolute top-2 left-2">
                        <MdCheckCircle size={16} className="text-emerald-500" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Calendar;