import React, { useState, useContext } from "react";
import { AuthContext } from "../components/AuthProvider";
import { useNavigate } from "react-router-dom";
import { MdAdminPanelSettings, MdEmail, MdLock, MdArrowBack } from "react-icons/md";

function AdminLogin() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // 🎯 بيانات تجريبية للمناقشة (مقارنة البيانات)
    const adminEmail = "admin@mishkat.com";
    const adminPassword = "admin123";

    setTimeout(() => {
      if (formData.email === adminEmail && formData.password === adminPassword) {
        login({
          name: "مدير المنصة",
          role: "admin",
          email: adminEmail,
          accountType: "admin"
        });
        navigate("/dashboard/admin/accounts");
      } else {
        setError("البريد الإلكتروني أو كلمة المرور غير صحيحة.");
        setLoading(false);
      }
    }, 1500);
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
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-emerald-50 text-emerald-800 mb-6 shadow-sm transform -rotate-6">
            <MdAdminPanelSettings className="text-5xl" />
          </div>
          <h1 className="text-4xl font-black text-gray-900 mb-3 tracking-tight">دخول الإدارة</h1>
          <p className="text-gray-500 font-medium">لوحة التحكم المركزية لمنصة مشكاة التعليمية</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-2xl text-sm font-bold text-center border border-red-100 animate-shake">
              {error}
            </div>
          )}

          <div className="space-y-2">
            <label className="text-xs font-black text-gray-400 uppercase tracking-widest mr-2">البريد الإلكتروني للإدارة</label>
            <div className="relative group">
              <MdEmail className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl group-focus-within:text-emerald-600 transition-colors" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pr-14 pl-6 py-5 bg-gray-50 border-none rounded-2xl outline-none focus:ring-4 focus:ring-emerald-50 transition-all font-bold text-gray-700"
                placeholder="admin@mishkat.com"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black text-gray-400 uppercase tracking-widest mr-2">كلمة المرور</label>
            <div className="relative group">
              <MdLock className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl group-focus-within:text-emerald-600 transition-colors" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pr-14 pl-6 py-5 bg-gray-50 border-none rounded-2xl outline-none focus:ring-4 focus:ring-emerald-50 transition-all font-bold text-gray-700"
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
              "تسجيل الدخول للنظام"
            )}
          </button>
        </form>

        <div className="mt-12 pt-8 border-t border-gray-50 text-center">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
            جميع الحقوق محفوظة لمنصة مشكاة &copy; 2024
          </p>
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

export default AdminLogin;
