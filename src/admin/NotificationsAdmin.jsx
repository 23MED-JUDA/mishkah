import React, { useState } from 'react';
import { 
  MdNotificationsActive, MdSend, MdFilterList, MdSearch, 
  MdError, MdInfo, MdCheckCircle, MdPerson,
  MdMarkChatUnread, MdHistory, MdHeadsetMic, MdKeyboardArrowLeft
} from 'react-icons/md';

function NotificationsAdmin() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState('all');

  const alerts = [
    { id: 1, type: 'error', title: 'فشل في معالجة الدفعة المالية', desc: 'تعذر إرسال المستحقات المالية لـ 3 معلمين بسبب خطأ في بيانات الحساب البنكي. يرجى المراجعة الفورية.', time: 'منذ 15 دقيقة', color: 'red' },
    { id: 2, type: 'info', title: 'تحديث النظام المجدول', desc: 'سيبدأ تحديث النظام القادم يوم الأحد الساعة 2:00 صباحاً. سيتم إخطار جميع المستخدمين عبر البريد الإلكتروني.', time: 'منذ ساعتين', color: 'blue' },
    { id: 3, type: 'msg', title: 'رسالة من المعلمة: سارة خالد', desc: 'أواجه مشكلة في إضافة طالب جديد إلى حلقة "نور البيان". يبدو أن النظام يظهر رسالة خطأ عند الضغط على حفظ.', time: 'منذ 4 ساعات', color: 'emerald', avatar: 'S' },
    { id: 4, type: 'success', title: 'تفعيل حسابات طلاب جدد', desc: 'تمت مراجعة وقبول 5 طلبات تسجيل جديدة بنجاح وإرسال بيانات الدخول لأولياء الأمور.', time: 'أمس', color: 'emerald' },
  ];

  return (
    <main className="flex-1 flex flex-col px-4 md:px-8 py-6 bg-gray-50/50" dir="rtl">
      
      {/* 🟢 Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div className="text-right">
          <h1 className="text-3xl font-black text-gray-900 mb-2">مركز التواصل والإشعارات</h1>
          <p className="text-gray-500 font-medium">إدارة تنبيهات النظام، رسائل المستخدمين، والتواصل الجماعي المباشر</p>
        </div>
        
        <div className="w-full md:w-96 relative">
          <MdSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
          <input 
            type="text" 
            placeholder="البحث في سجل التنبيهات..." 
            className="w-full pr-12 pl-4 py-3.5 bg-white border border-gray-100 rounded-2xl shadow-sm outline-none focus:ring-4 focus:ring-emerald-50 transition-all text-sm font-medium"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* 🔔 Notifications Feed */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-2 px-4">
            <div className="flex bg-gray-100 p-1.5 rounded-2xl border border-gray-100 shadow-sm w-full md:w-auto overflow-x-auto">
              {['الكل', 'تنبيهات النظام', 'رسائل المعلمين', 'أخرى'].map((tab, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveTab(['all', 'system', 'teachers', 'other'][i])}
                  className={`px-6 py-2.5 text-xs font-black rounded-xl transition-all whitespace-nowrap
                    ${(activeTab === 'all' && i === 0) || (activeTab === 'system' && i === 1) || (activeTab === 'teachers' && i === 2) || (activeTab === 'other' && i === 3)
                      ? 'bg-emerald-700 text-white shadow-lg shadow-emerald-100' : 'text-gray-400 hover:bg-white'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <button className="p-3 bg-white rounded-2xl text-gray-400 hover:text-emerald-700 transition-all shadow-sm border border-gray-100"><MdFilterList size={22} /></button>
          </div>

          <div className="space-y-4">
            {alerts.map((alert) => (
              <div key={alert.id} className="group bg-white p-6 md:p-8 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
                
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0 transition-transform group-hover:scale-110 shadow-sm
                  ${alert.color === 'red' ? 'bg-red-50 text-red-600' : 
                    alert.color === 'blue' ? 'bg-blue-50 text-blue-600' : 
                    alert.avatar ? 'bg-gray-50 text-emerald-700' : 'bg-emerald-50 text-emerald-700'}`}>
                  {alert.avatar ? <span className="font-black text-xl">{alert.avatar}</span> : 
                    alert.type === 'error' ? <MdError /> : alert.type === 'info' ? <MdInfo /> : <MdNotificationsActive />}
                </div>

                <div className="flex-1 text-center md:text-right">
                  <div className="flex flex-col md:flex-row md:items-center justify-center md:justify-start gap-2 mb-2">
                    <h4 className={`text-lg font-black ${alert.color === 'red' ? 'text-red-700' : 'text-gray-900'}`}>{alert.title}</h4>
                    <span className="text-[10px] font-black text-gray-400 bg-gray-50 px-2 py-0.5 rounded-md">{alert.time}</span>
                  </div>
                  <p className="text-sm font-medium text-gray-500 leading-relaxed">{alert.desc}</p>
                </div>

                <div className="flex gap-2">
                  {alert.type === 'msg' && (
                    <button className="px-6 py-3 bg-emerald-700 text-white rounded-2xl font-black text-xs shadow-lg shadow-emerald-100 hover:bg-emerald-800 transition-all">الرد الآن</button>
                  )}
                  <button className="p-3 bg-gray-50 rounded-2xl text-gray-400 hover:text-emerald-700 transition-all shadow-sm border border-gray-100">
                    <MdKeyboardArrowLeft size={22} className="rotate-180" />
                  </button>
                </div>
                
                <div className={`absolute top-0 right-0 w-1.5 h-full ${alert.color === 'red' ? 'bg-red-500' : alert.color === 'blue' ? 'bg-blue-500' : 'bg-emerald-500'}`} />
              </div>
            ))}
          </div>

          <div className="pt-8 text-center">
            <button className="px-8 py-4 bg-white border border-gray-100 rounded-3xl text-sm font-black text-gray-400 hover:text-emerald-700 hover:bg-emerald-50 transition-all shadow-sm flex items-center gap-2 mx-auto">
              <MdHistory size={20} />
              عرض سجل الإشعارات السابق
            </button>
          </div>
        </div>

        {/* 🚀 Sidebar Actions */}
        <div className="space-y-6">
          <div className="bg-emerald-900 p-8 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group text-center">
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 bg-emerald-800 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-xl shadow-emerald-950/20 group-hover:scale-110 transition-transform">
                <MdSend className="rotate-[-30deg]" />
              </div>
              <h3 className="text-2xl font-black mb-2">إرسال تنبيه جديد</h3>
              <p className="text-sm font-medium text-emerald-200 leading-relaxed mb-8 px-4">قم بإرسال رسائل فورية أو تنبيهات مجدولة لجميع المستخدمين أو فئات محددة.</p>
              <button className="w-full py-4 bg-white text-emerald-900 rounded-[2rem] font-black shadow-xl hover:scale-105 transition-all">بدء الإرسال الجماعي</button>
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-emerald-800 rounded-full blur-[80px] opacity-50" />
          </div>

          <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-gray-100">
            <h3 className="text-lg font-black text-gray-900 mb-8 text-center">إحصائيات التواصل اليومية</h3>
            <div className="space-y-6">
              <StatRow icon={<MdMarkChatUnread />} label="رسائل غير مقروءة" val="12" color="emerald" />
              <StatRow icon={<MdNotificationsActive />} label="تنبيهات النظام" val="4" color="blue" />
            </div>
          </div>

          <div className="bg-amber-50 p-8 rounded-[3rem] border border-amber-100 group cursor-pointer hover:shadow-xl transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-amber-400 text-amber-950 rounded-2xl flex items-center justify-center text-2xl transition-transform group-hover:rotate-12 shadow-lg shadow-amber-200">
                <MdHeadsetMic />
              </div>
              <h4 className="text-lg font-black text-amber-950">طلبات الدعم</h4>
            </div>
            <p className="text-xs font-bold text-amber-900/60 leading-relaxed mb-6">يوجد حالياً <span className="text-amber-900">3 طلبات</span> دعم فني بحاجة لمراجعتك الفورية.</p>
            <button className="text-amber-900 font-black text-xs flex items-center gap-1 hover:underline">
              انتقل لمركز الدعم
              <MdKeyboardArrowLeft size={18} />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

const StatRow = ({ icon, label, val, color }) => {
  const colors = {
    emerald: "bg-emerald-50 text-emerald-700",
    blue: "bg-blue-50 text-blue-700"
  };
  return (
    <div className="flex items-center justify-between group">
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl transition-all group-hover:scale-110 shadow-sm ${colors[color]}`}>{icon}</div>
        <span className="font-bold text-gray-400 text-sm">{label}</span>
      </div>
      <span className="text-xl font-black text-gray-900">{val}</span>
    </div>
  );
};

export default NotificationsAdmin;
