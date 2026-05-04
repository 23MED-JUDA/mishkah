import React, { useState, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { 
  MdHome, MdAccountCircle, MdSchool, MdLibraryBooks, 
  MdCalendarMonth, MdAssignment, MdTimeline, MdPayments,
  MdNotifications, MdSettings, MdGroups, MdVerifiedUser,
  MdDescription, MdInsights, MdExitToApp, MdMenu, MdChevronLeft
} from 'react-icons/md';

export const childLinks = [
  // Student Links
  { id: 1, name: "الملف الشخصي", path: "/dashboard/student/profile", icon: <MdAccountCircle />, role: 'student' },
  { id: 2, name: "الاشتراك والدفع", path: "/dashboard/student/courses", icon: <MdPayments />, role: 'student' },
  { id: 3, name: "التقويم الدراسي", path: "/dashboard/student/calendar", icon: <MdCalendarMonth />, role: 'student' },
  { id: 4, name: "المكتبة الرقمية", path: "/dashboard/student/library", icon: <MdLibraryBooks />, role: 'student' },
  { id: 5, name: "المهام اليومية", path: "/dashboard/student/tasks", icon: <MdAssignment />, role: 'student' },
  { id: 6, name: "متابعة المسار", path: "/dashboard/student/tracking", icon: <MdTimeline />, role: 'student' },

  // Teacher Links
  { id: 7, name: "الملف الشخصي", path: "/dashboard/teacher/contact", icon: <MdAccountCircle />, role: 'teacher' },
  { id: 8, name: "إدارة الحلقات", path: "/dashboard/teacher/packages", icon: <MdGroups />, role: 'teacher' },
  { id: 9, name: "سجل الطلاب", path: "/dashboard/teacher/students", icon: <MdSchool />, role: 'teacher' },
  { id: 10, name: "التقييم الأكاديمي", path: "/dashboard/teacher/evaluation", icon: <MdInsights />, role: 'teacher' },
  { id: 11, name: "التقارير", path: "/dashboard/teacher/reports", icon: <MdDescription />, role: 'teacher' },
  { id: 12, name: "المكتبة القرآنية", path: "/dashboard/teacher/library", icon: <MdLibraryBooks />, role: 'teacher' },

  // Parent Links
  { id: 13, name: "الملف الشخصي", path: "/dashboard/parent/contact", icon: <MdAccountCircle />, role: 'parent' },
  { id: 14, name: "تقارير الأبناء", path: "/dashboard/parent/reports", icon: <MdDescription />, role: 'parent' },
  { id: 15, name: "جدول الحلقات", path: "/dashboard/parent/episods", icon: <MdCalendarMonth />, role: 'parent' },
  { id: 16, name: "الإشعارات", path: "/dashboard/parent/notifications", icon: <MdNotifications />, role: 'parent' },
  { id: 17, name: "الاشتراكات والدفع", path: "/dashboard/parent/payment", icon: <MdPayments />, role: 'parent' },

  // Admin Links
  { id: 18, name: "إدارة الحسابات", path: "/dashboard/admin/accounts", icon: <MdGroups />, role: 'admin' },
  { id: 19, name: "إدارة الطلاب", path: "/dashboard/admin/students", icon: <MdSchool />, role: 'admin' },
  { id: 20, name: "المحتوى التعليمي", path: "/dashboard/admin/content", icon: <MdLibraryBooks />, role: 'admin' },
  { id: 21, name: "تنظيم الحلقات", path: "/dashboard/admin/circles", icon: <MdCalendarMonth />, role: 'admin' },

  { id: 22, name: "مراجعة المعلمين", path: "/dashboard/admin/review-teachers", icon: <MdVerifiedUser />, role: 'admin' },
  { id: 23, name: "التقارير العامة", path: "/dashboard/admin/reports", icon: <MdInsights />, role: 'admin' },
  { id: 24, name: "المالية والدفع", path: "/dashboard/admin/subscriptions", icon: <MdPayments />, role: 'admin' },
  { id: 25, name: "الإشعارات", path: "/dashboard/admin/notifications", icon: <MdNotifications />, role: 'admin' },
  { id: 26, name: "إعدادات النظام", path: "/dashboard/admin/settings", icon: <MdSettings />, role: 'admin' },

];

function Sidebar() {
  const [open, setOpen] = useState(true);
  const { accountType, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  if (loading || !accountType) return null;

  const linksToShow = childLinks.filter(link => link.role === accountType);

  return (
    <aside 
      className={`relative h-screen bg-white border-l border-gray-100 flex flex-col shadow-2xl transition-all duration-500 ease-in-out z-50
        ${open ? 'w-72' : 'w-24'}`}
      dir="rtl"
    >
      {/* 🚀 Brand Section */}
      <div className="p-8 flex items-center gap-4 border-b border-gray-50 overflow-hidden">
        <div className="w-10 h-10 bg-emerald-700 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-emerald-100">
          <span className="text-white font-black text-xl">م</span>
        </div>
        {open && (
          <div className="flex flex-col whitespace-nowrap">
            <span className="text-lg font-black text-gray-900 tracking-tight">مشكاة</span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest -mt-1">منصة تعليمية</span>
          </div>
        )}
      </div>

      {/* 🧭 Navigation */}
      <nav className="flex-1 overflow-y-auto py-8 px-4 custom-scrollbar">
        <ul className="space-y-2">
          {linksToShow.map(link => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.id}>
                <Link
                  to={link.path}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all group relative
                    ${isActive 
                      ? 'bg-emerald-700 text-white shadow-xl shadow-emerald-100 font-black' 
                      : 'text-gray-400 hover:bg-emerald-50/50 hover:text-emerald-700'}`}
                >
                  <span className={`text-2xl transition-transform group-hover:scale-110 ${isActive ? 'text-white' : ''}`}>
                    {link.icon}
                  </span>
                  {open && <span className="text-sm whitespace-nowrap">{link.name}</span>}
                  
                  {isActive && !open && (
                    <div className="absolute right-0 w-1.5 h-8 bg-white rounded-l-full" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* 👤 Profile/Logout Section */}
      <div className="p-4 border-t border-gray-50">
        <button
          onClick={() => navigate('/signout')}
          className="flex items-center gap-4 p-4 text-red-500 hover:bg-red-50 w-full rounded-2xl transition-all group"
        >
          <MdExitToApp className="text-2xl group-hover:translate-x-1 transition-transform" />
          {open && <span className="text-sm font-black">تسجيل خروج</span>}
        </button>
      </div>

      {/* 🔘 Toggle Button */}
      <button 
        onClick={() => setOpen(!open)}
        className="absolute -left-4 top-10 w-8 h-8 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-all z-10"
      >
        <MdChevronLeft className={`text-gray-400 transition-transform duration-500 ${open ? '' : 'rotate-180'}`} size={20} />
      </button>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #f1f5f9; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #e2e8f0; }
      `}} />
    </aside>
  );
}

export default Sidebar;