import React, { useEffect, useState } from "react";
import { 
  MdRefresh, MdCalendarToday, MdVideoCall, 
  MdPeople, MdTrendingUp, MdPlayArrow, MdSettings,
  MdAccessTime, MdCheckCircle
} from "react-icons/md";

function PackagesPage() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ active: 4, students: 48, growth: 12 });
  const [sessions, setSessions] = useState([]);
  const [mainCircle, setMainCircle] = useState(null);

  useEffect(() => {
    // 🧪 Mock Data for Demonstration
    setTimeout(() => {
      setMainCircle({
        title: "حلقة الصديق - حفظ القرآن المكثف",
        desc: "الحلقة الحالية تبدأ بعد 10 دقائق. يرجى التواجد لبدء البث المباشر مع الطلاب.",
        status: "جارية الآن"
      });
      
      setSessions([
        { id: 1, title: "حلقة الفجر - سورة البقرة", students: 12, time: "05:00 ص", status: "completed" },
        { id: 2, title: "حلقة الصديق - الجزء 26", students: 15, time: "04:30 م", status: "active" },
        { id: 3, title: "حلقة الفاروق - التجويد", students: 10, time: "07:00 م", status: "pending" },
        { id: 4, title: "حلقة الزهراء - القراءات", students: 11, time: "09:00 م", status: "pending" },
      ]);
      
      setLoading(false);
    }, 500);
  }, []);

  const startSession = (id) => {
    setSessions(sessions.map(s => s.id === id ? { ...s, status: 'active' } : s));
  };

  if (loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gray-50/50" dir="rtl">
        <div className="w-16 h-16 border-4 border-emerald-100 border-t-emerald-700 rounded-full animate-spin mb-4" />
        <p className="text-emerald-700 font-black animate-pulse">جاري تحميل الحلقات...</p>
      </div>
    );
  }

  return (
    <main className="flex-1 flex flex-col px-4 md:px-8 py-6 bg-gray-50/50" dir="rtl">
      
      {/* 🟢 Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div className="text-right">
          <h1 className="text-3xl font-black text-gray-900 mb-2">إدارة الحلقات القرآنية</h1>
          <p className="text-gray-500 font-medium">لوحة التحكم المركزية لإدارة حلقاتك ومواعيد البث المباشر</p>
        </div>
        
        <div className="flex gap-3">
          <button 
            onClick={() => window.location.reload()}
            className="p-3 bg-white border border-gray-100 rounded-2xl text-emerald-700 hover:bg-emerald-50 transition-all shadow-sm"
          >
            <MdRefresh size={24} />
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-emerald-700 text-white rounded-2xl font-black hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-100">
            <MdCalendarToday size={20} />
            جدول المواعيد
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* 🎥 Featured Circle Card */}
        <div className="lg:col-span-2 bg-emerald-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-right relative z-10">
            <span className="px-4 py-1.5 bg-emerald-700/50 rounded-full text-[10px] font-black mb-6 inline-block uppercase tracking-widest">{mainCircle?.status}</span>
            <h2 className="text-3xl font-black mb-4 leading-tight">{mainCircle?.title}</h2>
            <p className="text-emerald-200 font-medium mb-8 leading-relaxed">{mainCircle?.desc}</p>
            <button className="flex items-center gap-3 px-8 py-4 bg-white text-emerald-900 rounded-2xl font-black shadow-xl hover:scale-105 transition-all mx-auto md:mx-0">
              <MdVideoCall size={24} />
              دخول غرفة البث الآن
            </button>
          </div>
          <div className="w-48 h-48 bg-emerald-800/50 rounded-[2.5rem] flex items-center justify-center relative z-10 backdrop-blur-md border border-emerald-700/50">
            <MdPlayArrow size={120} className="text-emerald-400 opacity-20" />
            <MdVideoCall size={60} className="absolute text-emerald-400" />
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full -translate-x-20 -translate-y-20 blur-[100px] opacity-50" />
        </div>

        {/* 📊 Summary Stats */}
        <div className="bg-white rounded-[3rem] p-8 shadow-sm border border-gray-100 relative overflow-hidden flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-black text-gray-800 mb-8">نظرة عامة</h3>
            <div className="space-y-6">
              <StatRow icon={<MdPeople />} label="إجمالي الطلاب" value={stats.students} color="emerald" />
              <StatRow icon={<MdPlayArrow />} label="الحلقات النشطة" value={stats.active} color="blue" />
              <StatRow icon={<MdTrendingUp />} label="نسبة النمو" value={`+${stats.growth}%`} color="amber" />
            </div>
          </div>
          <button className="w-full mt-8 py-4 bg-gray-50 text-gray-500 rounded-2xl font-black text-sm hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
            <MdSettings size={18} />
            إعدادات الحلقات
          </button>
        </div>
      </div>

      {/* 🗓️ Daily Sessions List */}
      <div className="mt-10 bg-white rounded-[3rem] shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-8 border-b border-gray-50">
          <h3 className="text-xl font-black text-gray-800">قائمة الحلقات اليومية</h3>
        </div>
        
        <div className="divide-y divide-gray-50">
          {sessions.map((s) => (
            <div key={s.id} className="p-6 md:p-8 hover:bg-gray-50/50 transition-all flex flex-col md:flex-row items-center gap-8 group">
              
              {/* Status Indicator */}
              <div className="w-full md:w-32 flex items-center justify-center">
                <span className={`px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase
                  ${s.status === 'active' ? 'bg-emerald-100 text-emerald-700 ring-4 ring-emerald-50' : 
                    s.status === 'completed' ? 'bg-gray-100 text-gray-400' : 'bg-amber-100 text-amber-700'}`}>
                  {s.status === 'active' ? 'جارية الآن' : s.status === 'completed' ? 'انتهت' : 'بانتظار البدء'}
                </span>
              </div>

              {/* Session Info */}
              <div className="flex-1 text-center md:text-right">
                <h4 className="text-lg font-black text-gray-800 group-hover:text-emerald-700 transition-colors mb-1">{s.title}</h4>
                <div className="flex items-center gap-4 justify-center md:justify-start text-gray-400 font-bold text-xs">
                  <span className="flex items-center gap-1"><MdPeople size={16} /> {s.students} طالباً</span>
                  <span className="flex items-center gap-1"><MdAccessTime size={16} /> {s.time}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                {s.status === 'completed' ? (
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
                    <MdCheckCircle size={24} />
                  </div>
                ) : (
                  <>
                    <button className="p-3 bg-gray-50 rounded-2xl text-gray-400 hover:text-emerald-700 transition-all">
                      <MdSettings size={20} />
                    </button>
                    <button 
                      onClick={() => startSession(s.id)}
                      className={`px-8 py-3 rounded-2xl font-black text-xs transition-all shadow-lg
                        ${s.status === 'active' ? 'bg-blue-600 text-white shadow-blue-100' : 'bg-emerald-700 text-white shadow-emerald-100 hover:bg-emerald-800'}`}
                    >
                      {s.status === 'active' ? 'دخول الغرفة' : 'بدء الحلقة'}
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 📊 Weekly Activity Viz */}
      <div className="mt-10 grid grid-cols-7 gap-4 px-4">
        {[0.4, 0.8, 0.6, 0.9, 0.5, 0.3, 0.7].map((val, i) => (
          <div key={i} className="flex flex-col items-center gap-3 group">
            <div className="w-full h-24 bg-white rounded-2xl border border-gray-100 flex flex-col justify-end overflow-hidden p-1 shadow-sm">
              <div 
                className="w-full bg-emerald-100 rounded-xl transition-all duration-1000 group-hover:bg-emerald-600" 
                style={{ height: `${val * 100}%` }} 
              />
            </div>
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{['أحد', 'إثن', 'ثلاث', 'أربع', 'خمس', 'جمع', 'سبت'][i]}</span>
          </div>
        ))}
      </div>
    </main>
  );
}

const StatRow = ({ icon, label, value, color }) => {
  const colors = {
    emerald: "bg-emerald-50 text-emerald-700",
    blue: "bg-blue-50 text-blue-700",
    amber: "bg-amber-50 text-amber-700"
  };
  return (
    <div className="flex items-center justify-between group">
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl transition-all group-hover:scale-110 ${colors[color]}`}>
          {icon}
        </div>
        <span className="font-bold text-gray-400 text-sm">{label}</span>
      </div>
      <span className="text-xl font-black text-gray-900">{value}</span>
    </div>
  );
};

export default PackagesPage;