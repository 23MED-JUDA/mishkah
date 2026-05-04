import React from 'react'

function AbutTeacher() {
  return (
   <>
  {/* المعلمين */}
  <section id="teach" className=" py-16 px-8">
    <h1 className="text-center text-2xl font-bold mb-12 ">
      نخبة من المعلمين المتخصصين
    </h1>
    <div className="grid md:grid-cols-3 gap-8 text-center">
      <div className="bg-white p-6 rounded-xl shadow text-right">
        <img src="شيخ3.jpg" className="w-20 mx-auto mb-4 rounded-full" />
        <h3 className="font-bold">المعلمة نجلاء حسن</h3>
        <br />
        <p className="text-gray-500 text-sm"> ●التجويد وتصحيح التلاوة</p>
        <p className="text-gray-500 text-sm">●9 سنوات من الخبرة </p>
        <p className="text-gray-500 text-sm">
          ●شرح بسيط وربط المعاني بالحياة اليوميه{" "}
        </p>
        <p className="text-gray-500 text-sm"> ●مناسب للاطفال والكبار </p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow text-right">
        <img src="شيخ2.jpg" className="w-20 mx-auto mb-4 rounded-full" />
        <h3 className="font-bold">الشيخ أحمد محمود</h3>
        <br />
        <p className="text-gray-500 text-sm">●التجويد وتصحيح التلاوة</p>
        <p className="text-gray-500 text-sm">●12 سنة من الخبرة</p>
        <p className="text-gray-500 text-sm">● اجازة في القران الكريم</p>
        <p className="text-gray-500 text-sm">
          ●شرح عملي مع تدريب علي النطق والمخارج
        </p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow text-right">
        <img src="شيخ.jpg" className="w-20 mx-auto mb-4 rounded-full" />
        <h3 className="font-bold">الشيخ محمد سامي</h3>
        <br />
        <p className="text-gray-500 text-sm">●تحفيظ القران للنساء والاطفال</p>
        <p className="text-gray-500 text-sm">● 7 سنوات من الخبرة</p>
        <p className="text-gray-500 text-sm">
          ● تستخدم اساليب الحفظ بالقصص والتكرار
        </p>
        <p className="text-gray-500 text-sm">●مناسبه للاطفال والكبار</p>
      </div>
    </div>
  </section>
</>

  )
}

export default AbutTeacher