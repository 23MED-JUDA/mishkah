import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import api from "../api/axios";
import { MdEmail, MdLock, MdArrowBack, MdPersonAdd } from "react-icons/md";

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await api.post("/login", {
        email: formData.email,
        password: formData.password,
      });

      const { user, access_token } = response.data;
      
      // Store user and token
      login({
        ...user,
        access_token,
        accountType: user.role // Mapping role to accountType for frontend consistency
      });

      navigate("/dashboard");
    } catch (err) {
      console.error("Login error:", err);
      setError(err.response?.data?.message || "حدث خطأ أثناء تسجيل الدخول. حاول مرة أخرى.");
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="min-h-screen bg-[#06241a] flex items-center justify-center p-6 relative overflow-hidden font-inter" dir="rtl">
      
      {/* Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-700/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-900/40 rounded-full blur-[120px]" />

      <div className="w-full max-w-xl bg-white/95 backdrop-blur-xl rounded-[3rem] shadow-2xl p-10 md:p-16 relative z-10 border border-white/20">
        
        <button 
          onClick={() => navigate('/')}
          className="absolute top-8 right-8 text-gray-400 hover:text-emerald-700 transition-colors flex items-center gap-2 text-sm font-bold"
        >
          <MdArrowBack className="rotate-180" size={20} />
          العودة للرئيسية
        </button>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-emerald-50 text-emerald-800 mb-6 shadow-sm">
            <div className="w-12 h-12 bg-emerald-700 rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-lg">م</div>
          </div>
          <h1 className="text-4xl font-black text-gray-900 mb-3 tracking-tight">مرحباً بك مجدداً</h1>
          <p className="text-gray-500 font-medium">سجل دخولك لمتابعة رحلتك في رحاب القرآن</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-2xl text-sm font-bold text-center border border-red-100 animate-shake">
              {error}
            </div>
          )}

          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mr-2">البريد الإلكتروني</label>
            <div className="relative group">
              <MdEmail className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl group-focus-within:text-emerald-600 transition-colors" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pr-14 pl-6 py-5 bg-gray-50 border-none rounded-2xl outline-none focus:ring-4 focus:ring-emerald-50 transition-all font-bold text-gray-700 shadow-sm"
                placeholder="example@mail.com"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mr-2">كلمة المرور</label>
            <div className="relative group">
              <MdLock className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl group-focus-within:text-emerald-600 transition-colors" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pr-14 pl-6 py-5 bg-gray-50 border-none rounded-2xl outline-none focus:ring-4 focus:ring-emerald-50 transition-all font-bold text-gray-700 shadow-sm"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-5 rounded-[2rem] text-lg font-black transition-all shadow-xl flex items-center justify-center gap-3
              ${loading ? 'bg-gray-100 text-gray-400' : 'bg-emerald-800 text-white shadow-emerald-100 hover:bg-emerald-900 hover:scale-[1.02] active:scale-[0.98]'}`}
          >
            {loading ? (
              <div className="w-6 h-6 border-4 border-emerald-700 border-t-transparent rounded-full animate-spin" />
            ) : (
              "تسجيل الدخول"
            )}
          </button>
        </form>

        <div className="mt-12 pt-8 border-t border-gray-50 text-center space-y-4">
          <p className="text-sm font-bold text-gray-400">ليس لديك حساب؟</p>
          <button 
            onClick={() => navigate('/register')}
            className="flex items-center justify-center gap-2 w-full py-4 border-2 border-emerald-100 rounded-2xl text-emerald-800 font-black hover:bg-emerald-50 transition-all"
          >
            <MdPersonAdd size={20} />
            إنشاء حساب جديد الآن
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-shake { animation: shake 0.4s ease-in-out; }
      `}} />
    </div>
  );
}

export default Login;