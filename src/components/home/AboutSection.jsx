import React from 'react'

function AboutSection() {
  return (
<>
  {/* البرامج التعليمية */}
  <section id="learn" className="py-16 px-8 bg-gray-200 rounded-2xl ">
    <h2 className="text-center text-2xl font-bold mb-10">برامجنا التعليمية</h2>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="p-6 rounded-xl shadow bg-white">
        <h3 className="font-bold text-lg mb-2 text-blue-950">
          التفسير والتدبر
        </h3>
        <p className="text-gray-500 font-bold">فهم معاني القرآن بأسلوب مبسط</p>
        <br />
        <a href=" about.html" className=" text-black rounded-lg font-bold">
          اعرف المزيد⬅{" "}
        </a>
      </div>
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-bold text-lg mb-2 text-blue-950">
          التجويد والإتقان
        </h3>
        <p className="text-gray-500 font-bold">
          تعلم أحكام التجويد وتحسين التلاوة
        </p>
        <br />
        <a href=" about.html" className=" text-black rounded-lg font-bold">
          اعرف المزيد⬅{" "}
        </a>
      </div>
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className=" text-lg mb-2 text-blue-950 font-bold">
          خطة متابعة للحفظ
        </h3>
        <p className="text-gray-500 font-bold">
          متابعة مستمرة لتحقيق أفضل تقدم
        </p>
        <br />
        <a href=" about.html" className=" text-black rounded-lg font-bold">
          اعرف المزيد⬅
        </a>
      </div>
    </div>
  </section>
</>

  )
}

export default AboutSection