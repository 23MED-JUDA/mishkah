import React, { useState } from 'react'
import { 
  MdStars, MdOutlineAssignment, MdFace, 
  MdSentimentVerySatisfied, MdSentimentSatisfied, MdSentimentDissatisfied,
  MdSend, MdHistory, MdPerson
} from "react-icons/md";

function Evaluation() {
  const [rating, setRating] = useState('excellent');
  const [studentName, setStudentName] = useState('أحمد محمد علي');
  const [task, setTask] = useState('حفظ سورة الكهف (1-20)');

  return (
    <main className="flex-1 flex flex-col px-4 md:px-8 py-6 bg-gray-50/50" dir="rtl">
      
      {/* 🟢 Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div className="text-right">
          <h1 className="text-3xl font-black text-gray-900 mb-2">تقييم مستوى الطالب</h1>
          <p className="text-gray-500 font-medium">سجل أداء الطالب بدقة لتحفيزه ومتابعة تقدمه</p>
        </div>
        
        <button className="flex items-center gap-2 px-6 py-2.5 bg-white border border-gray-100 rounded-2xl text-emerald-700 font-black hover:bg-emerald-50 transition-all shadow-sm">
          <MdHistory size={20} />
          سجل التقييمات السابقة
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* 👤 Student Profile Summary */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-gray-100 text-center relative overflow-hidden group">
            <div className="w-24 h-24 bg-emerald-100 rounded-[2rem] mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <MdPerson className="text-emerald-700 text-5xl" />
            </div>
            <h2 className="text-xl font-black text-gray-800 mb-2">{studentName}</h2>
            <p className="text-sm text-gray-400 font-bold mb-8">طالب متميز • المستوى الثاني</p>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-2xl flex justify-between items-center group-hover:bg-emerald-50 transition-colors">
                <span className="font-black text-emerald-700">24 حلقة</span>
                <span className="text-xs font-bold text-gray-500">الحضور الكلي</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-2xl flex justify-between items-center group-hover:bg-emerald-50 transition-colors">
                <span className="font-black text-emerald-700">صفحتين/يوم</span>
                <span className="text-xs font-bold text-gray-500">معدل الحفظ</span>
              </div>
            </div>
            
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-50 rounded-full blur-3xl opacity-50" />
          </div>

          <div className="bg-emerald-900 p-8 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
            <h3 className="text-lg font-black mb-4 relative z-10">إنجاز الطالب</h3>
            <div className="text-4xl font-black mb-2 relative z-10">88%</div>
            <p className="text-xs text-emerald-300 font-bold relative z-10 leading-relaxed">أكمل أحمد 4 أجزاء من القرآن الكريم هذا الفصل الدراسي بنجاح</p>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-800 rounded-full blur-3xl opacity-50" />
          </div>
        </div>

        {/* 📝 Evaluation Form */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-700">
                <MdOutlineAssignment size={28} />
              </div>
              <h2 className="text-2xl font-black text-gray-800">تفاصيل الحصة والتقييم</h2>
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3 text-right">
                  <label className="text-sm font-black text-gray-700 mr-2">اسم الطالب</label>
                  <input 
                    readOnly
                    className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl text-gray-400 font-bold outline-none"
                    value={studentName}
                  />
                </div>
                <div className="space-y-3 text-right">
                  <label className="text-sm font-black text-gray-700 mr-2">المادة/الورد الدراسي</label>
                  <input 
                    className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500/20 font-bold outline-none transition-all"
                    placeholder="مثال: حفظ سورة الملك"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                  />
                </div>
              </div>

              {/* Performance Rating */}
              <div className="space-y-6 text-right">
                <label className="text-sm font-black text-gray-700 mr-2">مستوى الأداء اليومي</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <RatingBtn 
                    active={rating === 'poor'} 
                    onClick={() => setRating('poor')}
                    icon={<MdSentimentDissatisfied size={32} />}
                    label="يحتاج تحسين"
                    color="red"
                  />
                  <RatingBtn 
                    active={rating === 'good'} 
                    onClick={() => setRating('good')}
                    icon={<MdSentimentSatisfied size={32} />}
                    label="جيد جداً"
                    color="blue"
                  />
                  <RatingBtn 
                    active={rating === 'excellent'} 
                    onClick={() => setRating('excellent')}
                    icon={<MdSentimentVerySatisfied size={32} />}
                    label="ممتاز"
                    color="emerald"
                  />
                </div>
              </div>

              {/* Notes Area */}
              <div className="space-y-3 text-right">
                <label className="text-sm font-black text-gray-700 mr-2">ملاحظات المعلم وتوجيهاته</label>
                <textarea 
                  className="w-full h-40 px-6 py-4 bg-gray-50 border-none rounded-3xl focus:ring-2 focus:ring-emerald-500/20 font-bold outline-none transition-all resize-none"
                  placeholder="سجل ملاحظاتك على الأداء، نقاط القوة، والمواضع التي تحتاج مراجعة..."
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4 pt-4">
                <button type="submit" className="flex-1 py-4 bg-emerald-700 text-white rounded-2xl font-black shadow-xl shadow-emerald-100 hover:bg-emerald-800 transition-all flex items-center justify-center gap-3">
                  <MdSend size={20} className="rotate-180" />
                  حفظ وإرسال التقييم
                </button>
                <button type="button" className="px-10 py-4 bg-gray-50 text-gray-500 rounded-2xl font-black hover:bg-gray-100 transition-all">
                  إلغاء
                </button>
              </div>
            </form>
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50/50 rounded-full -translate-x-16 -translate-y-16 blur-3xl" />
          </div>
        </div>
      </div>
    </main>
  )
}

const RatingBtn = ({ active, onClick, icon, label, color }) => {
  const colorClasses = {
    red: active ? 'bg-red-600 text-white shadow-red-100' : 'bg-gray-50 text-gray-400 border-transparent hover:border-red-100',
    blue: active ? 'bg-blue-600 text-white shadow-blue-100' : 'bg-gray-50 text-gray-400 border-transparent hover:border-blue-100',
    emerald: active ? 'bg-emerald-600 text-white shadow-emerald-100' : 'bg-gray-50 text-gray-400 border-transparent hover:border-emerald-100'
  };

  return (
    <button 
      type="button"
      onClick={onClick}
      className={`flex flex-col items-center gap-3 p-6 rounded-[2rem] border-2 transition-all shadow-lg ${colorClasses[color]}`}
    >
      <div className="transition-transform group-hover:scale-110">{icon}</div>
      <span className="font-black text-sm">{label}</span>
    </button>
  );
};

export default Evaluation