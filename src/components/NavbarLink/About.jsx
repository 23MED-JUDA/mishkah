import React from 'react'
import NavBar from '../NavBar'
import { FaQuran } from 'react-icons/fa'


function About() {

  // 📊 بيانات الإنجازات
  const stats = [
    { id: 1, number: "+5000", label: "طالب نشط" },
    { id: 2, number: "+50", label: "دورة تدريبية" },
    { id: 3, number: "+20", label: "معلم مجاز" },
    { id: 4, number: "+100", label: "حلقة حفظ" },
  ]

  return (
    <div dir="rtl" className="min-h-screen bg-white pt-20">
      <NavBar />

      {/* قسم المقدمة */}
      <section className="w-[95%] mx-auto mt-8 p-12 bg-[#F8F9FA] rounded-3xl flex flex-col md:flex-row items-center gap-12">
        
        <div className="flex-1">
          <h2 className="text-[#00A859] font-bold text-xl mb-4">
            عن أكاديمية مشكاة
          </h2>

          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            منصة رائدة لتعليم العلوم الشرعية والقرآن
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl leading-loose mb-8">
            أكاديمية مشكاة هي منصة تعليمية متكاملة تهدف إلى تيسير تعلم القرآن الكريم،
            التفسير، والسنة النبوية بأسلوب مبسط وعصري يناسب جميع المستويات،
            تحت إشراف نخبة من المعلمين المتخصصين والمجازين.
          </p>

          <div className="flex gap-4 flex-wrap">
            <div className="bg-white p-4 rounded-xl shadow-sm border-r-4 border-[#00A859]">
              <span className="block font-bold text-2xl text-gray-800">
                رؤيتنا
              </span>
              <span className="text-gray-500 text-sm">
                نشر العلم الشرعي الصحيح للجميع.
              </span>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm border-r-4 border-[#00A859]">
              <span className="block font-bold text-2xl text-gray-800">
                رسالتنا
              </span>
              <span className="text-gray-500 text-sm">
                توفير بيئة تعليمية آمنة ومميزة.
              </span>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div className="w-64 h-64 bg-emerald-50 rounded-[3rem] flex items-center justify-center text-[8rem] text-emerald-700 shadow-2xl shadow-emerald-100/50 border-4 border-white rotate-3 hover:rotate-0 transition-transform duration-500">
            <FaQuran />
          </div>
        </div>
      </section>


      {/* قسم الإنجازات */}
      <section className="py-20">
        <div className="w-[95%] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          
          {stats.map((item) => (
            <div key={item.id}>
              <h3 className="text-5xl font-bold text-[#00A859] mb-2">
                {item.number}
              </h3>
              <p className="text-gray-500">{item.label}</p>
            </div>
          ))}

        </div>
      </section>
    </div>
  )
}

export default About