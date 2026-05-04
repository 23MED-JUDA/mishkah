import React, { useState } from "react";
import { 
  MdEdit, MdDelete, MdVisibility, MdPersonAdd, 
  MdSearch, MdFilterList, MdSort, MdFileDownload 
} from "react-icons/md";

function StudentsPage() {
  const [students, setStudents] = useState([
    { id: "STD-40291", name: "أحمد علي منصور", track: "حفظ القرآن المكثف", level: "المستوى 4", joinDate: "2024-01-15", status: "نشط" },
    { id: "STD-31822", name: "خالد محمود إبراهيم", track: "التجويد والإتقان", level: "المستوى 2", joinDate: "2024-02-10", status: "نشط" },
    { id: "STD-55120", name: "سعد إبراهيم الصاوي", track: "حفظ القرآن المكثف", level: "المستوى 1", joinDate: "2024-03-05", status: "متوقف" },
    { id: "STD-12983", name: "محمد يوسف", track: "القراءات العشر", level: "المستوى 3", joinDate: "2024-01-20", status: "نشط" },
  ]);

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", track: "", level: "المستوى 1" });
  const [editId, setEditId] = useState(null);

  const filtered = students.filter(
    (s) => s.name.includes(search) || s.id.includes(search)
  );

  const handleSave = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.track) return;

    if (editId) {
      setStudents(students.map((s) => (s.id === editId ? { ...s, ...formData } : s)));
      setEditId(null);
    } else {
      setStudents([
        ...students,
        {
          id: "STD-" + Math.floor(Math.random() * 100000),
          ...formData,
          joinDate: new Date().toISOString().split('T')[0],
          status: "نشط"
        },
      ]);
    }

    setFormData({ name: "", track: "", level: "المستوى 1" });
    setShowForm(false);
  };

  const deleteStudent = (id) => {
    if(window.confirm("هل أنت متأكد من حذف هذا الطالب؟")) {
      setStudents(students.filter((s) => s.id !== id));
    }
  };

  const editStudent = (s) => {
    setFormData({ name: s.name, track: s.track, level: s.level });
    setEditId(s.id);
    setShowForm(true);
  };

  return (
    <main className="flex-1 flex flex-col px-4 md:px-8 py-6 bg-gray-50/50" dir="rtl">
      
      {/* 🟢 Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div className="text-right">
          <h1 className="text-3xl font-black text-gray-900 mb-2">إدارة الطلاب</h1>
          <p className="text-gray-500 font-medium">لديك {students.length} طالباً مسجلاً في حلقاتك حالياً</p>
        </div>
        
        <div className="flex gap-3">
          <button 
            className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-100 rounded-2xl text-gray-600 font-bold hover:bg-gray-50 transition-all shadow-sm"
          >
            <MdFileDownload size={20} />
            تصدير القائمة
          </button>
          <button 
            onClick={() => { setShowForm(true); setEditId(null); setFormData({ name: "", track: "", level: "المستوى 1" }); }}
            className="flex items-center gap-2 px-6 py-2.5 bg-emerald-700 text-white rounded-2xl font-black hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-100"
          >
            <MdPersonAdd size={20} />
            طالب جديد
          </button>
        </div>
      </div>

      {/* 🔍 Filter Bar */}
      <div className="bg-white p-4 rounded-[2rem] shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row gap-4 items-center">
        <div className="flex-1 relative w-full">
          <MdSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
          <input 
            type="text" 
            placeholder="البحث عن طريق الاسم، الرقم التعريفي..." 
            className="w-full pr-12 pl-4 py-3 bg-gray-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500/20 text-sm font-bold"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <button className="p-3 bg-gray-50 rounded-2xl text-gray-400 hover:text-emerald-700 transition-all"><MdFilterList size={20} /></button>
          <button className="p-3 bg-gray-50 rounded-2xl text-gray-400 hover:text-emerald-700 transition-all"><MdSort size={20} /></button>
        </div>
      </div>

      {/* 📝 Add/Edit Modal (Overlay) */}
      {showForm && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[3rem] w-full max-w-lg p-10 shadow-2xl animate-in fade-in zoom-in duration-300">
            <h3 className="text-2xl font-black text-gray-900 mb-8 text-right">
              {editId ? "تعديل بيانات طالب" : "إضافة طالب جديد"}
            </h3>
            <form onSubmit={handleSave} className="space-y-6">
              <div className="space-y-2 text-right">
                <label className="text-sm font-black text-gray-700 mr-2">اسم الطالب</label>
                <input 
                  autoFocus
                  className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500/20 font-bold"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="أدخل الاسم الرباعي للطالب"
                />
              </div>
              <div className="space-y-2 text-right">
                <label className="text-sm font-black text-gray-700 mr-2">المسار التعليمي</label>
                <select 
                  className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500/20 font-bold appearance-none"
                  value={formData.track}
                  onChange={(e) => setFormData({...formData, track: e.target.value})}
                >
                  <option value="">اختر المسار...</option>
                  <option value="حفظ القرآن المكثف">حفظ القرآن المكثف</option>
                  <option value="التجويد والإتقان">التجويد والإتقان</option>
                  <option value="القراءات العشر">القراءات العشر</option>
                </select>
              </div>
              <div className="space-y-2 text-right">
                <label className="text-sm font-black text-gray-700 mr-2">المستوى الحالي</label>
                <div className="grid grid-cols-4 gap-2">
                  {["1", "2", "3", "4"].map(num => (
                    <button 
                      key={num}
                      type="button"
                      onClick={() => setFormData({...formData, level: `المستوى ${num}`})}
                      className={`py-3 rounded-xl font-bold transition-all ${formData.level === `المستوى ${num}` ? 'bg-emerald-700 text-white shadow-lg shadow-emerald-100' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 pt-6">
                <button 
                  type="submit"
                  className="flex-1 py-4 bg-emerald-700 text-white rounded-2xl font-black shadow-xl shadow-emerald-100 hover:bg-emerald-800 transition-all"
                >
                  {editId ? "تحديث البيانات" : "إضافة الطالب"}
                </button>
                <button 
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 py-4 bg-gray-50 text-gray-500 rounded-2xl font-black hover:bg-gray-100 transition-all"
                >
                  إلغاء
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 📊 Students Table */}
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-right border-collapse">
          <thead>
            <tr className="bg-emerald-50/50 border-b border-gray-50">
              <th className="px-8 py-5 text-sm font-black text-emerald-800">الطالب</th>
              <th className="px-8 py-5 text-sm font-black text-emerald-800">المسار</th>
              <th className="px-8 py-5 text-sm font-black text-emerald-800">المستوى</th>
              <th className="px-8 py-5 text-sm font-black text-emerald-800">تاريخ الانضمام</th>
              <th className="px-8 py-5 text-sm font-black text-emerald-800">الحالة</th>
              <th className="px-8 py-5 text-sm font-black text-emerald-800">الإجراءات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filtered.map((s) => (
              <tr key={s.id} className="group hover:bg-gray-50/50 transition-all">
                <td className="px-8 py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center font-black">
                      {s.name[0]}
                    </div>
                    <div>
                      <p className="font-black text-gray-800">{s.name}</p>
                      <p className="text-[10px] text-gray-400 font-bold">{s.id}</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-5 text-sm font-bold text-gray-600">{s.track}</td>
                <td className="px-8 py-5 text-sm font-black text-emerald-700">{s.level}</td>
                <td className="px-8 py-5 text-sm font-bold text-gray-400">{s.joinDate}</td>
                <td className="px-8 py-5">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black ${s.status === 'نشط' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                    {s.status}
                  </span>
                </td>
                <td className="px-8 py-5">
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => editStudent(s)}
                      className="p-2.5 bg-gray-50 rounded-xl text-gray-400 hover:bg-emerald-50 hover:text-emerald-700 transition-all"
                    >
                      <MdEdit size={18} />
                    </button>
                    <button 
                      onClick={() => deleteStudent(s.id)}
                      className="p-2.5 bg-gray-50 rounded-xl text-gray-400 hover:bg-red-50 hover:text-red-600 transition-all"
                    >
                      <MdDelete size={18} />
                    </button>
                    <button className="p-2.5 bg-gray-50 rounded-xl text-gray-400 hover:bg-blue-50 hover:text-blue-600 transition-all">
                      <MdVisibility size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <MdSearch size={60} className="mx-auto text-gray-100 mb-4" />
            <p className="text-gray-400 font-bold">لا يوجد طلاب يطابقون بحثك حالياً</p>
          </div>
        )}
      </div>

      <div className="mt-8 flex justify-between items-center px-4">
        <p className="text-sm font-bold text-gray-400">عرض {filtered.length} من {students.length} طالب</p>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white border border-gray-100 rounded-xl text-sm font-bold text-gray-400 cursor-not-allowed">السابق</button>
          <button className="px-4 py-2 bg-white border border-gray-100 rounded-xl text-sm font-bold text-emerald-700 hover:bg-emerald-50 transition-all">التالي</button>
        </div>
      </div>
    </main>
  );
}

export default StudentsPage;