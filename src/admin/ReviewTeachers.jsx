import React, { useState } from 'react';
import { 
  MdSearch, MdFilterList, MdInfo, MdCheckCircle, 
  MdDescription, MdClose, MdCheck, MdVisibility, 
  MdEmail, MdCalendarToday, MdSchool, MdKeyboardArrowLeft,
  MdTimeline, MdVerifiedUser
} from 'react-icons/md';

function ReviewTeachers() {
  const [search, setSearch] = useState("");

  const requests = [
    { id: 1, name: 'أ. فاطمة الزهراء', specialty: 'اللغة العربية', date: '14 أكتوبر 2023', experience: '5 سنوات', email: 'f.zahra@email.com', status: 'بانتظار المراجعة', avatar: 'F' },
    { id: 2, name: 'د. أحمد عبد الرحمن', specialty: 'الدراسات الإسلامية', date: '12 أكتوبر 2023', experience: '12 سنة', email: 'a.abdelrahman@email.com', status: 'بانتظار المراجعة', avatar: 'A' },
    { id: 3, name: 'د. مريم إبراهيم', specialty: 'التربية الإسلامية', date: '16 أكتوبر 2023', experience: '15 سنة', email: 'm.ibrahim@email.com', status: 'بانتظار المراجعة', avatar: 'M' },
    { id: 4, name: 'أ. يوسف محمد', specialty: 'علوم القرآن', date: '15 أكتوبر 2023', experience: '8 سنوات', email: 'yousif.m@email.com', status: 'بانتظار المراجعة', avatar: 'Y' }
  ];

  return (
    <main className="flex-1 flex flex-col px-4 md:px-8 py-6 bg-gray-50/50" dir="rtl">
      
      {/* 🟢 Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div className="text-right">
          <h1 className="text-3xl font-black text-gray-900 mb-2">مراجعة المعلمين الجدد</h1>
          <p className="text-gray-500 font-medium">التحقق من الكفاءة العلمية والخبرات العملية للمتقدمين الجدد</p>
          <div className="mt-3 flex items-center gap-2 text-emerald-600 font-black text-xs uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            يوجد حالياً 8 طلبات بانتظار المراجعة
          </div>
        </div>
        
        <div className="flex gap-4">
          <div className="relative w-64 md:w-80">
            <MdSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <input 
              type="text" 
              placeholder="بحث عن معلم..." 
              className="w-full pr-12 pl-4 py-3.5 bg-white border border-gray-100 rounded-2xl shadow-sm outline-none focus:ring-4 focus:ring-emerald-50 transition-all text-sm font-medium"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className="p-3.5 bg-white border border-gray-100 rounded-2xl text-gray-400 hover:text-emerald-700 transition-all shadow-sm">
            <MdFilterList size={22} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* 📋 Sidebar: Vetting Guidelines */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-emerald-900 p-8 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
            <div className="relative z-10">
              <div className="w-16 h-16 bg-emerald-800 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform shadow-xl shadow-emerald-950/20">
                <MdVerifiedUser />
              </div>
              <h3 className="text-2xl font-black mb-4">نظام الفحص</h3>
              <p className="text-xs font-medium text-emerald-200 leading-relaxed mb-8">جميع طلبات المعلمين الجدد تكون مجمدة تلقائياً حتى يتم اعتمادها من قبل الإدارة.</p>
              
              <div className="bg-emerald-800/50 p-6 rounded-2xl text-xs font-bold leading-relaxed mb-8 border border-emerald-700/50">
                <span className="text-white block mb-2 underline">تنبيه هام:</span>
                المعلم لا يمتلك أي صلاحيات للوصول إلى بيانات الطلاب أو الحلقات إلا بعد إتمام عملية المراجعة والموافقة.
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                  <MdCheckCircle className="text-emerald-400" />
                  خطوات التوثيق
                </h4>
                <ul className="text-[10px] font-black text-emerald-300 space-y-3 pr-4 border-r border-emerald-800">
                  <li className="flex items-center gap-2">1. مراجعة المؤهل الأكاديمي</li>
                  <li className="flex items-center gap-2">2. التحقق من سنوات الخبرة</li>
                  <li className="flex items-center gap-2">3. مراجعة السيرة الذاتية (CV)</li>
                  <li className="flex items-center gap-2">4. التأكد من بيانات التواصل</li>
                </ul>
              </div>
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-emerald-800 rounded-full blur-[80px] opacity-50" />
          </div>
        </div>

        {/* 🏛️ Main Content: Requests Grid */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {requests.filter(req => 
              req.name.toLowerCase().includes(search.toLowerCase()) || 
              req.specialty.toLowerCase().includes(search.toLowerCase())
            ).length > 0 ? (
              requests.filter(req => 
                req.name.toLowerCase().includes(search.toLowerCase()) || 
                req.specialty.toLowerCase().includes(search.toLowerCase())
              ).map((req) => (
                <div key={req.id} className="group bg-white p-8 rounded-[3rem] shadow-sm border border-gray-100 hover:shadow-2xl transition-all relative overflow-hidden flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 bg-emerald-50 text-emerald-700 rounded-2xl flex items-center justify-center font-black text-2xl group-hover:scale-110 transition-transform shadow-sm">{req.avatar}</div>
                      <div>
                        <h3 className="text-xl font-black text-gray-900 mb-0.5 group-hover:text-emerald-700 transition-colors">{req.name}</h3>
                        <p className="text-xs font-bold text-gray-400">التخصص: {req.specialty}</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-gray-50 text-gray-400 text-[9px] font-black uppercase tracking-widest rounded-lg">{req.status}</span>
                  </div>

                  <div className="space-y-4 mb-10 mt-2 py-6 border-y border-gray-50 flex-1">
                    <VettingDetail icon={<MdCalendarToday />} label="تاريخ الطلب" val={req.date} />
                    <VettingDetail icon={<MdSchool />} label="سنوات الخبرة" val={req.experience} />
                    <VettingDetail icon={<MdEmail />} label="البريد الإلكتروني" val={req.email} />
                  </div>

                  <div className="space-y-3">
                    <button className="w-full py-4 bg-emerald-50 text-emerald-700 rounded-2xl font-black text-sm flex items-center justify-center gap-2 hover:bg-emerald-100 transition-all">
                      <MdVisibility size={20} />
                      عرض الملف الشخصي الكامل
                    </button>
                    <div className="flex gap-3">
                      <button className="flex-1 py-4 bg-white border border-gray-100 text-gray-500 rounded-2xl font-black text-xs hover:bg-gray-50 transition-all flex items-center justify-center gap-1.5 shadow-sm">
                        <MdDescription size={18} className="text-emerald-600" />
                        عرض CV
                      </button>
                      <button className="flex-1 py-4 bg-red-50 text-red-600 rounded-2xl font-black text-xs hover:bg-red-100 transition-all flex items-center justify-center gap-1.5 shadow-sm">
                        <MdClose size={18} />
                        رفض الطلب
                      </button>
                      <button className="flex-1 py-4 bg-emerald-700 text-white rounded-2xl font-black text-xs hover:bg-emerald-800 transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-100">
                        <MdCheck size={18} />
                        قبول
                      </button>
                    </div>
                  </div>
                  
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50/50 rounded-full -translate-x-16 -translate-y-16 blur-3xl opacity-50" />
                </div>
              ))
            ) : (
              <div className="col-span-2 py-20 text-center bg-white rounded-[3rem] border border-gray-100">
                <p className="text-gray-400 font-bold text-lg">لا توجد طلبات تطابق هذا البحث.</p>
              </div>
            )}
          </div>


          <div className="mt-12 text-center">
            <button className="px-10 py-5 bg-white border border-gray-100 rounded-[2rem] text-sm font-black text-gray-400 hover:text-emerald-700 hover:bg-emerald-50 transition-all shadow-sm flex items-center gap-3 mx-auto">
              عرض المزيد من الطلبات
              <MdKeyboardArrowLeft size={24} />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

const VettingDetail = ({ icon, label, val }) => (
  <div className="flex items-center gap-3 text-sm">
    <div className="text-emerald-600 flex-shrink-0">{icon}</div>
    <span className="text-gray-400 font-bold min-w-[100px]">{label}:</span>
    <span className="text-gray-900 font-black">{val}</span>
  </div>
);

export default ReviewTeachers;
