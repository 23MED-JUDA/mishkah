import React, { useState } from 'react';
import { 
  MdAdd, MdSearch, MdPersonAdd, MdCalendarToday, 
  MdEdit, MdLink, MdVideoCall, MdPeople, 
  MdCheckCircle, MdTimeline, MdMoreVert, MdKeyboardArrowLeft
} from 'react-icons/md';

function CirclesManagement() {
  const [search, setSearch] = useState("");

  const circles = [
    { id: 1, title: 'حلقة الإمام الشافعي (تجويد)', teacher: 'د. أحمد العتيبي', studentsCount: 12, status: 'مباشر الآن', nextTime: 'اليوم - 8:30 م', progress: 85, color: 'emerald' },
    { id: 2, title: 'أساسيات التفسير - المستوى الأول', teacher: 'أ. سارة خالد', studentsCount: 20, status: 'تبدأ قريباً', nextTime: 'الاثنين - 4:00 م', progress: 20, color: 'blue' },
    { id: 3, title: 'حفظ جزء تبارك - المجموعة ب', teacher: 'الشيخ محمد محمود', studentsCount: 8, status: 'مباشر الآن', nextTime: 'غداً - 9:00 ص', progress: 50, color: 'emerald' }
  ];

  return (
    <main className="flex-1 flex flex-col px-4 md:px-8 py-6 bg-gray-50/50" dir="rtl">
      
      {/* 🟢 Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div className="text-right">
          <h1 className="text-3xl font-black text-gray-900 mb-2">إدارة الحلقات التعليمية</h1>
          <p className="text-gray-500 font-medium">الفصل الدراسي الثاني - متابعة وتنظيم الحلقات المباشرة</p>
        </div>
        
        <div className="flex gap-4">
          <div className="relative w-64 md:w-80">
            <MdSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <input 
              type="text" 
              placeholder="بحث عن حلقة، معلم..." 
              className="w-full pr-12 pl-4 py-3.5 bg-white border border-gray-100 rounded-2xl shadow-sm outline-none focus:ring-4 focus:ring-emerald-50 transition-all text-sm font-medium"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-emerald-700 text-white rounded-2xl font-black hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-100">
            <MdAdd size={20} />
            إنشاء حلقة
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* 📋 Sidebar: Quick Actions & Stats */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-emerald-900 p-8 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-xl font-black mb-2">تنظيم سريع</h3>
              <p className="text-xs font-medium text-emerald-200 leading-relaxed mb-8">قم بربط الطلاب والمعلمين بالحلقات المتاحة بضغطة واحدة.</p>
              <div className="space-y-3">
                <QuickActionBtn icon={<MdPersonAdd />} label="ربط معلم" />
                <QuickActionBtn icon={<MdPeople />} label="ربط طلاب" />
                <QuickActionBtn icon={<MdCalendarToday />} label="تعديل المواعيد" />
              </div>
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-800 rounded-full blur-3xl opacity-30 group-hover:scale-125 transition-transform duration-700" />
          </div>

          <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-gray-100">
            <h4 className="text-sm font-black text-gray-800 mb-6 flex items-center gap-2">
              <MdCheckCircle className="text-emerald-600" />
              معلمون متاحون الآن
            </h4>
            <div className="space-y-4">
              <TeacherStatus avatar="ي" name="يوسف محمد" status="متاح حالياً" online />
              <TeacherStatus avatar="ع" name="علي الشريف" status="في حلقة الآن" />
              <TeacherStatus avatar="م" name="محمد أحمد" status="متاح بعد ساعة" />
            </div>
          </div>
        </div>

        {/* 🏛️ Main Content: Active Circles */}
        <div className="lg:col-span-3 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SummaryStat label="إجمالي الحلقات" val="42" color="emerald" />
            <SummaryStat label="طلاب نشطون" val="850" color="blue" />
            <SummaryStat label="معلمون متاحون" val="10" color="amber" />
          </div>

          <div className="flex items-center justify-between px-4">
            <h2 className="text-2xl font-black text-gray-800 flex items-center gap-3">
              <span className="w-2 h-8 bg-emerald-600 rounded-full" />
              الحلقات النشطة
            </h2>
            <div className="flex bg-gray-50 p-1 rounded-2xl border border-gray-100 shadow-sm">
              <button className="px-8 py-2 text-xs font-black bg-emerald-700 text-white rounded-xl shadow-lg shadow-emerald-100">الكل</button>
              <button className="px-8 py-2 text-xs font-black text-gray-400 hover:bg-gray-50 rounded-xl transition-all">قيد الانتظار</button>
            </div>
          </div>

          <div className="space-y-6">
            {circles.map(circle => (
              <div key={circle.id} className="bg-white p-8 rounded-[3rem] shadow-sm border border-gray-100 group hover:shadow-xl transition-all relative overflow-hidden">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                  <div className="flex items-center gap-6">
                    <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center text-3xl transition-transform group-hover:scale-110 shadow-sm
                      ${circle.color === 'emerald' ? 'bg-emerald-50 text-emerald-700' : 'bg-blue-50 text-blue-700'}`}>
                      <MdVideoCall />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-gray-900 mb-1 group-hover:text-emerald-700 transition-colors">{circle.title}</h3>
                      <p className="text-sm font-bold text-gray-400">{circle.teacher} • <span className="text-emerald-600">{circle.studentsCount} طالباً</span></p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest
                      ${circle.status === 'مباشر الآن' ? 'bg-red-50 text-red-600 animate-pulse' : 'bg-gray-100 text-gray-500'}`}>
                      {circle.status}
                    </span>
                    <button className="p-2.5 bg-gray-50 rounded-xl text-gray-400 hover:text-emerald-700 transition-all shadow-sm"><MdMoreVert size={20} /></button>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-t border-gray-50 pt-8">
                  <button className="text-emerald-700 font-black text-sm flex items-center gap-2 hover:underline">
                    عرض تفاصيل الحلقة والطلاب
                    <MdKeyboardArrowLeft size={20} />
                  </button>
                  <div className="w-full md:w-80 space-y-3">
                    <div className="flex justify-between items-end mb-1">
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">اكتمال المنهج</span>
                      <span className="text-xs font-black text-gray-900">{circle.progress}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-600 rounded-full transition-all duration-1000" style={{ width: `${circle.progress}%` }} />
                    </div>
                    <p className="text-[10px] text-gray-400 font-bold text-left">الموعد القادم: <span className="text-gray-900">{circle.nextTime}</span></p>
                  </div>
                </div>
                
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50/50 rounded-full -translate-x-16 -translate-y-16 blur-3xl opacity-50" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

const QuickActionBtn = ({ icon, label }) => (
  <button className="w-full flex justify-between items-center bg-emerald-800 hover:bg-emerald-700 px-6 py-4 rounded-2xl text-sm font-black transition-all group">
    <div className="flex items-center gap-3">
      <span className="text-emerald-400 group-hover:scale-110 transition-transform">{icon}</span>
      <span>{label}</span>
    </div>
    <MdKeyboardArrowLeft size={20} className="text-emerald-600" />
  </button>
);

const TeacherStatus = ({ avatar, name, status, online }) => (
  <div className="flex items-center gap-4 group">
    <div className="relative">
      <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center font-black text-gray-400 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-all">{avatar}</div>
      {online && <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white" />}
    </div>
    <div>
      <p className="text-sm font-black text-gray-800">{name}</p>
      <p className={`text-[10px] font-bold ${online ? 'text-emerald-600' : 'text-gray-400'}`}>{status}</p>
    </div>
  </div>
);

const SummaryStat = ({ label, val, color }) => {
  const colors = {
    emerald: "text-emerald-700",
    blue: "text-blue-700",
    amber: "text-amber-700"
  };
  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 text-center group hover:shadow-xl transition-all">
      <h2 className={`text-4xl font-black mb-2 transition-transform group-hover:scale-110 ${colors[color]}`}>{val}</h2>
      <p className="text-xs font-black text-gray-400 uppercase tracking-widest">{label}</p>
    </div>
  );
};

export default CirclesManagement;
