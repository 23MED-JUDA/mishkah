import React from 'react'
import NavBar from '../components/NavBar'
import { teachersData } from '../assets';

// مصفوفة البيانات مع روابط صور احترافية لرجال بوقار (بدلاً من صور الأطفال)


function Teacher() {
  return (
    <>
      <NavBar />
      <div dir="rtl" className='w-[95%] mx-auto px-4 mt-8 py-12 bg-[#F8F9FA] rounded-3xl font-sans'>
        
        {/* عنوان القسم */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            نخبة من <span className="text-[#00A859]">المعلمين</span>
          </h2>
          <div className="w-20 h-1 bg-[#00A859] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* شبكة المعلمين */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teachersData.map((item) => (
            <div 
              key={item.id} 
              className='group flex flex-col items-center bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 px-8 py-10 rounded-2xl'
            >
              {/* إطار الصورة الشخصية */}
              <div className="relative mb-6">
                {/* تأثير التوهج عند التمرير */}
                <div className="absolute inset-0 bg-[#00A859] rounded-full blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                
                {item.img ? (
                  <img 
                    className='relative w-36 h-36 rounded-full object-cover border-4 border-[#00A859]/10 group-hover:border-[#00A859] shadow-md transition-all duration-300' 
                    src={item.img} 
                    alt={item.name} 
                  />
                ) : (
                  <div className="relative w-36 h-36 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-5xl font-black border-4 border-[#00A859]/10 group-hover:border-[#00A859] shadow-md transition-all duration-300">
                    {item.name.charAt(0)}
                  </div>
                )}
              </div>


              {/* بيانات المعلم */}
              <h3 className='text-[#2D3436] text-2xl font-bold mb-3 group-hover:text-[#00A859] transition-colors'>
                {item.name}
              </h3>
              
              <div className="flex items-center gap-2 bg-[#F0FDF4] px-5 py-1.5 rounded-full border border-[#DCFCE7]">
                <span className="text-[#00A859] font-bold text-lg">
                   {item.age.toLocaleString('ar-EG')}
                </span>
                <span className="text-[#166534] text-sm">عاماً من الخبرة</span>
              </div>

              {/* حقل المكان */}
              {item.location && (
                <div className="mt-4 flex items-center gap-2 text-gray-500 text-sm">
                  <span className="font-semibold text-emerald-600">المكان:</span>
                  <span>{item.location}</span>
                </div>
              )}

            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Teacher;