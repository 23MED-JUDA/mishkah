import React, { useState } from 'react';
import { 
  MdAdd, MdFilterList, MdSearch, MdMoreVert, 
  MdSchool, MdPersonOutline, MdCheckCircle, MdCancel,
  MdFileDownload, MdSettings, MdArrowBack, MdArrowForward,
  MdTimeline
} from 'react-icons/md';

function StudentsManagement() {
  const [search, setSearch] = useState("");

  const students = [
    { id: 'STU-29482#', name: 'عبدالرحمن محمد العتيبي', details: 'سنتين في المسار - المستوى الثالث', status: 'نشط', avatar: 'ع', color: 'emerald' },
    { id: 'STU-11283#', name: 'نورة عبدالله القحطاني', details: 'جديدة - بانتظار التسكين', status: 'قيد المراجعة', avatar: 'ن', color: 'amber' },
    { id: 'STU-66921#', name: 'خالد إبراهيم المنصور', details: 'منسحب - إجازة دراسية', status: 'غير نشط', avatar: 'خ', color: 'red' },
    { id: 'STU-55418#', name: 'مريم صالح السالم', details: 'خمس سنوات - خاتمة', status: 'نشط', avatar: 'م', color: 'emerald' },
    { id: 'STU-19882#', name: 'فهد بندر الرويلي', details: 'سنة واحدة - المستوى الأول', status: 'نشط', avatar: 'ف', color: 'emerald' },
  ];

  return (
    <main className="flex-1 flex flex-col px-4 md:px-8 py-6 bg-gray-50/50" dir="rtl">
      
      {/* 🟢 Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div className="text-right">
          <h1 className="text-3xl font-black text-gray-900 mb-2">إدارة سجلات الطلاب</h1>
          <p className="text-gray-500 font-medium">متابعة دقيقة لمسار الطلاب الأكاديمي وحالات القيد في النظام</p>
        </div>
        
        <div className="flex gap-4">
          <div className="relative w-64 md:w-80">
            <MdSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <input 
              type="text" 
              placeholder="بحث عن طالب، معرف..." 
              className="w-full pr-12 pl-4 py-3.5 bg-white border border-gray-100 rounded-2xl shadow-sm outline-none focus:ring-4 focus:ring-emerald-50 transition-all text-sm font-medium"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className="p-3.5 bg-white border border-gray-100 rounded-2xl text-gray-400 hover:text-emerald-700 transition-all shadow-sm">
            <MdSettings size={22} />
          </button>
        </div>
      </div>

      {/* 📊 Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <AdminStatCard label="إجمالي الطلاب" val="1,284" icon={<MdSchool />} color="emerald" highlight />
        <AdminStatCard label="طلاب نشطون" val="1,150" icon={<MdCheckCircle />} color="blue" />
        <AdminStatCard label="بانتظار المراجعة" val="34" icon={<MdTimeline />} color="amber" />
        <AdminStatCard label="طلبات الانسحاب" val="12" icon={<MdCancel />} color="red" />
      </div>

      {/* 📋 Table & Actions Container */}
      <div className="bg-white rounded-[3rem] shadow-sm border border-gray-100 overflow-hidden relative">
        <div className="p-8 border-b border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6 bg-gray-50/30">
          <div className="flex bg-white p-1.5 rounded-2xl border border-gray-100 shadow-sm">
            <button className="px-8 py-2.5 text-xs font-black bg-emerald-700 text-white rounded-xl shadow-lg shadow-emerald-100">الكل</button>
            <button className="px-8 py-2.5 text-xs font-black text-gray-400 hover:bg-gray-50 rounded-xl transition-all">نشط</button>
            <button className="px-8 py-2.5 text-xs font-black text-gray-400 hover:bg-gray-50 rounded-xl transition-all">بانتظار التسكين</button>
          </div>

          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-100 rounded-2xl text-gray-600 font-bold hover:bg-gray-50 transition-all shadow-sm">
              <MdFileDownload size={20} />
              تصدير القائمة
            </button>
            <button className="flex items-center gap-2 px-6 py-2.5 bg-emerald-700 text-white rounded-2xl font-black hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-100">
              <MdAdd size={20} />
              طالب جديد
            </button>
          </div>
        </div>

        <table className="w-full text-right border-collapse">
          <thead>
            <tr className="bg-gray-50/50">
              <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">الطالب والمعلومات الأكاديمية</th>
              <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">المعرف الموحد</th>
              <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">حالة القيد</th>
              <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">الإجراءات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {students.map((student, i) => (
              <tr key={i} className="group hover:bg-gray-50/50 transition-all">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-5">
                    <div className={`w-14 h-14 rounded-[1.5rem] flex items-center justify-center font-black text-xl transition-transform group-hover:scale-110
                      ${student.color === 'emerald' ? 'bg-emerald-100 text-emerald-700' : 
                        student.color === 'amber' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'}`}>
                      {student.avatar}
                    </div>
                    <div>
                      <p className="text-lg font-black text-gray-900 mb-0.5">{student.name}</p>
                      <p className="text-xs font-bold text-gray-400">{student.details}</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6 text-center font-mono text-xs font-black text-gray-400 tracking-wider">{student.id}</td>
                <td className="px-8 py-6 text-center">
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase
                    ${student.status === 'نشط' ? 'bg-emerald-100 text-emerald-700' : 
                      student.status === 'قيد المراجعة' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'}`}>
                    • {student.status}
                  </span>
                </td>
                <td className="px-8 py-6">
                  <button className="p-3 bg-gray-50 rounded-2xl text-gray-400 hover:bg-emerald-50 hover:text-emerald-700 transition-all shadow-sm">
                    <MdMoreVert size={22} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="p-8 bg-gray-50/30 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">عرض 10 طلاب من إجمالي 1,284</p>
          <div className="flex items-center gap-2">
            <button className="p-2.5 bg-white rounded-xl shadow-sm text-gray-400 hover:text-emerald-700 transition-all border border-gray-100"><MdArrowBack size={20} className="rotate-180" /></button>
            <button className="w-10 h-10 rounded-xl text-xs font-black bg-emerald-700 text-white shadow-lg shadow-emerald-100">1</button>
            <button className="w-10 h-10 rounded-xl text-xs font-black text-gray-400 bg-white border border-gray-100 hover:bg-gray-50">2</button>
            <button className="w-10 h-10 rounded-xl text-xs font-black text-gray-400 bg-white border border-gray-100 hover:bg-gray-50">3</button>
            <span className="px-2 text-gray-300">...</span>
            <button className="w-10 h-10 rounded-xl text-xs font-black text-gray-400 bg-white border border-gray-100 hover:bg-gray-50">129</button>
            <button className="p-2.5 bg-white rounded-xl shadow-sm text-gray-400 hover:text-emerald-700 transition-all border border-gray-100"><MdArrowForward size={20} className="rotate-180" /></button>
          </div>
        </div>
      </div>
    </main>
  );
}

const AdminStatCard = ({ label, val, icon, color, highlight }) => {
  const colors = {
    emerald: "bg-emerald-50 text-emerald-700 shadow-emerald-100",
    blue: "bg-blue-50 text-blue-700 shadow-blue-100",
    amber: "bg-amber-50 text-amber-700 shadow-amber-100",
    red: "bg-red-50 text-red-700 shadow-red-100"
  };

  return (
    <div className={`p-8 rounded-[3rem] shadow-sm border transition-all group hover:shadow-2xl relative overflow-hidden
      ${highlight ? 'bg-emerald-900 border-emerald-900 text-white shadow-xl' : 'bg-white border-gray-100'}`}>
      <div className="flex justify-between items-start mb-6">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl transition-transform group-hover:scale-110 shadow-sm
          ${highlight ? 'bg-emerald-800 text-emerald-400' : colors[color]}`}>
          {icon}
        </div>
      </div>
      <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${highlight ? 'text-emerald-300' : 'text-gray-400'}`}>{label}</p>
      <h2 className={`text-4xl font-black ${highlight ? 'text-white' : 'text-gray-900'}`}>{val}</h2>
      
      {highlight && <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-emerald-800 rounded-full blur-3xl opacity-50 group-hover:scale-125 transition-transform duration-700" />}
    </div>
  );
};

export default StudentsManagement;
