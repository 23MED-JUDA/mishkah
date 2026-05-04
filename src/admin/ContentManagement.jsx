import React, { useState } from 'react';
import { 
  MdAdd, MdSearch, MdMoreVert, MdEdit, MdDeleteOutline, 
  MdBook, MdAttachMoney, MdTimeline, MdPeople,
  MdViewList, MdGridView, MdTrendingUp, MdKeyboardArrowLeft
} from 'react-icons/md';

function ContentManagement() {
  const [search, setSearch] = useState("");

  const courses = [
    { 
      id: 1, 
      title: 'تحفيظ القرآن الكريم', 
      type: 'أساسي', 
      desc: 'برنامج مكثف لحفظ وتثبيت القرآن الكريم مع مراجعة دورية للأجزاء المحفوظة.',
      sessions: '24 حصة / شهر', 
      students: '1,200 طالب', 
      price: '250 ر.س',
      color: 'emerald'
    },
    { 
      id: 2, 
      title: 'أحكام التجويد', 
      type: 'متقدم', 
      desc: 'إتقان مخارج الحروف والصفات مع التطبيق العملي للنظم والمتون العلمية.',
      sessions: '12 حصة / شهر', 
      students: '850 طالب', 
      price: '180 ر.س',
      color: 'blue'
    },
    { 
      id: 3, 
      title: 'تفسير القرآن', 
      type: 'نظري', 
      desc: 'فهم معاني الآيات وأسباب النزول من أمهات كتب التفسير المعتمدة.',
      sessions: '8 حصص / شهر', 
      students: '420 طالب', 
      price: '150 ر.س',
      color: 'amber'
    },
  ];

  return (
    <main className="flex-1 flex flex-col px-4 md:px-8 py-6 bg-gray-50/50" dir="rtl">
      
      {/* 🟢 Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div className="text-right">
          <h1 className="text-3xl font-black text-gray-900 mb-2">إدارة المحتوى التعليمي</h1>
          <p className="text-gray-500 font-medium">تنظيم وتحديث المسارات التعليمية، المناهج، والتسعير العالمي</p>
        </div>
        
        <div className="flex gap-4">
          <div className="relative w-64 md:w-80">
            <MdSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <input 
              type="text" 
              placeholder="بحث في المسارات..." 
              className="w-full pr-12 pl-4 py-3.5 bg-white border border-gray-100 rounded-2xl shadow-sm outline-none focus:ring-4 focus:ring-emerald-50 transition-all text-sm font-medium"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-emerald-700 text-white rounded-2xl font-black hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-100">
            <MdAdd size={20} />
            إضافة مسار
          </button>
        </div>
      </div>

      {/* 📊 Content Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-gray-100 text-center relative group hover:shadow-xl transition-all">
          <span className="absolute top-6 right-6 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-widest">نشط الآن</span>
          <h2 className="text-5xl font-black text-emerald-800 mb-2 group-hover:scale-110 transition-transform">12</h2>
          <p className="text-xs font-black text-gray-400 uppercase tracking-widest">إجمالي المسارات التعليمية</p>
        </div>

        <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-gray-100 flex items-center justify-between group hover:shadow-xl transition-all">
          <div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">معدل إقبال الطلاب</p>
            <h2 className="text-3xl font-black text-gray-900">+24%</h2>
            <div className="flex items-center gap-1 text-xs font-bold text-emerald-600 mt-2">
              <MdTrendingUp />
              <span>ارتفاع ملحوظ</span>
            </div>
          </div>
          <div className="w-16 h-16 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center text-3xl transition-transform group-hover:rotate-12">
            <MdTimeline />
          </div>
        </div>

        <div className="bg-emerald-900 p-8 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
              <MdAttachMoney size={32} className="text-emerald-400" />
              <p className="text-[10px] font-black text-emerald-300 uppercase tracking-widest">المسار الأكثر مبيعاً</p>
            </div>
            <h2 className="text-2xl font-black mb-2">تجويد متقدم</h2>
            <p className="text-xs font-medium text-emerald-200">حقق أعلى إيرادات هذا الشهر بنسبة 45%</p>
          </div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-emerald-800 rounded-full blur-3xl opacity-50 group-hover:scale-125 transition-transform duration-700" />
        </div>
      </div>

      {/* 📋 Paths List */}
      <div className="flex items-center justify-between px-4 mb-8">
        <h2 className="text-2xl font-black text-gray-800 flex items-center gap-3">
          <span className="w-2 h-8 bg-emerald-600 rounded-full" />
          المسارات التعليمية الحالية
        </h2>
        <div className="flex bg-gray-50 p-1.5 rounded-2xl border border-gray-100">
          <button className="p-2.5 text-gray-400 hover:text-emerald-700 hover:bg-white hover:shadow-sm rounded-xl transition-all"><MdGridView size={22} /></button>
          <button className="p-2.5 text-emerald-700 bg-white shadow-sm rounded-xl transition-all"><MdViewList size={22} /></button>
        </div>
      </div>

      <div className="space-y-6">
        {courses.map((course) => (
          <div key={course.id} className="group bg-white p-8 rounded-[3rem] shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center hover:shadow-2xl transition-all relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-8 flex-1 w-full">
              <div className={`w-24 h-24 rounded-[2rem] flex items-center justify-center text-4xl shadow-sm transition-transform group-hover:scale-110
                ${course.color === 'emerald' ? 'bg-emerald-50 text-emerald-700' : 
                  course.color === 'blue' ? 'bg-blue-50 text-blue-700' : 'bg-amber-50 text-amber-700'}`}>
                <MdBook />
              </div>
              <div className="text-center md:text-right flex-1">
                <div className="flex flex-col md:flex-row items-center gap-3 mb-2 justify-center md:justify-start">
                  <h3 className="text-2xl font-black text-gray-900 group-hover:text-emerald-700 transition-colors">{course.title}</h3>
                  <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest
                    ${course.color === 'emerald' ? 'bg-emerald-100 text-emerald-700' : 
                      course.color === 'blue' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'}`}>
                    {course.type}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-400 max-w-xl mb-6">{course.desc}</p>
                <div className="flex items-center gap-6 justify-center md:justify-start">
                  <span className="flex items-center gap-1.5 text-xs font-black text-gray-400">
                    <MdTimeline className="text-emerald-600" /> {course.sessions}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-black text-gray-400">
                    <MdPeople className="text-emerald-600" /> {course.students}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end gap-6 w-full md:w-64 md:border-r border-gray-100 md:pr-10 mt-8 md:mt-0">
              <div className="text-center md:text-right">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">رسوم التسجيل</p>
                <h4 className="text-3xl font-black text-emerald-700">{course.price}</h4>
              </div>
              <div className="flex gap-3">
                <button className="p-3 bg-gray-50 rounded-2xl text-gray-400 hover:bg-emerald-50 hover:text-emerald-700 transition-all shadow-sm"><MdEdit size={20} /></button>
                <button className="p-3 bg-gray-50 rounded-2xl text-gray-400 hover:bg-red-50 hover:text-red-600 transition-all shadow-sm"><MdDeleteOutline size={20} /></button>
                <button className="p-3 bg-gray-50 rounded-2xl text-gray-400 hover:text-gray-900 transition-all shadow-sm"><MdMoreVert size={20} /></button>
              </div>
            </div>
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50/50 rounded-full -translate-x-16 -translate-y-16 blur-3xl opacity-50" />
          </div>
        ))}
      </div>

      {/* 🚀 Global Pricing Update Card */}
      <div className="mt-12 bg-emerald-900 p-10 rounded-[3.5rem] shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="relative z-10 text-center md:text-right max-w-2xl">
          <h3 className="text-2xl font-black text-white mb-2">تحديث التسعير الجماعي</h3>
          <p className="text-sm font-medium text-emerald-200 leading-relaxed">يمكنك تحديث أسعار جميع المسارات التعليمية بنسبة مئوية محددة أو مبالغ ثابتة بناءً على العروض الموسمية أو الخصومات الخاصة بالمنصة.</p>
        </div>
        <button className="relative z-10 px-10 py-5 bg-white text-emerald-900 rounded-[2rem] font-black shadow-xl hover:scale-105 transition-all flex items-center gap-3">
          تعديل الأسعار الجماعي
          <MdKeyboardArrowLeft size={24} />
        </button>
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-emerald-800 rounded-full blur-[100px] opacity-50" />
      </div>
    </main>
  );
}

export default ContentManagement;
