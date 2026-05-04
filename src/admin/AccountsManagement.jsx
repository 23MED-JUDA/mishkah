import React, { useState } from 'react';
import { 
  MdAdd, MdFilterList, MdSearch, MdMoreVert, 
  MdPeople, MdSchool, MdGroups, MdFamilyRestroom,
  MdTrendingUp, MdHistory, MdFileDownload, MdArrowBack, MdArrowForward
} from 'react-icons/md';

function AccountsManagement() {
  const [search, setSearch] = useState("");

  const users = [
    { id: '2024-05110', name: 'عبدالرحمن محمد الفارس', type: 'معلم', joinDate: '12 مارس 2024', status: 'نشط', avatar: 'A' },
    { id: '2024-09822', name: 'سعود بن عبدالله', type: 'طالب', joinDate: '05 فبراير 2024', status: 'نشط', avatar: 'S' },
    { id: '2023-11004', name: 'نورة خالد العتيبي', type: 'ولي أمر', joinDate: '20 نوفمبر 2023', status: 'متوقف', avatar: 'N' },
    { id: '2024-01229', name: 'ياسر سليمان', type: 'معلم', joinDate: '15 يناير 2024', status: 'نشط', avatar: 'Y' },
  ];

  // 🔍 تفعيل البحث (Filtering Logic)
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(search.toLowerCase()) || 
    user.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="flex-1 flex flex-col px-4 md:px-8 py-6 bg-gray-50/50" dir="rtl">
      
      {/* 🟢 Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div className="text-right">
          <h1 className="text-3xl font-black text-gray-900 mb-2">إدارة الحسابات</h1>
          <p className="text-gray-500 font-medium">التحكم المركزي بجميع مستخدمي منصة مشكاة</p>
        </div>
        
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-100 rounded-2xl text-gray-600 font-bold hover:bg-gray-50 transition-all shadow-sm">
            <MdFileDownload size={20} />
            تصدير البيانات
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-emerald-700 text-white rounded-2xl font-black hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-100">
            <MdAdd size={20} />
            إضافة حساب جديد
          </button>
        </div>
      </div>

      {/* 📊 Top Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard label="إجمالي المستخدمين" val="2,482" icon={<MdPeople />} color="emerald" primary />
        <StatCard label="الطلاب" val="1,840" icon={<MdSchool />} color="blue" trend="+12%" />
        <StatCard label="المعلمون" val="142" icon={<MdGroups />} color="amber" trend="+5%" />
        <StatCard label="أولياء الأمور" val="500" icon={<MdFamilyRestroom />} color="red" trend="-3%" />
      </div>

      {/* 🔍 Search & Filter Bar */}
      <div className="bg-white p-4 rounded-[2.5rem] shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row gap-4 items-center relative overflow-hidden">
        <div className="flex-1 relative w-full">
          <MdSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
          <input 
            type="text" 
            placeholder="البحث عن مستخدم بالاسم أو رقم الهوية..." 
            className="w-full pr-12 pl-4 py-3.5 bg-gray-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500/20 text-sm font-bold"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <button className="p-3.5 bg-gray-50 rounded-2xl text-gray-400 hover:text-emerald-700 transition-all"><MdFilterList size={22} /></button>
          <button className="p-3.5 bg-gray-50 rounded-2xl text-gray-400 hover:text-emerald-700 transition-all"><MdHistory size={22} /></button>
        </div>
      </div>

      {/* 📋 Accounts Table */}
      <div className="bg-white rounded-[3rem] shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-right border-collapse">
          <thead>
            <tr className="bg-gray-50/50 border-b border-gray-50">
              <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">المستخدم</th>
              <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">نوع الحساب</th>
              <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">تاريخ الانضمام</th>
              <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">الحالة</th>
              <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">الإجراءات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filteredUsers.length > 0 ? filteredUsers.map((user, i) => (
              <tr key={i} className="group hover:bg-gray-50/50 transition-all">
                <td className="px-8 py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center font-black text-xl group-hover:scale-110 transition-transform">
                      {user.avatar}
                    </div>
                    <div>
                      <p className="font-black text-gray-900">{user.name}</p>
                      <p className="text-[10px] text-gray-400 font-bold">ID: {user.id}</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-5">
                  <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest
                    ${user.type === 'معلم' ? 'bg-emerald-50 text-emerald-600' : 
                      user.type === 'طالب' ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-orange-600'}`}>
                    {user.type}
                  </span>
                </td>
                <td className="px-8 py-5 text-sm font-bold text-gray-400">{user.joinDate}</td>
                <td className="px-8 py-5">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${user.status === 'نشط' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-red-500'}`} />
                    <span className="text-xs font-black text-gray-700">{user.status}</span>
                  </div>
                </td>
                <td className="px-8 py-5">
                  <button className="p-2.5 bg-gray-50 rounded-xl text-gray-400 hover:bg-emerald-50 hover:text-emerald-700 transition-all">
                    <MdMoreVert size={20} />
                  </button>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="5" className="px-8 py-10 text-center text-gray-400 font-bold">
                  لا توجد نتائج تطابق بحثك.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        
        {/* Pagination */}
        <div className="p-8 bg-gray-50/50 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-black text-gray-400 uppercase tracking-widest">عرض 10 من أصل 2,482 مستخدم</p>
          <div className="flex items-center gap-2">
            <button className="p-2 bg-white rounded-xl shadow-sm text-gray-400 hover:text-emerald-700 transition-all border border-gray-50"><MdArrowBack size={20} className="rotate-180" /></button>
            {[1, 2, 3].map(p => (
              <button key={p} className={`w-10 h-10 rounded-xl text-xs font-black transition-all ${p === 1 ? 'bg-emerald-700 text-white shadow-lg shadow-emerald-100' : 'bg-white text-gray-400 hover:bg-gray-100'}`}>
                {p}
              </button>
            ))}
            <span className="px-2 text-gray-300">...</span>
            <button className="p-2 bg-white rounded-xl shadow-sm text-gray-400 hover:text-emerald-700 transition-all border border-gray-50"><MdArrowForward size={20} className="rotate-180" /></button>
          </div>
        </div>
      </div>
    </main>
  );
}

const StatCard = ({ label, val, icon, color, trend, primary }) => {
  const colors = {
    emerald: "bg-emerald-50 text-emerald-700",
    blue: "bg-blue-50 text-blue-700",
    amber: "bg-amber-50 text-amber-700",
    red: "bg-red-50 text-red-700"
  };

  if (primary) return (
    <div className="bg-emerald-900 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
      <div className="relative z-10">
        <p className="text-[10px] font-black text-emerald-300 uppercase tracking-widest mb-1">{label}</p>
        <h2 className="text-4xl font-black mb-4">{val}</h2>
        <div className="flex items-center gap-2 text-xs font-black text-emerald-400">
          <MdTrendingUp size={16} />
          <span>+24% عن الشهر الماضي</span>
        </div>
      </div>
      <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-emerald-800 rounded-full blur-3xl opacity-50 group-hover:scale-125 transition-transform duration-700" />
      <div className="absolute top-4 left-4 text-emerald-800 opacity-20 text-6xl">{icon}</div>
    </div>
  );

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 group hover:shadow-xl transition-all">
      <div className="flex justify-between items-start mb-6">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl transition-transform group-hover:scale-110 ${colors[color]}`}>
          {icon}
        </div>
        {trend && (
          <span className={`px-2 py-0.5 rounded-lg text-[10px] font-black ${trend.startsWith('+') ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
            {trend}
          </span>
        )}
      </div>
      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{label}</p>
      <h2 className="text-2xl font-black text-gray-900">{val}</h2>
    </div>
  );
};

export default AccountsManagement;
