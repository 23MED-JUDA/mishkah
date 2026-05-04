import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../components/AuthProvider";
import api from "../api/axios";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  MdSchool, MdPerson, MdPeopleAlt, MdEmail, 
  MdLock, MdPhone, MdLocationOn, MdHistoryEdu,
  MdWork, MdCheckCircle, MdArrowForward, MdArrowBack,
  MdAdminPanelSettings
} from "react-icons/md";

function SignUp() {
  const { login } = useContext(AuthContext);


  const navigate = useNavigate();
  const location = useLocation();

  const [step, setStep] = useState(1);
  const [accountType, setAccountType] = useState("student");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    password: "",
    confirmPassword: "",
    nationalId: "",
    gender: "",
    age: "",
    track: "حفظ",
    experience: "",
    specialty: "",
    education: "",
    cvFileName: "",
  });

  const [errors, setErrors] = useState({});

  // 🟢 Handle pre-selected state from landing page
  useEffect(() => {
    if (location.state?.accountType) {
      setAccountType(location.state.accountType);
      setStep(2); // Jump to data entry if role already chosen
    }
    if (location.state?.track) {
      setFormData(prev => ({ ...prev, track: location.state.track }));
    }
  }, [location.state]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateStep2 = () => {
    let newErrors = {};
    if (formData.name.trim().length < 3) newErrors.name = "الاسم قصير جداً";
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "البريد غير صحيح";
    if (!formData.phone) newErrors.phone = "الهاتف مطلوب";
    if (!formData.location) newErrors.location = "المكان مطلوب";
    if (formData.password.length < 8) newErrors.password = "كلمة المرور يجب أن تكون 8 أحرف على الأقل";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "عدم تطابق";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep2()) return;
    setLoading(true);

    try {
      const response = await api.post("/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.confirmPassword,
        role: accountType,
        phone: formData.phone,
        location: formData.location,
        gender: formData.gender,
        age: formData.age,
        track: formData.track,
        experience: formData.experience,
        specialty: formData.specialty,
      });

      const { user, access_token } = response.data;
      
      login({
        ...user,
        access_token,
        accountType: user.role
      });

      navigate("/dashboard");
    } catch (err) {
      console.error("Signup error:", err);
      const backendErrors = err.response?.data?.errors;
      if (backendErrors) {
        // تحويل المصفوفات إلى نصوص لعرضها بشكل صحيح
        const formattedErrors = {};
        Object.keys(backendErrors).forEach(key => {
          formattedErrors[key] = Array.isArray(backendErrors[key]) 
            ? backendErrors[key][0] 
            : backendErrors[key];
        });
        setErrors(formattedErrors);
      } else {
        alert(err.response?.data?.message || "حدث خطأ أثناء إنشاء الحساب. تأكد من تشغيل السيرفر.");
      }
    } finally {
      setLoading(false);
    }
  };



  const roleLabels = {
    student: "طالب",
    teacher: "معلم",
    parent: "ولي أمر"
  };

  return (
    <div className="min-h-screen bg-[#06241a] flex items-center justify-center p-4 md:p-8 relative overflow-hidden font-inter" dir="rtl">
      
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-700/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-900/40 rounded-full blur-[150px]" />

      <div className="w-full max-w-4xl bg-white/95 backdrop-blur-2xl rounded-[3rem] shadow-2xl overflow-hidden relative z-10 flex flex-col md:flex-row min-h-[700px]">
        
        {/* Left Side: Branding/Info */}
        <div className="w-full md:w-80 bg-emerald-900 p-12 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl font-black mb-8 border border-white/10">م</div>
            <h2 className="text-3xl font-black mb-4 tracking-tight leading-tight">انضم إلى<br />أكاديمية مشكاة</h2>
            <p className="text-emerald-200/60 text-sm font-medium leading-relaxed">خطوتك الأولى نحو إتقان القرآن الكريم والعلوم الشرعية بأحدث الوسائل التقنية.</p>
          </div>
          


          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-800 rounded-full blur-3xl opacity-50" />
        </div>

        {/* Right Side: Form */}
        <div className="flex-1 p-8 md:p-16 flex flex-col justify-center bg-white">
          
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="text-2xl font-black text-gray-900">إنشاء حساب جديد</h3>
              <p className="text-gray-400 text-xs font-black uppercase tracking-widest mt-1">الخطوة {step} من 2</p>
            </div>
            {step === 1 && (
              <div className="flex flex-col items-end gap-1">
                <button onClick={() => navigate('/login')} className="text-sm font-black text-emerald-700 hover:underline">لديك حساب بالفعل؟</button>
                <button onClick={() => navigate('/admin/login')} className="text-[10px] font-black text-gray-400 hover:text-emerald-700 flex items-center gap-1 transition-colors">
                  <MdAdminPanelSettings size={14} />
                  دخول الإدارة
                </button>
              </div>
            )}
          </div>


          {step === 1 ? (
            <div className="space-y-8 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <AccountCard active={accountType === 'student'} onClick={() => setAccountType('student')} icon={<MdSchool />} label="طالب" />
                <AccountCard active={accountType === 'teacher'} onClick={() => setAccountType('teacher')} icon={<MdPerson />} label="معلم" />
                <AccountCard active={accountType === 'parent'} onClick={() => setAccountType('parent')} icon={<MdPeopleAlt />} label="ولي أمر" />
              </div>
              
              <div className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 flex items-center gap-6 group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl text-emerald-700 shadow-sm transition-transform group-hover:scale-110">
                  {accountType === 'student' ? <MdSchool /> : accountType === 'teacher' ? <MdPerson /> : <MdPeopleAlt />}
                </div>
                <div>
                  <h4 className="font-black text-gray-900">حساب {roleLabels[accountType]}</h4>
                  <p className="text-xs font-medium text-gray-400 leading-relaxed">سيتم توفير أدوات ومميزات مخصصة لخدمة احتياجاتك كـ {roleLabels[accountType]} في المنصة.</p>
                </div>
              </div>

              <button 
                onClick={() => setStep(2)}
                className="w-full py-5 bg-emerald-800 text-white rounded-[2rem] font-black shadow-xl shadow-emerald-100 hover:bg-emerald-900 transition-all flex items-center justify-center gap-3"
              >
                المتابعة للبيانات
                <MdArrowForward size={24} className="rotate-180" />
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ModernInput label="الاسم الكامل" name="name" val={formData.name} onChange={handleChange} icon={<MdPerson />} error={errors.name} />
                <ModernInput label="البريد الإلكتروني" name="email" val={formData.email} onChange={handleChange} icon={<MdEmail />} error={errors.email} />
                <ModernInput label="رقم الهاتف" name="phone" val={formData.phone} onChange={handleChange} icon={<MdPhone />} error={errors.phone} />
                <ModernInput label="المكان / العنوان" name="location" val={formData.location} onChange={handleChange} icon={<MdLocationOn />} error={errors.location} />
                
                {accountType === 'student' && (
                  <>
                    <ModernInput label="العمر" name="age" type="number" val={formData.age} onChange={handleChange} icon={<MdHistoryEdu />} />
                    <ModernSelect label="المسار" name="track" val={formData.track} onChange={handleChange} options={['حفظ', 'تفسير', 'تجويد']} />
                  </>
                )}

                {accountType === 'teacher' && (
                  <>
                    <ModernInput label="سنوات الخبرة" name="experience" type="number" val={formData.experience} onChange={handleChange} icon={<MdWork />} />
                    <ModernInput label="التخصص" name="specialty" val={formData.specialty} onChange={handleChange} icon={<MdSchool />} />
                  </>
                )}
                
                {/* 🔵 النوع (Gender) لجميع الحسابات */}
                <ModernSelect label="النوع" name="gender" val={formData.gender} onChange={handleChange} options={['اختار النوع', 'ذكر', 'أنثى']} />
              </div>


              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <ModernInput label="كلمة المرور" name="password" type="password" val={formData.password} onChange={handleChange} icon={<MdLock />} error={errors.password} />
                <ModernInput label="تأكيد كلمة المرور" name="confirmPassword" type="password" val={formData.confirmPassword} onChange={handleChange} icon={<MdLock />} error={errors.confirmPassword} />
              </div>

              <div className="flex gap-4 pt-8">
                <button 
                  type="button" 
                  onClick={() => setStep(1)}
                  className="w-24 py-5 bg-gray-50 text-gray-400 rounded-2xl font-black hover:bg-gray-100 transition-all flex items-center justify-center"
                >
                  <MdArrowBack size={24} className="rotate-180" />
                </button>
                <button 
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-5 bg-emerald-800 text-white rounded-[2rem] font-black shadow-xl shadow-emerald-100 hover:bg-emerald-900 transition-all flex items-center justify-center gap-3"
                >
                  {loading ? <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" /> : "إتمام إنشاء الحساب"}
                </button>
              </div>
            </form>
          )}

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.4s ease-out; }
      `}} />
    </div>
  );
}

const AccountCard = ({ active, onClick, icon, label }) => (
  <button 
    type="button"
    onClick={onClick}
    className={`p-6 rounded-[2.5rem] border-2 transition-all flex flex-col items-center gap-4 group
      ${active ? 'bg-emerald-50 border-emerald-600 text-emerald-900 shadow-lg shadow-emerald-100' : 'bg-white border-gray-100 text-gray-400 hover:border-emerald-100'}`}
  >
    <div className={`text-4xl transition-transform group-hover:scale-110 ${active ? 'text-emerald-700' : 'text-gray-300'}`}>{icon}</div>
    <span className="text-sm font-black tracking-tight">{label}</span>
  </button>
);

const ModernInput = ({ label, icon, error, val, onChange, ...props }) => (
  <div className="space-y-2 text-right">
    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mr-2">{label}</label>
    <div className="relative group">
      <div className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl group-focus-within:text-emerald-600 transition-colors">{icon}</div>
      <input 
        {...props}
        value={val}
        onChange={onChange}
        className={`w-full pr-14 pl-6 py-4 bg-gray-50 border-none rounded-2xl outline-none focus:ring-4 transition-all font-bold text-gray-700 text-sm
          ${error ? 'ring-2 ring-red-100 bg-red-50' : 'focus:ring-emerald-50'}`}
      />
    </div>
    {error && <p className="text-[10px] font-bold text-red-500 mr-2">{error}</p>}
  </div>
);

const ModernSelect = ({ label, options, val, onChange, ...props }) => (
  <div className="space-y-2 text-right">
    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mr-2">{label}</label>
    <select 
      {...props}
      value={val}
      onChange={onChange}
      className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl outline-none focus:ring-4 focus:ring-emerald-50 transition-all font-bold text-gray-700 text-sm appearance-none"
    >
      {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
    </select>
  </div>
);

export default SignUp;