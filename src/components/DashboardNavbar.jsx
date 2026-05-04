import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { MdNotifications, MdSearch, MdOutlineChat, MdKeyboardArrowDown } from 'react-icons/md';

function DashboardNavbar() {
  const { userName, accountType } = useContext(AuthContext);

  const getRoleLabel = (role) => {
    switch(role) {
      case 'student': return 'طالب';
      case 'teacher': return 'معلم';
      case 'parent': return 'ولي أمر';
      case 'admin': return 'مدير النظام';
      default: return 'مستخدم';
    }
  };

  return (
    <nav className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 px-8 flex items-center justify-between sticky top-0 z-40" dir="rtl">
      
      {/* 🔍 Search Bar */}
      <div className="hidden md:flex relative w-96 group">
        <MdSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl group-focus-within:text-emerald-600 transition-colors" />
        <input 
          type="text" 
          placeholder="البحث في المنصة..." 
          className="w-full pr-12 pl-4 py-2.5 bg-gray-50 border-none rounded-xl outline-none focus:ring-4 focus:ring-emerald-50 transition-all text-sm font-medium"
        />
      </div>

      {/* 🔔 Actions & Profile */}
      <div className="flex items-center gap-6">
        
        <div className="flex items-center gap-2">
          <button className="p-2.5 text-gray-400 hover:text-emerald-700 hover:bg-emerald-50 rounded-xl transition-all relative">
            <MdNotifications size={24} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
          </button>
          <button className="p-2.5 text-gray-400 hover:text-emerald-700 hover:bg-emerald-50 rounded-xl transition-all">
            <MdOutlineChat size={24} />
          </button>
        </div>

        <div className="h-8 w-px bg-gray-100 mx-2" />

        <button className="flex items-center gap-3 p-1.5 pr-4 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-lg transition-all group">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-black text-gray-900 leading-tight">{userName || 'زائر'}</p>
            <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">{getRoleLabel(accountType)}</p>
          </div>
          <div className="w-10 h-10 bg-emerald-700 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-100">
            <span className="text-white font-black text-lg">{(userName || 'U')[0]}</span>
          </div>
          <MdKeyboardArrowDown className="text-gray-400 group-hover:translate-y-0.5 transition-transform" />
        </button>

      </div>

    </nav>
  );
}

export default DashboardNavbar;
