import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaBookOpen, FaQuran, FaMicrophoneAlt, FaLanguage } from 'react-icons/fa'
import { AuthContext } from '../AuthProvider'
import NavBar from '../NavBar'


function Tracks() {
  const navigate = useNavigate()
  const { isLoggedIn } = useContext(AuthContext)

  // 📌 لتحديد أي كارت مفتوح (التفاصيل)
  const [openId, setOpenId] = useState(null)

  // 💾 بيانات المسارات (Static Mock Data for Frontend-only mode)
  const tracksData = [
    {
      id: 1,
      title: "مسار الحفظ",
      description: "حفظ القرآن الكريم برواية حفص عن عاصم مع مراعاة أحكام التجويد.",
      details: "يهدف هذا المسار إلى تمكين الطالب من حفظ كتاب الله كاملاً أو أجزاء منه، مع متابعة دورية وتسميع مباشر.",
      icon: <FaQuran />,
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-700",
      borderColor: "border-emerald-200"
    },
    {
      id: 2,
      title: "مسار التجويد",
      description: "دراسة أحكام التجويد نظرياً وعملياً لتحسين القراءة.",
      details: "يشمل دراسة مخارج الحروف، الصفات، وأحكام النون والميم المشددتين، والمدود وغيرها من الأحكام الأساسية.",
      icon: <FaMicrophoneAlt />,
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      borderColor: "border-blue-200"
    },
    {
      id: 3,
      title: "مسار التفسير",
      description: "فهم معاني الآيات وأسباب النزول.",
      details: "يركز هذا المسار على تدبر آيات القرآن الكريم وفهم الرسائل الربانية من خلال كتب التفسير المعتبرة.",
      icon: <FaBookOpen />,
      bgColor: "bg-orange-50",
      textColor: "text-orange-700",
      borderColor: "border-orange-200"
    },
    {
      id: 4,
      title: "مسار اللغة العربية",
      description: "تعلم قواعد اللغة العربية لخدمة فهم النص القرآني.",
      details: "دراسة النحو والصرف والبلاغة بشكل مبسط يعين الطالب على فهم إعجاز القرآن الكريم.",
      icon: <FaLanguage />,
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
      borderColor: "border-purple-200"
    }
  ];

  // 💳 الاشتراك في المسار
  const handleSubscribe = (track) => {
    if (!isLoggedIn) {
      navigate("/register", { state: { accountType: 'student', track: track.title } })
    } else {
      navigate('/student/courses')
    }
  }

  return (
    <div dir="rtl" className="min-h-screen bg-white pt-24">
      <NavBar />


      <div className="w-[95%] mx-auto py-16">

        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800">
            مساراتنا <span className="text-[#00A859]">التعليمية</span>
          </h1>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            اختر المسار الذي يناسب أهدافك التعليمية وابدأ رحلتك مع نخبة من المعلمين المتخصصين.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tracksData.map((track) => (
            <div 
              key={track.id}
              className={`relative p-8 rounded-[2rem] border-2 transition-all duration-500 overflow-hidden cursor-pointer
                ${track.borderColor} ${track.bgColor} hover:shadow-2xl hover:-translate-y-2`}
              onClick={() => setOpenId(openId === track.id ? null : track.id)}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm bg-white ${track.textColor}`}>
                {track.icon}
              </div>

              <h3 className={`text-xl font-black mb-3 ${track.textColor}`}>{track.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{track.description}</p>

              <div className={`overflow-hidden transition-all duration-500 ${openId === track.id ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pt-4 border-t border-white/50 text-sm text-gray-500 leading-relaxed mb-6">
                  {track.details}
                </div>
              </div>

              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleSubscribe(track);
                }}
                className={`w-full py-4 rounded-xl font-bold transition-all
                  ${track.textColor} border-2 border-current hover:bg-white`}
              >
                اشترك الآن
              </button>

              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tracks