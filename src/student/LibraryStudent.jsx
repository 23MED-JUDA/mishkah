import React, { useEffect, useState } from "react";
import {
  MdSearch, MdNotificationsNone, MdHelpOutline,
  MdMenuBook, MdPlayCircleFilled, MdHeadset, MdPictureAsPdf,
  MdDeleteOutline, MdAdd, MdDownload, MdStar
} from "react-icons/md";
import { FaHandsHelping, FaWhatsapp } from "react-icons/fa";

function LibraryStudent() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([
    { id: 1, text: "مراجعة أحكام التجويد قبل اختبار السبت" },
    { id: 2, text: "سماع سورة الملك بصوت المنشاوي" }
  ]);

  const [oradToday, setOradToday] = useState(null);
  const [newPath, setNewPath] = useState(null);
  const [books, setBooks] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    // 🧪 Mock Data for Demonstration
    setOradToday({
      surah: "سورة الملك",
      from: 1,
      to: 10,
      progress: 60,
      link: "https://quran.com/67",
    });

    setNewPath({
      title: "مسار جديد",
      desc: "تيسير التجويد: أحكام النون الساكنة",
      btn: "ابدأ الدراسة الآن",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    });

    setBooks([
      { id: 1, title: "الوجيز في التفسير", type: "tafsir", author: "د. وهبة الزحيلي", rating: 4.8 },
      { id: 2, title: "مخارج الحروف", type: "tajweed", author: "الشيخ أيمن سويد", rating: 4.9 },
      { id: 3, title: "تسجيلات التحفيظ", type: "audio", author: "مشروع مشكاة", rating: 4.5 },
      { id: 4, title: "أسباب النزول", type: "pdf", author: "الواحدي النيسابوري", rating: 4.7, link: "#" },
      { id: 5, title: "شرح المقدمة الجزرية", type: "pdf", author: "غانم قدوري", rating: 5.0, link: "#" },
    ]);
  }, []);

  const addNote = () => {
    if (!note.trim()) return;
    setNotes([{ id: Date.now(), text: note }, ...notes]);
    setNote("");
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((n) => n.id !== id));
  };

  const getTypeIcon = (type) => {
    switch(type) {
      case 'tafsir': return <MdMenuBook className="text-emerald-600" />;
      case 'tajweed': return <MdPlayCircleFilled className="text-amber-600" />;
      case 'audio': return <MdHeadset className="text-blue-600" />;
      case 'pdf': return <MdPictureAsPdf className="text-red-600" />;
      default: return <MdMenuBook className="text-gray-600" />;
    }
  };

  const filteredBooks = books.filter(b => activeTab === 'all' || b.type === activeTab);

  return (
    <main className="flex-1 flex flex-col px-4 md:px-8 py-6 bg-gray-50/50" dir="rtl">
      
      {/* 🟢 Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div className="text-right">
          <h1 className="text-3xl font-black text-gray-900 mb-2">المكتبة القرآنية</h1>
          <p className="text-gray-500 font-medium">مرجعك الشامل لعلوم القرآن والتفسير والتجويد</p>
        </div>
        
        <div className="w-full md:w-96 relative">
          <MdSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
          <input 
            type="text" 
            placeholder="ابحث عن كتاب، تسجيل، أو مادة تعليمية..." 
            className="w-full pr-12 pl-4 py-3.5 bg-white border border-gray-100 rounded-2xl shadow-sm outline-none focus:ring-4 focus:ring-emerald-50 transition-all text-sm font-medium"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* 📚 Left Section: Highlights & Tabs */}
        <div className="lg:col-span-1 space-y-6">
          
          {/* Daily Orad Card */}
          <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <MdMenuBook className="text-emerald-700 text-2xl" />
              <h3 className="font-black text-gray-800">أوراد اليوم</h3>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-bold text-gray-900 mb-1">{oradToday?.surah}</h4>
              <p className="text-xs text-gray-400 font-bold">من الآية {oradToday?.from} إلى {oradToday?.to}</p>
            </div>

            <div className="space-y-4">
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-black inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-50">
                      مستوى الإنجاز
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-black inline-block text-emerald-600">
                      {oradToday?.progress}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2.5 mb-4 text-xs flex rounded-full bg-emerald-50">
                  <div style={{ width: `${oradToday?.progress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-600 transition-all duration-1000"></div>
                </div>
              </div>
              <button className="w-full py-3.5 bg-emerald-700 text-white rounded-2xl font-black text-sm shadow-lg shadow-emerald-100 hover:bg-emerald-800 transition-all">
                استكمال القراءة
              </button>
            </div>
          </div>

          {/* Library Categories */}
          <div className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-gray-100">
            <h3 className="font-black text-gray-800 mb-6 pr-2">الأقسام</h3>
            <div className="space-y-2">
              {[
                { id: 'all', label: 'الكل', icon: <MdMenuBook /> },
                { id: 'tafsir', label: 'التفسير', icon: <MdMenuBook /> },
                { id: 'tajweed', label: 'التجويد', icon: <MdPlayCircleFilled /> },
                { id: 'audio', label: 'الصوتيات', icon: <MdHeadset /> },
                { id: 'pdf', label: 'الكتب الرقمية', icon: <MdPictureAsPdf /> }
              ].map(cat => (
                <button 
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`w-full flex items-center justify-between p-3.5 rounded-2xl transition-all group ${activeTab === cat.id ? 'bg-emerald-700 text-white shadow-lg shadow-emerald-100' : 'text-gray-500 hover:bg-gray-50'}`}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform">{cat.icon}</span>
                  <span className="font-bold text-sm">{cat.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 📖 Right Section: Books Grid & Notes */}
        <div className="lg:col-span-3 space-y-8">
          
          {/* New Path Hero */}
          <div className="bg-emerald-900 rounded-[3rem] p-8 md:p-12 text-white flex flex-col md:flex-row items-center gap-8 relative overflow-hidden shadow-2xl">
            <div className="flex-1 text-center md:text-right relative z-10">
              <span className="px-4 py-1.5 bg-emerald-700/50 rounded-full text-xs font-black mb-4 inline-block">{newPath?.title}</span>
              <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight">{newPath?.desc}</h2>
              <button className="px-8 py-3.5 bg-white text-emerald-900 rounded-2xl font-black shadow-xl hover:scale-105 transition-all">
                {newPath?.btn}
              </button>
            </div>
            <div className="w-48 h-48 md:w-64 md:h-64 relative z-10">
              <img src={newPath?.image} alt="study" className="w-full h-full object-contain" />
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800/30 rounded-full blur-[100px]" />
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredBooks.map((book) => (
              <div key={book.id} className="group bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all flex items-center gap-6">
                <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center text-3xl group-hover:bg-emerald-50 transition-colors">
                  {getTypeIcon(book.type)}
                </div>
                <div className="flex-1 text-right">
                  <div className="flex items-center gap-1 justify-end text-amber-400 mb-1">
                    <span className="text-xs font-black text-gray-400 ml-1">{book.rating}</span>
                    <MdStar size={14} />
                  </div>
                  <h4 className="font-black text-gray-800 group-hover:text-emerald-700 transition-colors mb-1">{book.title}</h4>
                  <p className="text-xs text-gray-400 font-bold mb-4">{book.author}</p>
                  <div className="flex items-center gap-3 justify-end">
                    <button className="p-2.5 bg-gray-50 rounded-xl text-gray-400 hover:bg-emerald-50 hover:text-emerald-700 transition-all">
                      <MdDownload size={20} />
                    </button>
                    <button className="px-6 py-2 bg-emerald-700 text-white text-xs font-black rounded-xl hover:bg-emerald-800 transition-all">
                      فتح المورد
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Section: Notes & Support */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Notes Widget */}
            <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <div className="flex gap-2">
                  <button onClick={addNote} className="w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center shadow-lg shadow-emerald-100 hover:scale-105 transition-all">
                    <MdAdd size={24} />
                  </button>
                </div>
                <h3 className="font-black text-gray-800">ملاحظاتي الدراسية</h3>
              </div>
              
              <div className="relative mb-6">
                <textarea 
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="سجل فكرة أو ملاحظة سريعة من دروس اليوم..."
                  className="w-full p-6 bg-gray-50 border-none rounded-3xl outline-none focus:ring-2 focus:ring-emerald-500/20 min-h-[120px] text-sm font-medium resize-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {notes.map((n) => (
                  <div key={n.id} className="bg-emerald-50/50 p-4 rounded-2xl flex justify-between items-start border border-emerald-50">
                    <button onClick={() => deleteNote(n.id)} className="text-gray-300 hover:text-red-500 transition-colors">
                      <MdDeleteOutline size={20} />
                    </button>
                    <p className="text-sm font-bold text-gray-700 text-right leading-relaxed flex-1 mr-3">{n.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Help Widget */}
            <div className="bg-amber-400 rounded-[2.5rem] p-8 flex flex-col items-center text-center shadow-xl relative overflow-hidden group">
              <div className="relative z-10 w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 backdrop-blur-md">
                <FaHandsHelping className="text-amber-900 text-3xl" />
              </div>
              <h3 className="text-xl font-black text-amber-950 mb-3 relative z-10">طلب مساعدة علمية</h3>
              <p className="text-sm font-bold text-amber-900/70 mb-8 relative z-10 leading-relaxed">تحتاج شرح لأي مرجع؟ تواصل مع المعلمين مباشرة</p>
              <button className="w-full py-4 bg-amber-950 text-white rounded-2xl font-black text-sm shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-3">
                <FaWhatsapp size={20} />
                تواصل الآن
              </button>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-300/30 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LibraryStudent;