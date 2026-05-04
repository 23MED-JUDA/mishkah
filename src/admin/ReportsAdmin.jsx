import React, { useState } from 'react';
import { 
  MdAnalytics, MdDownload, MdCalendarMonth, MdTrendingUp, 
  MdCheckCircle, MdError, MdSchool, MdGroups,
  MdTimeline, MdPerson, MdKeyboardArrowLeft, MdArrowBack, MdArrowForward
} from 'react-icons/md';

function ReportsAdmin() {
  const [activeTab, setActiveTab] = useState('quran');

  const studentsProgress = [
    { id: 1, name: 'أحمد سامي القحطاني', level: 'المستوى الثالث - حلقة الفاروق', progress: 78, status: 'ملتزم', avatar: 'أ' },
    { id: 2, name: 'محمد عبد الرحمن', level: 'المستوى الأول - حلقة النور', progress: 42, status: 'يحتاج متابعة', avatar: 'م' },
    { id: 3, name: 'سارة خالد التميمي', level: 'المستوى الرابع - حلقة خديجة', progress: 92, status: 'ملتزم', avatar: 'س' }
  ];

  return (
    <main className="flex-1 flex flex-col px-4 md:px-8 py-6 bg-gray-50/50" dir="rtl">
      
      {/* 🟢 Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div className="text-right">
          <h1 className="text-3xl font-black text-gray-900 mb-2">التقارير التحليلية</h1>
          <p className="text-gray-500 font-medium">متابعة شاملة لمؤشرات الأداء الأكاديمي والالتزام الإداري</p>
        </div>
        
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-6 py-2.5 bg-white border border-gray-100 rounded-2xl text-gray-600 font-black hover:bg-gray-50 transition-all shadow-sm">
            <MdCalendarMonth size={20} />
            آخر 30 يوم
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-emerald-700 text-white rounded-2xl font-black hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-100">
            <MdDownload size={20} />
            تصدير البيانات
          </button>
        </div>
      </div>

      {/* 📊 High-Level Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <ReportMetricCard label="معدل الإنجاز العام" val="84.2%" trend="+12.5%" icon={<MdTrendingUp />} color="emerald" primary />
        <ReportMetricCard label="التزام المعلمين" val="96.8%" trend="+3.2%" icon={<MdCheckCircle />} color="blue" />
        <ReportMetricCard label="جلسات غير موثقة" val="14" trend="-2.1%" icon={<MdError />} color="red" />
        <ReportMetricCard label="إجمالي الطلاب" val="1,248" trend="+85" icon={<MdSchool />} color="amber" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* 📋 Student Performance Table */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between px-4 mb-2">
            <h3 className="text-xl font-black text-gray-800 flex items-center gap-3">
              <span className="w-2 h-8 bg-emerald-600 rounded-full" />
              تقارير تقدم الطلاب
            </h3>
            <div className="flex bg-gray-100 p-1 rounded-2xl border border-gray-100 shadow-sm">
              {['حفظ القرآن', 'السنة النبوية', 'العربية'].map((tab, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveTab(['quran', 'sunnah', 'arabic'][i])}
                  className={`px-6 py-2 text-[10px] font-black rounded-xl transition-all
                    ${(activeTab === 'quran' && i === 0) || (activeTab === 'sunnah' && i === 1) || (activeTab === 'arabic' && i === 2)
                      ? 'bg-white text-emerald-700 shadow-sm' : 'text-gray-400 hover:bg-gray-50'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[3rem] shadow-sm border border-gray-100 overflow-hidden">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="bg-gray-50/50">
                  <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">الطالب والمستوى</th>
                  <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">نسبة الإنجاز</th>
                  <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">الحالة الإدارية</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {studentsProgress.map((student, i) => (
                  <tr key={i} className="group hover:bg-gray-50/50 transition-all">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-2xl flex items-center justify-center font-black text-xl group-hover:scale-110 transition-transform">{student.avatar}</div>
                        <div>
                          <p className="font-black text-gray-900 mb-0.5">{student.name}</p>
                          <p className="text-[10px] text-gray-400 font-bold">{student.level}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex flex-col gap-2 min-w-[120px]">
                        <div className="flex justify-between items-end">
                          <span className="text-[10px] font-black text-emerald-600">{student.progress}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                          <div className={`h-full rounded-full transition-all duration-1000 ${student.progress > 50 ? 'bg-emerald-600' : 'bg-red-500'}`} style={{ width: `${student.progress}%` }} />
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-center">
                      <span className={`px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase
                        ${student.status === 'ملتزم' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                        • {student.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            <div className="p-8 bg-gray-50/30 border-t border-gray-50 flex justify-center">
              <div className="flex items-center gap-2">
                <button className="p-2.5 bg-white rounded-xl shadow-sm text-gray-400 hover:text-emerald-700 transition-all border border-gray-100"><MdArrowBack size={20} className="rotate-180" /></button>
                <button className="w-10 h-10 rounded-xl text-xs font-black bg-emerald-700 text-white shadow-lg shadow-emerald-100">1</button>
                <button className="w-10 h-10 rounded-xl text-xs font-black text-gray-400 bg-white border border-gray-100 hover:bg-gray-50">2</button>
                <button className="p-2.5 bg-white rounded-xl shadow-sm text-gray-400 hover:text-emerald-700 transition-all border border-gray-100"><MdArrowForward size={20} className="rotate-180" /></button>
              </div>
            </div>
          </div>
        </div>

        {/* 📉 Sidebar: Teacher Engagement & Alerts */}
        <div className="space-y-8">
          <div className="bg-emerald-900 p-8 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-xl font-black mb-1">التزام المعلمين</h3>
              <p className="text-[10px] text-emerald-300 font-bold mb-8 uppercase tracking-widest">تحليل الحضور الأسبوعي</p>
              
              <div className="flex items-center gap-8 mb-8">
                <div className="w-24 h-24 rounded-full border-8 border-emerald-400 flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-black">96%</span>
                </div>
                <div className="space-y-3">
                  <EngagementItem dotColor="bg-emerald-400" label="حضور كامل" count="42" />
                  <EngagementItem dotColor="bg-emerald-700" label="غياب بعذر" count="3" />
                </div>
              </div>

              <button className="w-full py-4 bg-emerald-800 hover:bg-emerald-700 rounded-2xl font-black text-sm transition-all border border-emerald-700">تصدير سجل المعلمين</button>
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-800 rounded-full blur-3xl opacity-30 group-hover:scale-125 transition-transform duration-700" />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-black text-gray-900 flex items-center gap-2 px-2">
              <MdAnalytics className="text-emerald-600" />
              تنبيهات المتابعة
            </h3>
            <AdminAlertCard icon={<MdError />} title="توقف تقدم حلقة 'الكوثر'" desc="لم يتم رصد نتائج 8 طلاب لمدة أسبوعين متتاليين." color="red" />
            <AdminAlertCard icon={<MdCheckCircle />} title="إنجاز استثنائي: م. يوسف" desc="أتم التسميع لـ 25 طالب بمعدل امتياز هذا الأسبوع." color="emerald" />
          </div>
        </div>
      </div>
    </main>
  );
}

const ReportMetricCard = ({ label, val, trend, icon, color, primary }) => {
  const colors = {
    emerald: "bg-emerald-50 text-emerald-700 shadow-emerald-100",
    blue: "bg-blue-50 text-blue-700 shadow-blue-100",
    red: "bg-red-50 text-red-700 shadow-red-100",
    amber: "bg-amber-50 text-amber-700 shadow-amber-100"
  };

  return (
    <div className={`p-8 rounded-[3rem] shadow-sm border transition-all group hover:shadow-xl relative overflow-hidden
      ${primary ? 'bg-white border-emerald-100' : 'bg-white border-gray-100'}`}>
      <div className="flex justify-between items-start mb-6">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl transition-transform group-hover:scale-110 shadow-sm ${colors[color]}`}>
          {icon}
        </div>
        <span className={`px-2 py-0.5 rounded-lg text-[10px] font-black ${trend.startsWith('+') ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
          {trend}
        </span>
      </div>
      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{label}</p>
      <h2 className="text-3xl font-black text-gray-900">{val}</h2>
    </div>
  );
};

const EngagementItem = ({ dotColor, label, count }) => (
  <div className="flex items-center gap-3">
    <div className={`w-2.5 h-2.5 rounded-full ${dotColor}`} />
    <span className="text-xs font-bold text-emerald-100">{label}: {count}</span>
  </div>
);

const AdminAlertCard = ({ icon, title, desc, color }) => (
  <div className={`p-6 rounded-[2rem] border transition-all flex gap-4
    ${color === 'red' ? 'bg-red-50/50 border-red-100' : 'bg-emerald-50/50 border-emerald-100'}`}>
    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-2xl shrink-0
      ${color === 'red' ? 'bg-red-100 text-red-600' : 'bg-emerald-100 text-emerald-600'}`}>
      {icon}
    </div>
    <div>
      <h4 className={`text-sm font-black mb-1 ${color === 'red' ? 'text-red-900' : 'text-emerald-900'}`}>{title}</h4>
      <p className="text-[10px] font-bold text-gray-400 leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default ReportsAdmin;
