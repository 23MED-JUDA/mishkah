import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../components/AuthProvider'
import { MdExitToApp, MdArrowForward } from 'react-icons/md'

function SignOut() {
  const { logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-[#06241a] flex items-center justify-center p-6 relative overflow-hidden font-inter" dir="rtl">
      
      {/* Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-700/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-900/40 rounded-full blur-[120px]" />

      <div className="w-full max-w-md bg-white/95 backdrop-blur-xl rounded-[3rem] shadow-2xl p-10 md:p-12 relative z-10 border border-white/20 text-center">
        
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-red-50 text-red-600 mb-8 shadow-sm transform -rotate-6">
          <MdExitToApp className="text-5xl" />
        </div>

        <h2 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">تسجيل الخروج</h2>
        
        <p className="text-gray-500 font-medium leading-relaxed mb-10">
          هل أنت متأكد أنك تريد إنهاء جلستك الحالية في منصة مشكاة؟ ستتمكن من العودة في أي وقت.
        </p>

        <div className="flex flex-col gap-4 w-full">
          <button
            onClick={handleLogout}
            className="w-full bg-red-600 text-white py-5 rounded-2xl text-lg font-black shadow-xl shadow-red-100 hover:bg-red-700 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            نعم، تسجيل الخروج
          </button>

          <button
            onClick={() => navigate(-1)}
            className="w-full bg-gray-50 text-gray-400 py-5 rounded-2xl text-lg font-black hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
          >
            <MdArrowForward className="rotate-180" />
            إلغاء، العودة
          </button>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-50">
          <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest italic">
            Mishkat Learning Management System
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignOut