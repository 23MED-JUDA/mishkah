import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../components/AuthProvider";
import { 
  MdNotificationsNone, MdSettings, MdPerson, 
  MdPhone, MdEmail, MdMale, MdFemale, MdCake,
  MdCheckCircle, MdEdit, MdSecurity
} from "react-icons/md";

function ProfileParent() {
  const { user, login } = useContext(AuthContext);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (user) {
      reset(user);
    }
  }, [user, reset]);

  const onSubmit = (data) => {
    const updatedUser = { ...user, ...data };
    login(updatedUser);
    setIsEditing(false);
    alert("تم تحديث ملفك الشخصي بنجاح!");
  };

  return (
    <main className="flex-1 flex flex-col px-4 md:px-8 py-6 bg-gray-50/50" dir="rtl">
      
      {/* 🟢 Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div className="text-right">
          <h1 className="text-3xl font-black text-gray-900 mb-2">الملف الشخصي</h1>
          <p className="text-gray-500 font-medium">إدارة بيانات حسابك وتفضيلات التواصل في منصة مشكاة</p>
        </div>
        
        <div className="flex gap-3">
          <button className="p-3 bg-white border border-gray-100 rounded-2xl text-gray-400 hover:text-emerald-700 transition-all shadow-sm">
            <MdNotificationsNone size={24} />
          </button>
          {!isEditing && (
            <button 
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 px-6 py-2.5 bg-emerald-700 text-white rounded-2xl font-black shadow-lg shadow-emerald-100 hover:bg-emerald-800 transition-all"
            >
              <MdEdit size={20} />
              تعديل الملف
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* 👤 Left Sidebar: Avatar & Summary */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-gray-100 text-center relative overflow-hidden group">
            <div className="w-24 h-24 bg-emerald-100 rounded-[2rem] mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <MdPerson className="text-emerald-700 text-5xl" />
            </div>
            <h2 className="text-2xl font-black text-gray-900 mb-1">{user?.name || "ولي الأمر"}</h2>
            <p className="text-sm text-gray-400 font-bold mb-8">حساب ولي أمر معتمد</p>
            
            <div className="space-y-4">
              <div className="bg-emerald-50 p-4 rounded-2xl flex justify-between items-center border border-emerald-100">
                <span className="font-black text-emerald-700">نشط</span>
                <span className="text-xs font-bold text-emerald-600/60 uppercase tracking-widest">حالة الحساب</span>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full -translate-x-16 -translate-y-16 blur-3xl opacity-50" />
          </div>

          <div className="bg-emerald-900 p-8 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
            <div className="relative z-10">
              <MdSecurity size={40} className="text-emerald-400 mb-6 group-hover:rotate-12 transition-transform" />
              <h4 className="text-xl font-black mb-2">أمان الحساب</h4>
              <p className="text-sm text-emerald-200 font-medium mb-8 leading-relaxed">تأكد من تحديث كلمة المرور بشكل دوري لحماية بياناتك وبيانات أبنائك.</p>
              <button className="w-full py-4 bg-emerald-700 hover:bg-emerald-600 rounded-2xl font-black text-sm transition-all shadow-xl">تغيير كلمة المرور</button>
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-800 rounded-full blur-3xl opacity-50" />
          </div>
        </div>

        {/* 📝 Right: Detailed Info Form/View */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-700">
                <MdSettings size={28} />
              </div>
              <h2 className="text-2xl font-black text-gray-800">بيانات الحساب الشخصي</h2>
            </div>

            {isEditing ? (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <InputGroup label="الاسم الكامل" icon={<MdPerson />} register={register("name", { required: "الاسم مطلوب" })} error={errors.name} />
                  <InputGroup label="رقم الهاتف" icon={<MdPhone />} register={register("phone", { required: "رقم الهاتف مطلوب" })} error={errors.phone} />
                  <InputGroup label="البريد الإلكتروني" icon={<MdEmail />} register={register("email", { required: "الإيميل مطلوب" })} error={errors.email} />
                  <InputGroup label="العمر" icon={<MdCake />} register={register("age")} type="number" />
                </div>
                <div className="space-y-3 text-right">
                  <label className="text-xs font-black text-gray-400 mr-2 flex items-center gap-1 justify-end uppercase tracking-wider">الجنس</label>
                  <select {...register("gender")} className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500/20 font-bold outline-none transition-all appearance-none">
                    <option value="ذكر">ذكر</option>
                    <option value="أنثى">أنثى</option>
                  </select>
                </div>
                <div className="flex flex-col md:flex-row gap-4 pt-6 border-t border-gray-50">
                  <button type="submit" className="flex-1 py-4 bg-emerald-700 text-white rounded-2xl font-black shadow-xl shadow-emerald-100 hover:bg-emerald-800 transition-all flex items-center justify-center gap-3">
                    <MdCheckCircle size={20} />
                    حفظ التعديلات
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
                <DataCard label="الجنس" value={user?.gender} icon={user?.gender === 'أنثى' ? <MdFemale /> : <MdMale />} />
                <DataCard label="العمر" value={user?.age ? `${user.age} سنة` : "غير محدد"} icon={<MdCake />} />
                <DataCard label="تاريخ الانضمام" value="أكتوبر 2024" icon={<MdCheckCircle />} highlight />
              </div>
            )}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50/50 rounded-full -translate-x-16 -translate-y-16 blur-3xl" />
          </div>

          <div className="bg-amber-50 p-8 rounded-[3rem] border border-amber-100 flex items-center gap-6 text-right">
            <div className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center text-amber-900 shadow-lg shadow-amber-200">
              <MdSettings size={32} />
            </div>
            <div>
              <h4 className="text-lg font-black text-amber-900 mb-1">خصوصية بياناتك</h4>
              <p className="text-sm font-bold text-amber-800/60 leading-relaxed">بياناتك الشخصية محمية تماماً ولا تظهر إلا لإدارة المنصة والمعلمين الذين يشرفون على حلقات أبنائك.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const InputGroup = ({ label, icon, register, error, type = "text" }) => (
  <div className="space-y-2 text-right">
    <label className="text-xs font-black text-gray-400 mr-2 flex items-center gap-1 justify-end uppercase tracking-wider">
      {label}
      <span className="text-emerald-600">{icon}</span>
    </label>
    <input 
      type={type}
      {...register}
      className={`w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 font-bold outline-none transition-all ${error ? 'ring-2 ring-red-500/20' : 'focus:ring-emerald-500/20'}`}
    />
    {error && <p className="text-red-500 text-[10px] font-black mt-1 mr-2">{error.message}</p>}
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

export default ProfileParent;