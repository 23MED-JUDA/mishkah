import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../components/AuthProvider";
import { 
  MdPerson, MdPhone, MdEmail, MdSchool, 
  MdWork, MdCloudUpload, MdEdit, MdCheckCircle,
  MdOutlineDescription, MdHistoryEdu
} from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";

function ContactTeacher() {
  const { user, login } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const [isEditing, setIsEditing] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [cvName, setCvName] = useState("CV_Teacher_Mishkat.pdf");

  useEffect(() => {
    if (user) {
      reset(user);
    }
  }, [user, reset]);

  const onSubmit = (data) => {
    const updatedUser = { ...user, ...data };
    login(updatedUser);
    setIsEditing(false);
    alert("تم تحديث بيانات السيرة الذاتية بنجاح!");
  };

  return (
    <main className="flex-1 flex flex-col px-4 md:px-8 py-6 bg-gray-50/50" dir="rtl">
      
      {/* 🟢 Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div className="text-right">
          <h1 className="text-3xl font-black text-gray-900 mb-2">السيرة الذاتية والملف الشخصي</h1>
          <p className="text-gray-500 font-medium">إدارة ملفك المهني وسيرتك الذاتية في منصة مشكاة</p>
        </div>
        
        {!isEditing && (
          <button 
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 px-8 py-3 bg-emerald-700 text-white rounded-2xl font-black shadow-lg shadow-emerald-100 hover:bg-emerald-800 transition-all"
          >
            <MdEdit size={20} />
            تعديل البيانات
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* 👤 Left Sidebar: Avatar & Quick Actions */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-gray-100 text-center relative overflow-hidden group">
            <div className="relative inline-block mb-6">
              <div className="w-32 h-32 bg-emerald-100 rounded-[2.5rem] flex items-center justify-center overflow-hidden border-4 border-white shadow-xl">
                {imagePreview ? (
                  <img src={imagePreview} className="w-full h-full object-cover" alt="teacher" />
                ) : (
                  <MdPerson className="text-emerald-700 text-6xl" />
                )}
              </div>
              {isEditing && (
                <label className="absolute -bottom-2 -right-2 w-10 h-10 bg-emerald-700 text-white rounded-xl flex items-center justify-center cursor-pointer shadow-lg hover:scale-110 transition-transform">
                  <MdCloudUpload size={20} />
                  <input type="file" className="hidden" onChange={(e) => {
                    if (e.target.files[0]) setImagePreview(URL.createObjectURL(e.target.files[0]));
                  }} />
                </label>
              )}
            </div>
            
            <h2 className="text-2xl font-black text-gray-900 mb-1">{user?.name || "د. أحمد محمد"}</h2>
            <p className="text-emerald-600 font-black text-sm mb-8">{user?.specialty || "معلم قراءات وتجويد"}</p>
            
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center justify-between mb-4">
              <span className="text-emerald-700 font-black">نشط</span>
              <span className="text-xs font-bold text-emerald-600/60 uppercase">حالة الحساب</span>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full -translate-x-16 -translate-y-16 blur-3xl opacity-50" />
          </div>

          <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-gray-100">
            <h3 className="text-lg font-black text-gray-800 mb-6 flex items-center gap-2">
              <MdOutlineDescription className="text-emerald-600" />
              ملف السيرة الذاتية (CV)
            </h3>
            <div className={`p-8 rounded-[2rem] border-2 border-dashed transition-all flex flex-col items-center justify-center text-center
              ${isEditing ? 'bg-gray-50 border-emerald-200' : 'bg-gray-50/50 border-gray-100'}`}>
              <MdHistoryEdu size={40} className="text-gray-300 mb-4" />
              <p className="text-sm font-black text-gray-800 mb-1">{cvName}</p>
              <p className="text-[10px] text-gray-400 font-bold mb-6">PDF (أقصى مساحة 5MB)</p>
              {isEditing ? (
                <label className="px-6 py-2 bg-emerald-100 text-emerald-700 rounded-xl text-xs font-black cursor-pointer hover:bg-emerald-200 transition-colors">
                  رفع ملف جديد
                  <input type="file" className="hidden" onChange={(e) => setCvName(e.target.files[0]?.name)} />
                </label>
              ) : (
                <button className="text-emerald-700 font-black text-xs hover:underline">تحميل الملف</button>
              )}
            </div>
          </div>
        </div>

        {/* 📝 Right: Detailed Info Form/View */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-700">
                <MdHistoryEdu size={28} />
              </div>
              <h2 className="text-2xl font-black text-gray-800">بيانات السيرة الذاتية</h2>
            </div>

            {isEditing ? (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <InputGroup label="الاسم الكامل" icon={<MdPerson />} register={register("name")} />
                  <InputGroup label="رقم الهاتف" icon={<MdPhone />} register={register("phone")} />
                  <InputGroup label="البريد الإلكتروني" icon={<MdEmail />} register={register("email")} />
                  <InputGroup label="سنوات الخبرة" icon={<MdWork />} register={register("experience")} type="number" />
                  <InputGroup label="التخصص الأكاديمي" icon={<MdSchool />} register={register("specialty")} />
                  <InputGroup label="المؤهل التعليمي" icon={<FaGraduationCap />} register={register("education")} />
                </div>
                <div className="flex flex-col md:flex-row gap-4 pt-6 border-t border-gray-50">
                  <button type="submit" className="flex-1 py-4 bg-emerald-700 text-white rounded-2xl font-black shadow-xl shadow-emerald-100 hover:bg-emerald-800 transition-all flex items-center justify-center gap-3">
                    <MdCheckCircle size={20} />
                    حفظ كافة التغييرات
                  </button>
                  <button type="button" onClick={() => setIsEditing(false)} className="px-10 py-4 bg-gray-50 text-gray-500 rounded-2xl font-black hover:bg-gray-100 transition-all">
                    إلغاء
                  </button>
                </div>
              </form>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <DataCard label="الاسم الكامل" value={user?.name} icon={<MdPerson />} />
                <DataCard label="رقم الهاتف" value={user?.phone} icon={<MdPhone />} />
                <DataCard label="البريد الإلكتروني" value={user?.email} icon={<MdEmail />} />
                <DataCard label="سنوات الخبرة" value={`${user?.experience || 0} سنوات`} icon={<MdWork />} highlight />
                <DataCard label="التخصص الأكاديمي" value={user?.specialty} icon={<MdSchool />} />
                <DataCard label="المؤهل التعليمي" value={user?.education} icon={<FaGraduationCap />} />
              </div>
            )}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50/50 rounded-full -translate-x-16 -translate-y-16 blur-3xl" />
          </div>

          <div className="bg-amber-50 p-8 rounded-[3rem] border border-amber-100 flex flex-col md:flex-row items-center gap-6 text-center md:text-right">
            <div className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center text-amber-900 shadow-lg shadow-amber-200">
              <MdOutlineDescription size={32} />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-black text-amber-900 mb-1">بياناتك تظهر للطلاب</h4>
              <p className="text-sm font-bold text-amber-800/60 leading-relaxed">يرجى التأكد من صحة بياناتك العلمية والأكاديمية، حيث أنها تظهر في ملفك الشخصي المتاح للطلاب وأولياء الأمور للتقديم في حلقاتك.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const InputGroup = ({ label, icon, register, type = "text" }) => (
  <div className="space-y-2 text-right">
    <label className="text-xs font-black text-gray-400 mr-2 flex items-center gap-1 justify-end uppercase tracking-wider">
      {label}
      <span className="text-emerald-600">{icon}</span>
    </label>
    <input 
      type={type}
      {...register}
      className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500/20 font-bold outline-none transition-all"
    />
  </div>
);

const DataCard = ({ label, value, icon, highlight }) => (
  <div className={`p-6 rounded-[2rem] border transition-all flex items-center justify-between group hover:shadow-lg
    ${highlight ? 'bg-emerald-50 border-emerald-100' : 'bg-gray-50 border-gray-50'}`}>
    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl transition-transform group-hover:scale-110
      ${highlight ? 'bg-white text-emerald-700 shadow-sm' : 'bg-white text-gray-400 shadow-sm'}`}>
      {icon}
    </div>
    <div className="text-right">
      <p className="text-[10px] font-black text-gray-400 mb-1 uppercase tracking-widest">{label}</p>
      <h4 className={`text-lg font-black ${highlight ? 'text-emerald-900' : 'text-gray-800'}`}>{value || "غير محدد"}</h4>
    </div>
  </div>
);

export default ContactTeacher;