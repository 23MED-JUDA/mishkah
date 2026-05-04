import React from 'react'
import { 
  MdNotificationsActive, MdCheckCircle, MdError, 
  MdAnnouncement, MdReceipt, MdAssignment,
  MdFilterList, MdHistory, MdKeyboardArrowLeft
} from "react-icons/md";

function Notifications() {
  const alerts = [
    { id: 1, type: 'report', title: 'تقرير الحفظ الأسبوعي - أحمد محمد', desc: 'تم تحديث تقرير الأداء الخاص بالطالب أحمد، لقد أتم حفظ سورة الملك بتقدير ممتاز.', time: 'منذ ساعتين', icon: <MdAssignment />, color: 'emerald' },
    { id: 2, type: 'absence', title: 'تنبيه غياب غير مبرر', desc: 'تغيبت الطالبة سارة محمد عن حلقة التجويد الصباحية لهذا اليوم دون إخطار مسبق.', time: '10:30 ص', icon: <MdError />, color: 'red' },
    { id: 3, type: 'promo', title: 'إعلان: مسابقة المشكاة السنوية', desc: 'تعلن إدارة مشكاة عن بدء التسجيل في المسابقة السنوية لحفظ القرآن الكريم وجوائز كبرى للفائزين.', time: 'أمس', icon: <MdAnnouncement />, color: 'amber' },
    { id: 4, type: 'payment', title: 'تأكيد عملية دفع بنجاح', desc: 'تم استلام دفعة الاشتراك الشهري بنجاح. رقم الفاتورة المرجعي: INV-9921#.', time: 'أمس', icon: <MdReceipt />, color: 'blue' },
  ];

  return (
    <main className="flex-1 flex flex-col px-4 md:px-8 py-6 bg-gray-50/50" dir="rtl">
      
      {/* 🟢 Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div className="text-right">
          <h1 className="text-3xl font-black text-gray-900 mb-2">مركز التنبيهات</h1>
          <p className="text-gray-500 font-medium">تابع آخر التحديثات المتعلقة بمسيرة أبنائك التعليمية والإعلانات الإدارية</p>
        </div>
        
        <button className="flex items-center gap-2 px-6 py-2.5 bg-emerald-700 text-white rounded-2xl font-black shadow-lg shadow-emerald-100 hover:bg-emerald-800 transition-all">
          <MdCheckCircle size={20} />
          تحديد الكل كمقروء
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* 📋 Notification Filters & Stats */}
        <div className="lg:col-span-1 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <StatSmall label="تقارير جديدة" val="12" icon={<MdAssignment />} color="emerald" />
            <StatSmall label="تنبيهات غياب" val="3" icon={<MdError />} color="red" />
            <StatSmall label="إعلانات الإدارة" val="5" icon={<MdAnnouncement />} color="amber" />
            <StatSmall label="الاشتراكات" val="2" icon={<MdReceipt />} color="blue" />
          </div>

          <div className="bg-emerald-900 p-8 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
            <div className="relative z-10">
              <h4 className="text-lg font-black mb-1">مستوى الالتزام</h4>
              <p className="text-[10px] text-emerald-300 font-bold mb-6 uppercase tracking-widest">معدل حضور الأبناء</p>
              <div className="text-4xl font-black mb-4">94%</div>
              <div className="w-full h-2 bg-emerald-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-400 rounded-full" style={{ width: '94%' }} />
              </div>
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-800 rounded-full blur-3xl opacity-30" />
          </div>
        </div>

        {/* 🔔 Notifications List */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex items-center justify-between px-4 mb-2">
            <h3 className="text-xl font-black text-gray-800 flex items-center gap-3">
              <span className="w-2 h-8 bg-emerald-600 rounded-full" />
              أحدث التنبيهات
            </h3>
            <button className="p-2 bg-white rounded-xl shadow-sm text-gray-400 hover:text-emerald-700 transition-all border border-gray-50"><MdFilterList size={24} /></button>
          </div>

          <div className="space-y-4">
            {alerts.map((alert) => (
              <div key={alert.id} className="group bg-white p-6 md:p-8 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
                
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0 transition-transform group-hover:scale-110
                  ${alert.color === 'emerald' ? 'bg-emerald-50 text-emerald-600' : 
                    alert.color === 'red' ? 'bg-red-50 text-red-600' : 
                    alert.color === 'amber' ? 'bg-amber-50 text-amber-600' : 'bg-blue-50 text-blue-600'}`}>
                  {alert.icon}
                </div>

                <div className="flex-1 text-center md:text-right">
                  <div className="flex flex-col md:flex-row md:items-center justify-center md:justify-start gap-2 mb-2">
                    <h4 className={`text-lg font-black ${alert.color === 'red' ? 'text-red-700' : 'text-gray-900'}`}>{alert.title}</h4>
                    <span className="text-[10px] font-black text-gray-400 bg-gray-50 px-2 py-0.5 rounded-md">{alert.time}</span>
                  </div>
                  <p className="text-sm font-medium text-gray-500 leading-relaxed">{alert.desc}</p>
                </div>

                <button className={`px-8 py-3 rounded-2xl font-black text-xs transition-all flex items-center gap-2
                  ${alert.color === 'emerald' ? 'bg-emerald-700 text-white shadow-lg shadow-emerald-100 hover:bg-emerald-800' : 
                    alert.color === 'red' ? 'bg-red-700 text-white shadow-lg shadow-red-100 hover:bg-red-800' : 
                    'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}>
                  عرض التفاصيل
                  <MdKeyboardArrowLeft size={18} />
                </button>
                
                {/* Visual Accent */}
                <div className={`absolute top-0 right-0 w-1 h-full ${alert.color === 'emerald' ? 'bg-emerald-500' : alert.color === 'red' ? 'bg-red-500' : alert.color === 'amber' ? 'bg-amber-500' : 'bg-blue-500'}`} />
              </div>
            ))}
          </div>

          <div className="pt-10 text-center">
            <button className="px-10 py-4 bg-white border border-gray-100 rounded-3xl text-sm font-black text-gray-400 hover:text-emerald-700 hover:bg-emerald-50 transition-all shadow-sm flex items-center gap-2 mx-auto">
              <MdHistory size={20} />
              عرض كافة الإشعارات التاريخية
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

const StatSmall = ({ label, val, icon, color }) => {
  const colors = {
    emerald: "bg-emerald-50 text-emerald-700",
    red: "bg-red-50 text-red-700",
    amber: "bg-amber-50 text-amber-700",
    blue: "bg-blue-50 text-blue-700"
  };
  return (
    <div className="bg-white p-5 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center group hover:shadow-lg transition-all">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-3 transition-transform group-hover:scale-110 ${colors[color]}`}>{icon}</div>
      <div className="text-xl font-black text-gray-900 mb-1">{val}</div>
      <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-tight">{label}</p>
    </div>
  );
};

export default Notifications