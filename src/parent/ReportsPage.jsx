import React, { useEffect, useState } from "react";
import { 
  MdVisibility, MdTrendingUp, MdOutlinePersonOutline, 
  MdCheckCircle, MdTimeline, MdAssignment, 
  MdHistory, MdFilterList, MdSort
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

function ReportsPage() {
  const [students, setStudents] = useState([]);
  const [reports, setReports] = useState([]);
  const [stats, setStats] = useState({});
  const [viewMode, setViewMode] = useState("quarter");
  const navigate = useNavigate();

  useEffect(() => {
    // 🧪 Mock Data for Demonstration
    setStudents([
      { id: 1, name: "سارة محمد", grade: "الصف الرابع", group: "حلقة الفردوس", progress: 88, status: "نشط", avatar: "S" },
      { id: 2, name: "أحمد محمد", grade: "الصف الثاني", group: "حلقة الرحمة", progress: 94, status: "نشط", avatar: "A" },
    ]);

    setReports([
      { id: 1, title: "تقرير الأداء الأسبوعي", student: "أحمد محمد", date: "2024-10-14", teacher: "الشيخ عبدالرحمن", status: "ممتاز", score: 98 },
      { id: 2, title: "تقرير الحفظ والتلاوة", student: "سارة محمد", date: "2024-10-10", teacher: "المعلمة مريم", status: "ممتاز", score: 95 },
      { id: 3, title: "تقرير السلوك والانضباط", student: "أحمد محمد", date: "2024-10-05", teacher: "الشيخ عبدالرحمن", status: "جيد جداً", score: 88 },
    ]);

    setStats({
      improvement: "12.4%",
      attendance: "98%",
      totalHalaqat: 45
    });
  }, []);

  return (
    <main className="flex-1 flex flex-col px-4 md:px-8 py-6 bg-gray-50/50" dir="rtl">
      
      {/* 🟢 Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div className="text-right">
          <h1 className="text-3xl font-black text-gray-900 mb-2">تقارير مستوى الأبناء</h1>
          <p className="text-gray-500 font-medium">متابعة دقيقة للأداء الأكاديمي، الحفظ، والسلوك لأبنائك في منصة مشكاة</p>
        </div>
        
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-6 py-2.5 bg-white border border-gray-100 rounded-2xl text-gray-600 font-bold hover:bg-gray-50 transition-all shadow-sm">
            <MdHistory size={20} />
            الأرشيف
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        
        {/* 👤 Students Quick View */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {students.map((student) => (
            <div key={student.id} className="bg-white p-8 rounded-[3rem] shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all">
              <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-[1.5rem] flex items-center justify-center font-black text-2xl group-hover:scale-110 transition-transform">
                  {student.avatar}
                </div>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-widest">{student.status}</span>
              </div>
              
              <h3 className="text-xl font-black text-gray-900 mb-1">{student.name}</h3>
              <p className="text-sm text-gray-400 font-bold mb-8">{student.grade} • {student.group}</p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-end mb-1">
                  <span className="text-xs font-black text-emerald-700">معدل الإنجاز العام</span>
                  <span className="text-sm font-black text-gray-900">{student.progress}%</span>
                </div>
                <div className="h-2.5 w-full bg-gray-50 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-600 rounded-full transition-all duration-1000" style={{ width: `${student.progress}%` }} />
                </div>
              </div>
              
              <button className="w-full mt-8 py-4 bg-emerald-700 text-white rounded-2xl font-black text-sm shadow-lg shadow-emerald-100 hover:bg-emerald-800 transition-all">
                عرض تقارير الطالب
              </button>
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50/50 rounded-full -translate-x-16 -translate-y-16 blur-3xl" />
            </div>
          ))}
        </div>

        {/* 📊 Monthly Highlights */}
        <div className="bg-emerald-900 p-8 rounded-[3rem] text-white shadow-2xl relative overflow-hidden flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-black mb-8 flex items-center gap-2">
              <MdTimeline className="text-emerald-400" />
              ملخص الشهر
            </h3>
            <div className="space-y-8">
              <StatItem label="نسبة التحسن" value={stats.improvement} color="emerald" />
              <StatItem label="نسبة الحضور" value={stats.attendance} color="blue" />
              <StatItem label="إجمالي الحلقات" value={stats.totalHalaqat} color="amber" />
            </div>
          </div>
          <div className="mt-10 p-4 bg-white/10 rounded-2xl backdrop-blur-md border border-white/10">
            <p className="text-[10px] font-black text-emerald-300 uppercase mb-1">نصيحة تربوية</p>
            <p className="text-xs font-medium leading-relaxed">التحفيز المستمر بعد كل حلقة يزيد من شغف الطالب للحفظ بنسبة 40%</p>
          </div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-800 rounded-full blur-3xl opacity-30" />
        </div>
      </div>

      {/* 📈 Progress Chart Visualization */}
      <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 mb-10 relative overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="text-right">
            <h3 className="text-xl font-black text-gray-800">منحنى التطور الدراسي</h3>
            <p className="text-sm text-gray-400 font-bold">متابعة التقدم الأكاديمي خلال الفترات الماضية</p>
          </div>
          <div className="flex bg-gray-50 p-1 rounded-2xl border border-gray-100">
            <button onClick={() => setViewMode('quarter')} className={`px-6 py-2 rounded-xl text-xs font-black transition-all ${viewMode === 'quarter' ? 'bg-emerald-700 text-white shadow-lg shadow-emerald-100' : 'text-gray-400 hover:bg-gray-100'}`}>فصلي</button>
            <button onClick={() => setViewMode('month')} className={`px-6 py-2 rounded-xl text-xs font-black transition-all ${viewMode === 'month' ? 'bg-emerald-700 text-white shadow-lg shadow-emerald-100' : 'text-gray-400 hover:bg-gray-100'}`}>شهري</button>
          </div>
        </div>

        <div className="h-64 flex items-end justify-between px-4 md:px-12 relative">
          {/* Mock Chart Grid Lines */}
          <div className="absolute inset-0 flex flex-col justify-between py-2 px-12 opacity-10">
            {[1,2,3,4].map(i => <div key={i} className="w-full h-px bg-gray-900" />)}
          </div>
          
          {[
            { label: 'سبتمبر', val: 60 },
            { label: 'أكتوبر', val: 75 },
            { label: 'نوفمبر', val: 90 },
            { label: 'ديسمبر', val: 85 },
            { label: 'يناير', val: 95 }
          ].map((d, i) => (
            <div key={i} className="flex flex-col items-center gap-4 group relative z-10">
              <div className="relative w-12 md:w-20 bg-gray-50 rounded-2xl flex flex-col justify-end overflow-hidden h-48 border border-gray-100">
                <div 
                  className="w-full bg-emerald-600 transition-all duration-1000 group-hover:bg-emerald-700 shadow-lg shadow-emerald-100" 
                  style={{ height: `${d.val}%` }} 
                />
              </div>
              <span className="text-[10px] font-black text-gray-400 group-hover:text-gray-900">{d.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 📜 Latest Reports List */}
      <div className="bg-white rounded-[3rem] shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-8 border-b border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-2">
            <button className="p-3 bg-gray-50 rounded-2xl text-gray-400 hover:text-emerald-700 transition-all"><MdFilterList size={20} /></button>
            <button className="p-3 bg-gray-50 rounded-2xl text-gray-400 hover:text-emerald-700 transition-all"><MdSort size={20} /></button>
          </div>
          <h3 className="text-xl font-black text-gray-800">أحدث التقارير الواردة</h3>
        </div>

        <div className="divide-y divide-gray-50">
          {reports.map((report) => (
            <div key={report.id} className="p-6 md:p-8 hover:bg-gray-50/50 transition-all flex flex-col md:flex-row items-center gap-8 group">
              
              <div className="w-14 h-14 bg-emerald-50 text-emerald-700 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                <MdAssignment />
              </div>

              <div className="flex-1 text-center md:text-right">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1 justify-center md:justify-start">
                  <h4 className="text-lg font-black text-gray-900">{report.title}</h4>
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-500 rounded-md text-[10px] font-black">{report.student}</span>
                </div>
                <p className="text-xs text-gray-400 font-bold">{report.date} • {report.teacher}</p>
              </div>

              <div className="flex flex-col items-center md:items-end gap-2 min-w-[120px]">
                <span className="text-emerald-700 font-black text-sm">{report.status}</span>
                <div className="h-1.5 w-24 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-600 rounded-full" style={{ width: `${report.score}%` }} />
                </div>
              </div>

              <button className="px-8 py-3 bg-emerald-700 text-white rounded-2xl font-black text-xs shadow-lg shadow-emerald-100 hover:bg-emerald-800 transition-all flex items-center gap-2">
                <MdVisibility size={18} />
                عرض
              </button>
            </div>
          ))}
        </div>
        
        <div className="p-8 bg-gray-50/50 text-center">
          <button className="text-emerald-700 font-black text-sm hover:underline">مشاهدة جميع التقارير التاريخية</button>
        </div>
      </div>
    </main>
  );
}

const StatItem = ({ label, value, color }) => (
  <div className="flex items-center justify-between group">
    <div className="text-right">
      <p className="text-[10px] font-black text-emerald-300 uppercase tracking-widest mb-1">{label}</p>
      <h4 className="text-2xl font-black group-hover:scale-105 transition-transform">{value}</h4>
    </div>
    <div className={`w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/5`}>
      <MdTrendingUp size={24} className="text-emerald-400" />
    </div>
  </div>
);

export default ReportsPage;