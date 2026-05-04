import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function PricingSection() {
  const navigate = useNavigate();

  const plans = [
    {
      id: 1,
      title: "الباقة الأساسية",
      price: "250",
      features: [
        "4 حصص شهرياً",
        "متابعة دورية",
        "اختبار مستوى مبدئي",
        "شهادة إتمام الدورة"
      ],
      isPopular: false
    },
    {
      id: 2,
      title: "الباقة الفضية",
      price: "400",
      features: [
        "8 حصص شهرياً",
        "متابعة دورية ومكثفة",
        "اختبار مستوى مبدئي",
        "شهادة إتمام الدورة",
        "الاشتراك في مسابقات الحفظ"
      ],
      isPopular: true
    },
    {
      id: 3,
      title: "الباقة الذهبية",
      price: "600",
      features: [
        "12 حصة شهرياً",
        "متابعة يومية",
        "اختبار مستوى مبدئي دوري",
        "شهادة إتمام الدورة",
        "الاشتراك في جميع الفعاليات"
      ],
      isPopular: false
    }
  ];

  const handleSubscribe = (plan) => {
    navigate('/register', { state: { accountType: 'student', plan: plan.title } });
  };

  return (
    <section className="py-20 px-4 bg-emerald-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">استثمر في تعلم القرآن</h2>
        <p className="text-gray-500 mb-12">باقات مرنة تناسب جميع الاحتياجات والمستويات</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`bg-white rounded-3xl p-8 transition-transform hover:-translate-y-2 ${plan.isPopular ? 'border-2 border-emerald-600 shadow-xl relative scale-105 z-10' : 'border border-gray-100 shadow-sm'}`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold shadow-md">
                  الأكثر طلباً
                </div>
              )}
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">{plan.title}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-emerald-700">{plan.price}</span>
                <span className="text-gray-500"> ج.م / شهرياً</span>
              </div>

              <ul className="space-y-4 mb-8 text-right">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <FaCheck className="text-emerald-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handleSubscribe(plan)}
                className={`w-full py-3 rounded-xl font-bold transition-colors ${plan.isPopular ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'}`}>
                اشترك الآن
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
