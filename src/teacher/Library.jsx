import React, { useState } from "react";
import { 
  MdPlayCircleFilled, MdSearch, MdFilterList, 
  MdVisibility, MdLocalOffer, MdVideoLibrary,
  MdOutlineMenuBook, MdChevronLeft
} from "react-icons/md";

function Library() {
  const categories = [
    { label: "الكل", count: 12 },
    { label: "مسار التفسير", count: 4 },
    { label: "المسار التجويد", count: 5 },
    { label: "مسار القراءات", count: 3 },
  ];

  const [active, setActive] = useState("الكل");

  const resources = [
    {
      title: "التفسير الميسر - سورة البقرة",
      desc: "طرق فعالة لشرح التفسير للطلاب بطريقة ميسرة وممتعة",
      type: "video",
      category: "مسار التفسير",
      url: "https://www.youtube.com/embed/z0aOrazTmbg?si=m-YLfbwr1KbD2x4W&amp;start=89",
      views: "450",
      time: "10:20",
    },
    {
      title: "أحكام التجويد للمبتدئين",
      desc: "شرح المخارج والصفات بأسلوب بسيط للمراحل الأولى",
      type: "video",
      category: "المسار التجويد",
      url: "https://www.youtube.com/embed/kZetNz-gA0U?si=X0ALnrMR1J9My4wB",
      views: "1.2k",
      time: "15:45",
    },
    {
      title: "القراءات العشر الصغرى",
      desc: "تعليم جمع القراءات العشر الصغرى من الصفر للمبتدئين",
      type: "video",
      category: "مسار القراءات",
      url: "https://www.youtube.com/embed/ZzY4NOB62NA?si=7Za4S7LPw4Qns0qv&amp;start=58",
      views: "900",
      time: "12:10",
    },
  ];

  const filtered = active === "الكل" ? resources : resources.filter((r) => r.category === active);

  const tags = ["أنشطة صفية", "مسابقات", "تفسير مبسط", "إعجاز القرآن", "قصص الأنبياء"];

  const handleTagClick = (tag) => {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(tag)}`, "_blank");
  };

  return (
    <main className="flex-1 flex flex-col px-4 md:px-8 py-6 bg-gray-50/50" dir="rtl">
      
      {/* 🟢 Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div className="text-right">
          <h1 className="text-3xl font-black text-gray-900 mb-2">مصادر مساعدة للتعلم</h1>
          <p className="text-gray-500 font-medium">مكتبة شاملة لكل المواد التعليمية والمراجع العلمية للمعلمين</p>
        </div>
        
        <div className="w-full md:w-96 relative">
          <MdSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
          <input 
            type="text" 
            placeholder="البحث عن دروس أو مراجع..." 
            className="w-full pr-12 pl-4 py-3.5 bg-white border border-gray-100 rounded-2xl shadow-sm outline-none focus:ring-4 focus:ring-emerald-50 transition-all text-sm font-medium"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* 📋 Sidebar Filter */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100">
            <h3 className="text-lg font-black text-gray-800 mb-6 flex items-center gap-2">
              <MdFilterList className="text-emerald-600" />
              مراجع حسب المسار
            </h3>
            <div className="space-y-2">
              {categories.map((cat) => (
                <button
                  key={cat.label}
                  onClick={() => setActive(cat.label)}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all group ${active === cat.label ? 'bg-emerald-700 text-white shadow-lg shadow-emerald-100' : 'text-gray-500 hover:bg-gray-50'}`}
                >
                  <span className="font-bold text-sm">{cat.label}</span>
                  <span className={`px-2.5 py-0.5 rounded-lg text-[10px] font-black ${active === cat.label ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-emerald-50 group-hover:text-emerald-700'}`}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-emerald-900 rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden group">
            <div className="relative z-10">
              <MdVideoLibrary size={40} className="text-emerald-400 mb-6 group-hover:rotate-12 transition-transform" />
              <h4 className="text-xl font-black mb-2">إضافة مورد جديد</h4>
              <p className="text-sm text-emerald-200 font-medium mb-8 leading-relaxed">هل لديك مادة تعليمية مفيدة؟ شاركها مع بقية المعلمين لتعم الفائدة</p>
              <button className="w-full py-4 bg-emerald-700 hover:bg-emerald-600 rounded-2xl font-black text-sm transition-all shadow-xl">رفع ملف أو فيديو</button>
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-800 rounded-full blur-3xl opacity-50" />
          </div>
        </div>

        {/* 🎬 Content Area */}
        <div className="lg:col-span-3 space-y-8">
          <div className="flex items-center justify-between px-4">
            <h2 className="text-2xl font-black text-gray-800 flex items-center gap-3">
              <span className="w-2 h-8 bg-emerald-600 rounded-full" />
              المواد التعليمية المتاحة
            </h2>
            <div className="flex gap-2">
              <button className="p-2 bg-white rounded-xl shadow-sm text-gray-400 hover:text-emerald-700 transition-all border border-gray-50"><MdChevronLeft size={24} className="rotate-180" /></button>
              <button className="p-2 bg-white rounded-xl shadow-sm text-gray-400 hover:text-emerald-700 transition-all border border-gray-50"><MdChevronLeft size={24} /></button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((item, i) => (
              <div key={i} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all">
                <div className="relative h-56 w-full bg-gray-900">
                  <iframe
                    className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"
                    src={item.url}
                    title={item.title}
                    allowFullScreen
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/40 backdrop-blur-md rounded-lg text-[10px] font-black text-white uppercase tracking-widest">
                    {item.category}
                  </div>
                </div>

                <div className="p-8 text-right space-y-4">
                  <h3 className="text-xl font-black text-gray-900 group-hover:text-emerald-700 transition-colors leading-tight">{item.title}</h3>
                  <p className="text-sm text-gray-400 font-bold leading-relaxed">{item.desc}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1.5 text-xs font-black text-gray-400">
                        <MdVisibility size={16} />
                        {item.views}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-black text-gray-400">
                        <MdPlayCircleFilled size={16} />
                        {item.time}
                      </span>
                    </div>
                    <button className="text-emerald-700 font-black text-sm hover:underline flex items-center gap-1">
                      تفاصيل المورد
                      <MdChevronLeft size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 🏷️ Quick Tags */}
          <div className="pt-10 border-t border-gray-100">
            <h3 className="text-lg font-black text-gray-800 mb-6 flex items-center gap-2 pr-4">
              <MdLocalOffer className="text-emerald-600" />
              تصنيفات ومواضيع شائعة
            </h3>
            <div className="flex gap-3 flex-wrap justify-end">
              {tags.map((tag, i) => (
                <button
                  key={i}
                  onClick={() => handleTagClick(tag)}
                  className="px-6 py-3 bg-white border border-gray-100 rounded-2xl text-sm font-black text-gray-500 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-100 transition-all shadow-sm"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Library;