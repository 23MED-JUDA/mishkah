import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavBar from '../NavBar';
import { MdArrowBack, MdCheckCircle, MdStar, MdMenuBook, MdMic, MdFavorite } from 'react-icons/md';


function ProgramDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const program = state?.program;

  // التحقق من وجود البيانات
  if (!program) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 font-inter" dir="rtl">
        <h2 className="text-2xl font-black text-gray-900 mb-4">عذراً، لم يتم العثور على البرنامج</h2>
        <button 
          onClick={() => navigate('/')}
          className="px-8 py-3 bg-emerald-800 text-white rounded-2xl font-bold"
        >
          العودة للرئيسية
        </button>
      </div>
    );
  }

  const features = [
    "متابعة دورية مع معلمين مجازين",
    "خطط دراسية مرنة تناسب وقتك",
    "شهادات إتمام معتمدة من المنصة",
    "دعم فني وتقني على مدار الساعة",
    "اختبارات تقييمية لتحديد المستوى",
    "بيئة تعليمية تفاعلية حديثة"
  ];

  const getIcon = (name) => {
    switch (name) {
      case 'book': return <MdMenuBook />;
      case 'mic': return <MdMic />;
      case 'favorite': return <MdFavorite />;
      default: return <MdMenuBook />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/30 font-inter pb-20 pt-20" dir="rtl">
      <NavBar />
      
      {/* Hero Section for Details */}
      <div className="bg-[#06241a] pt-32 pb-60 relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-700/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-900/40 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-emerald-400 font-bold mb-12 hover:text-white transition-colors group"
          >
            <MdArrowBack className="rotate-180 group-hover:-translate-x-1 transition-transform" size={24} />
            العودة للبرامج
          </button>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className={`w-32 h-32 rounded-[2.5rem] flex items-center justify-center text-6xl shadow-2xl
              ${program.color === 'emerald' ? 'bg-emerald-50 text-emerald-700' : 
                program.color === 'blue' ? 'bg-blue-50 text-blue-700' : 
                'bg-amber-50 text-amber-700'}`}>
              {getIcon(program.iconName)}
            </div>

            <div className="text-center md:text-right">
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">{program.title}</h1>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl text-emerald-400 text-xs font-black uppercase tracking-widest border border-white/5">
                  برنامج متخصص
                </span>
                <div className="flex items-center gap-1 text-amber-400">
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <span className="text-white/60 text-xs mr-2 font-bold">(4.9/5 تقييم الطلاب)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 -mt-40 relative z-20">
        <div className="bg-white rounded-[4rem] shadow-2xl shadow-emerald-900/10 p-10 md:p-20 border border-gray-100">
          
          <div className="mb-20">
            <h2 className="text-3xl font-black text-gray-900 mb-8 flex items-center gap-4">
              <span className="w-10 h-2 bg-emerald-600 rounded-full" />
              عن البرنامج
            </h2>
            <p className="text-xl text-gray-500 leading-[2.2] font-medium text-justify">
              {program.description} هذا البرنامج مصمم خصيصاً ليأخذ بيدك في رحلة إيمانية وعلمية متكاملة. نركز في مشكاة على تقديم محتوى تعليمي رصين يجمع بين الأصالة والمعاصرة، مع توفير كافة الوسائل التقنية لضمان تجربة تعليمية فريدة ومثمرة.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-black text-gray-900 mb-10 flex items-center gap-4">
              <span className="w-10 h-2 bg-emerald-600 rounded-full" />
              مميزات المسار
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-4 p-6 bg-gray-50 rounded-3xl border border-gray-100 group hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-300">
                  <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    <MdCheckCircle size={20} />
                  </div>
                  <span className="font-bold text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-20 border-t border-gray-100 text-center">
            <div className="inline-block p-8 bg-emerald-50 rounded-[3rem] border border-emerald-100 mb-10">
              <h3 className="text-2xl font-black text-emerald-900 mb-3">ابدأ رحلتك التعليمية اليوم</h3>
              <p className="text-emerald-700/70 font-bold">انضم إلى أكثر من 5000 طالب وطالبة في منصة مشكاة</p>
            </div>
            
            <button 
              onClick={() => navigate('/register', { state: { accountType: 'student', track: program.title } })}
              className="w-full md:w-auto px-16 py-6 bg-emerald-800 text-white rounded-[2rem] text-2xl font-black shadow-2xl shadow-emerald-200 hover:bg-emerald-900 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-4 mx-auto"
            >
              اشتراك (إنشاء حساب جديد)
            </button>
            
            <p className="mt-8 text-gray-400 font-bold text-sm">
              * سيتم توجيهك لصفحة إنشاء حساب طالب جديد
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgramDetails;
