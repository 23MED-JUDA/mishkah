import React from 'react'
import { 
  MdAssessment, MdTimeline, MdCheckCircleOutline, 
  MdErrorOutline, MdFilterList, MdVisibility,
  MdTrendingUp, MdOutlinePersonOutline
} from "react-icons/md";

function Reports() {
  const studentsReports = [
    { id: 1, name: "أحمد محمد علي", circle: "حلقة الصديق", joz: 26, rating: "ممتاز", pages: 14, color: "emerald" },
    { id: 2, name: "ياسين إبراهيم", circle: "حلقة الفاروق", joz: 15, rating: "جيد جداً", pages: 8, color: "blue" },
    { id: 3, name: "سارة محمود كمال", circle: "حلقة الزهراء", joz: 30, rating: "ممتاز", pages: 22, color: "emerald" },
    { id: 4, name: "ليلى حسن", circle: "حلقة الزهراء", joz: 29, rating: "جيد", pages: 5, color: "amber" },
  ];

  return (
    <main className="flex-1 flex flex-col px-4 md:px-8 py-6 bg-gray-50/50" dir="rtl">
      
      {/* 🟢 Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div className="text-right">
          <h1 className="text-3xl font-black text-gray-900 mb-2">تقارير المتابعة</h1>
          <p className="text-gray-500 font-medium">عرض شامل لنتائج الطلاب وتقارير الإنجاز الشهرية</p>
        </div>
        
        <div className="flex items-center gap-3 px-6 py-3 bg-red-50 border border-red-100 rounded-2xl text-red-600 font-bold text-sm">
          <MdErrorOutline size={20} />
          <span>التقارير ترسل تلقائياً لأولياء الأمور نهاية كل أسبوع</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        
        {/* 📊 Main Chart Visualization (Mock) */}
        <div className="lg:col-span-2 bg-white rounded-[3rem] p-10 shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-emerald-600 rounded-full" />
                <span className="text-xs font-bold text-gray-500">الحفظ</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-emerald-200 rounded-full" />
                <span className="text-xs font-bold text-gray-500">المراجعة</span>
              </div>
            </div>
            <h3 className="text-xl font-black text-gray-800 flex items-center gap-2">
              <MdTrendingUp className="text-emerald-600" size={24} />
              تطور المستوى العام
            </h3>
          </div>

          <div className="h-64 flex items-end justify-between px-4">
            {[
              { month: 'أكتوبر', val: 40 },
              { month: 'نوفمبر', val: 65 },
              { month: 'ديسمبر', val: 85 },
              { month: 'يناير', val: 100 }
            ].map((d, i) => (
              <div key={i} className="flex flex-col items-center gap-4 group">
                <div className="relative w-16 md:w-24 bg-gray-50 rounded-2xl flex flex-col justify-end overflow-hidden h-48">
                  <div 
                    className="w-full bg-emerald-200 transition-all duration-1000 group-hover:bg-emerald-300" 
                    style={{ height: `${d.val * 0.7}%` }} 
                  />
                  <div 
                    className="absolute bottom-0 w-full bg-emerald-600 transition-all duration-1000 shadow-lg group-hover:bg-emerald-700" 
                    style={{ height: `${d.val * 0.4}%` }} 
                  />
                </div>
                <span className="text-xs font-black text-gray-400 group-hover:text-gray-900">{d.month}</span>
              </div>
            ))}
          </div>
          <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-50 rounded-full -translate-x-20 -translate-y-20 blur-3xl opacity-50" />
        </div>

        {/* 📋 Sidebar Summary */}
        <div className="space-y-6">
          <div className="bg-emerald-900 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
            <div className="flex justify-between items-center mb-8">
              <MdCheckCircleOutline size={28} className="text-emerald-400" />
              <span className="px-3 py-1 bg-emerald-700 rounded-lg text-[10px] font-black uppercase">أداء العام</span>
            </div>
            <p className="text-emerald-200 font-bold text-sm mb-1">نسبة الانضباط العام</p>
            <h2 className="text-5xl font-black mb-4">94%</h2>
            <div className="w-full h-2 bg-emerald-800 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-400 rounded-full" style={{ width: '94%' }} />
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-800 rounded-full blur-3xl opacity-30" />
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 relative group cursor-help">
            <h4 className="text-sm font-black text-gray-400 mb-4 text-right">أحدث الملاحظات المرسلة</h4>
            <div className="p-4 bg-gray-50 rounded-2xl italic text-gray-600 text-sm leading-relaxed text-right relative border border-transparent group-hover:border-emerald-100 transition-all">
              "تحسن ملحوظ في مخارج الحروف والالتزام بأحكام التجويد الأساسية خلال الأسبوع الماضي لطلاب حلقة الصديق"
            </div>
          </div>
        </div>
      </div>

      {/* 📜 Student Reports List */}
      <div className="bg-white rounded-[3rem] shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-8 border-b border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <button className="flex items-center gap-2 px-6 py-2.5 bg-gray-50 rounded-2xl text-gray-500 font-bold hover:bg-emerald-50 hover:text-emerald-700 transition-all">
            <MdFilterList size={20} />
            تصفية حسب الحلقة
          </button>
          <h3 className="text-xl font-black text-gray-800">تقارير الطلاب التفصيلية</h3>
        </div>

        <div className="divide-y divide-gray-50">
          {studentsReports.map((report) => (
            <div key={report.id} className="p-6 md:p-8 hover:bg-gray-50/50 transition-all flex flex-col md:flex-row items-center gap-8 text-center md:text-right">
              
              {/* Profile */}
              <div className="flex flex-col md:flex-row items-center gap-4 md:w-80">
                <div className={`w-14 h-14 bg-${report.color}-100 text-${report.color}-700 rounded-2xl flex items-center justify-center font-black text-xl`}>
                  {report.name[0]}
                </div>
                <div>
                  <h4 className="font-black text-gray-800">{report.name}</h4>
                  <p className="text-xs text-gray-400 font-bold">{report.circle} • الجزء {report.joz}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8 flex-1">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black text-gray-400 uppercase">آخر تقييم</span>
                  <span className={`text-sm font-black ${report.color === 'emerald' ? 'text-emerald-600' : 'text-blue-600'}`}>{report.rating}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black text-gray-400 uppercase">المحفوظات</span>
                  <span className="text-sm font-black text-gray-700">{report.pages} صفحة</span>
                </div>
              </div>

              {/* Action */}
              <button className="px-8 py-3 bg-emerald-700 text-white rounded-2xl font-black text-xs shadow-lg shadow-emerald-100 hover:bg-emerald-800 transition-all flex items-center gap-2">
                <MdVisibility size={18} />
                عرض التقرير الكامل
              </button>
            </div>
          ))}
        </div>
        
        <div className="p-8 bg-gray-50/50 text-center">
          <button className="text-emerald-700 font-black text-sm hover:underline">تحميل كافة التقارير بصيغة PDF</button>
        </div>
      </div>
    </main>
  )
}

export default Reports;