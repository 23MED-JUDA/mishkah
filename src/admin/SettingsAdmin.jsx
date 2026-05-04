import React, { useState } from 'react';
import { 
  MdSettings, MdSecurity, MdPeople, MdDns, 
  MdToggleOn, MdToggleOff, MdCheckCircle, MdErrorOutline,
  MdStorage, MdMemory, MdCloudDone, MdCloudQueue,
  MdAdd, MdEdit, MdKeyboardArrowLeft, MdAdminPanelSettings
} from 'react-icons/md';
import { FaGoogle, FaSlack, FaWordpress } from 'react-icons/fa';

function SettingsAdmin() {
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  return (
    <main className="flex-1 flex flex-col px-4 md:px-8 py-6 bg-gray-50/50" dir="rtl">
      
      {/* 🟢 Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div className="text-right">
          <h1 className="text-3xl font-black text-gray-900 mb-2">إعدادات النظام</h1>
          <p className="text-gray-500 font-medium">التحكم المركزي في تكوينات الخادم، الصلاحيات، والتكاملات التقنية</p>
        </div>
        
        <button className="flex items-center gap-2 px-8 py-3 bg-emerald-700 text-white rounded-2xl font-black shadow-lg shadow-emerald-100 hover:bg-emerald-800 transition-all">
          <MdCloudDone size={20} />
          حفظ كافة التغييرات
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* ⚙️ General Configuration */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 relative overflow-hidden">
            <h3 className="text-xl font-black text-gray-900 mb-8 flex items-center gap-3">
              <MdSettings className="text-emerald-600" />
              الإعدادات العامة للمنصة
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <SettingInput label="اسم المؤسسة التعليمية" val="أكاديمية مشكاة للعلوم الشرعية" />
              <SettingInput label="النطاق الرئيسي (Domain)" val="mishkah.edu.sa" dir="ltr" />
              <SettingSelect label="المنطقة الزمنية" options={["(GMT+03:00) الرياض", "(GMT+02:00) القاهرة"]} />
              <SettingInput label="البريد الإلكتروني التقني" val="admin@mishkah.edu.sa" dir="ltr" />
            </div>

            <div className={`p-8 rounded-[2rem] border-2 transition-all flex items-center justify-between group
              ${maintenanceMode ? 'bg-red-50 border-red-200' : 'bg-emerald-50 border-emerald-200'}`}>
              <div className="text-right">
                <h4 className={`text-lg font-black mb-1 ${maintenanceMode ? 'text-red-900' : 'text-emerald-900'}`}>وضع الصيانة (Maintenance Mode)</h4>
                <p className={`text-xs font-bold ${maintenanceMode ? 'text-red-700/60' : 'text-emerald-700/60'}`}>عند التفعيل، سيتم إيقاف الواجهة الأمامية وعرض رسالة "تحديث مجدول" للمستخدمين.</p>
              </div>
              <button onClick={() => setMaintenanceMode(!maintenanceMode)} className="text-5xl transition-transform active:scale-95">
                {maintenanceMode ? <MdToggleOn className="text-red-600" /> : <MdToggleOff className="text-gray-300" />}
              </button>
            </div>
          </div>

          {/* 👥 Roles & Permissions */}
          <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-xl font-black text-gray-900 flex items-center gap-3">
                <MdAdminPanelSettings className="text-emerald-600" size={28} />
                الأدوار والصلاحيات
              </h3>
              <button className="flex items-center gap-2 text-emerald-700 font-black text-sm hover:underline">
                <MdAdd size={20} />
                إضافة دور جديد
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <RoleCard title="المدير العام" level="إدارة كاملة" desc="صلاحيات مطلقة للتحكم في كافة موارد النظام والبيانات المالية." color="emerald" />
              <RoleCard title="المعلم" level="إدارة محتوى" desc="إضافة الحلقات، تقييم الطلاب، ورفع المواد التعليمية والمناهج." color="blue" />
              <RoleCard title="الطالب" level="وصول محدود" desc="عرض الدروس، المشاركة في الحلقات، وعرض الملف الشخصي والنتائج." color="gray" />
            </div>
          </div>
        </div>

        {/* 🛰️ Infrastructure & Security */}
        <div className="space-y-8">
          <div className="bg-emerald-900 p-8 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-xl font-black mb-6 flex items-center gap-3">
                <MdDns className="text-emerald-400" />
                حالة الخادم والبنية التحتية
              </h3>
              <div className="space-y-8">
                <ServerMetric label="استهلاك المعالج (CPU)" val="24%" progress={24} icon={<MdMemory />} />
                <ServerMetric label="الذاكرة العشوائية (RAM)" val="1.8 / 3.2 GB" progress={56} icon={<MdStorage />} />
              </div>
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-800 rounded-full blur-3xl opacity-30 group-hover:scale-125 transition-transform duration-700" />
          </div>

          <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-gray-100">
            <h3 className="text-lg font-black text-gray-900 mb-8 flex items-center gap-3">
              <MdSecurity className="text-red-600" />
              النشاطات الأمنية الأخيرة
            </h3>
            <div className="space-y-6">
              <SecurityLog status="نجاح" title="دخول المدير العام" meta="IP: 192.168.1.1 • منذ دقيقتين" success />
              <SecurityLog status="فشل" title="محاولة دخول مجهولة" meta="IP: 45.12.33.102 • منذ ساعة" />
            </div>
            <button className="w-full mt-8 py-3 text-xs font-black text-gray-400 hover:text-emerald-700 transition-all text-center border-t border-gray-50 pt-6">عرض سجل الأمان الكامل</button>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest px-4 mb-2">التكاملات البرمجية</h3>
            <IntegrationRow icon={<FaGoogle />} name="Google Workspace" status="متصل" color="blue" />
            <IntegrationRow icon={<FaSlack />} name="Slack Notify" status="غير مفعل" color="purple" disabled />
          </div>
        </div>
      </div>
    </main>
  );
}

const SettingInput = ({ label, val, dir }) => (
  <div className="space-y-2 text-right">
    <label className="text-xs font-black text-gray-400 uppercase tracking-widest mr-2">{label}</label>
    <input 
      type="text" 
      defaultValue={val} 
      dir={dir}
      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-4 focus:ring-emerald-50 transition-all font-bold text-gray-700"
    />
  </div>
);

const SettingSelect = ({ label, options }) => (
  <div className="space-y-2 text-right">
    <label className="text-xs font-black text-gray-400 uppercase tracking-widest mr-2">{label}</label>
    <select className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-4 focus:ring-emerald-50 transition-all font-bold text-gray-700">
      {options.map((opt, i) => <option key={i}>{opt}</option>)}
    </select>
  </div>
);

const RoleCard = ({ title, level, desc, color }) => {
  const colors = {
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-100",
    blue: "bg-blue-50 text-blue-700 border-blue-100",
    gray: "bg-gray-50 text-gray-700 border-gray-100"
  };
  return (
    <div className={`p-6 rounded-[2.5rem] border-2 transition-all hover:shadow-xl group cursor-pointer ${colors[color]}`}>
      <div className="flex justify-between items-start mb-4">
        <h4 className="font-black text-lg">{title}</h4>
        <span className="text-[9px] font-black uppercase tracking-widest opacity-60">{level}</span>
      </div>
      <p className="text-[10px] font-bold leading-relaxed mb-6 opacity-70">{desc}</p>
      <div className="flex justify-end">
        <button className="p-2 bg-white/50 rounded-xl hover:bg-white transition-all"><MdEdit size={16} /></button>
      </div>
    </div>
  );
};

const ServerMetric = ({ label, val, progress, icon }) => (
  <div className="space-y-3">
    <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-emerald-300">
      <div className="flex items-center gap-2">
        {icon}
        <span>{label}</span>
      </div>
      <span>{val}</span>
    </div>
    <div className="h-1.5 w-full bg-emerald-800 rounded-full overflow-hidden">
      <div className="h-full bg-emerald-400 rounded-full transition-all duration-1000" style={{ width: `${progress}%` }} />
    </div>
  </div>
);

const SecurityLog = ({ status, title, meta, success }) => (
  <div className="flex gap-4 group">
    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0 transition-transform group-hover:scale-110 shadow-sm
      ${success ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
      {success ? <MdCheckCircle /> : <MdErrorOutline />}
    </div>
    <div>
      <h4 className="text-sm font-black text-gray-900 mb-0.5">{title}</h4>
      <p className="text-[10px] font-bold text-gray-400">{meta}</p>
    </div>
  </div>
);

const IntegrationRow = ({ icon, name, status, color, disabled }) => {
  const colors = {
    blue: "text-blue-500 bg-blue-50",
    purple: "text-purple-500 bg-purple-50"
  };
  return (
    <div className={`p-4 bg-white rounded-[2rem] border border-gray-100 flex items-center justify-between group transition-all hover:shadow-lg ${disabled ? 'opacity-50' : ''}`}>
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl transition-transform group-hover:rotate-12 ${colors[color]}`}>{icon}</div>
        <div>
          <h4 className="text-sm font-black text-gray-900">{name}</h4>
          <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{status}</p>
        </div>
      </div>
      <button className={`p-2 rounded-xl text-gray-400 hover:text-emerald-700 transition-all ${disabled ? 'hover:bg-gray-50' : 'bg-emerald-50 text-emerald-700'}`}>
        <MdKeyboardArrowLeft size={24} className="rotate-180" />
      </button>
    </div>
  );
};

export default SettingsAdmin;
