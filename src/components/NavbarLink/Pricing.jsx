import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../NavBar'
import { FaCheck, FaCrown, FaStar } from 'react-icons/fa'

function Pricing() {
  const navigate = useNavigate()

  // 🎯 بيانات الباقات (Static Data for Frontend-only mode)
  const plans = [
    {
      id: 1,
      name: "الباقة الأساسية",
      price: "150",
      duration: "شهري",
      features: ["حفظ قرآن", "متابعة أسبوعية", "اختبارات بسيطة"],
      popular: false,
      icon: <FaStar className="text-gray-400" />
    },
    {
      id: 2,
      name: "الباقة المتقدمة",
      price: "250",
      duration: "شهري",
      features: ["حفظ + تفسير", "متابعة يومية", "اختبارات دورية", "تقارير أداء"],
      popular: true,
      icon: <FaCrown className="text-yellow-500" />
    },
    {
      id: 3,
      name: "الباقة الذهبية",
      price: "450",
      duration: "شهري",
      features: ["حفظ مكثف", "إجازات معتمدة", "تواصل مباشر مع الشيخ", "تفسير متقدم"],
      popular: false,
      icon: <FaCrown className="text-emerald-500" />
    }
  ];

  const handleSubscribe = (plan) => {
    navigate("/register", { state: { accountType: 'student', plan: plan.name } })
  }

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 pt-24 pb-20">
      <NavBar />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">خطط الأسعار والباقات</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">اختر الباقة المناسبة لك وابدأ رحلتك في رحاب القرآن الكريم اليوم.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`bg-white p-10 rounded-[3rem] border-2 transition-all duration-500 relative
                ${plan.popular ? 'border-emerald-500 shadow-2xl scale-105 z-10' : 'border-gray-100 shadow-sm hover:shadow-xl'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white px-6 py-2 rounded-full text-sm font-black shadow-lg">
                  الأكثر طلباً
                </div>
              )}

              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-black text-gray-800">{plan.name}</h3>
                <div className="text-3xl">{plan.icon}</div>
              </div>

              <div className="mb-10">
                <span className="text-5xl font-black text-emerald-700">{plan.price}</span>
                <span className="text-gray-400 font-bold mr-2 text-lg">ج.م / {plan.duration}</span>
              </div>

              <ul className="space-y-5 mb-12">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600 font-bold">
                    <FaCheck className="text-emerald-500 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handleSubscribe(plan)}
                className={`w-full py-5 rounded-2xl font-black text-lg transition-all
                  ${plan.popular 
                    ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-xl shadow-emerald-100' 
                    : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'}`}
              >
                اشترك الآن
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Pricing