import React, { useEffect, useState } from "react";
import { 
  MdAssignment, MdCheckCircle, MdAccessTime, MdError, 
  MdMic, MdQuiz, MdMenuBook, MdSearch, MdNotificationsNone 
} from "react-icons/md";
import { FaHeart, FaQuestionCircle } from "react-icons/fa";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    // 🧪 Mock Data for Demonstration
    setTasks([
      {
        id: 1,
        title: "مراجعة سورة البقرة",
        desc: "من الآية 1 إلى 50 - حفظاً وتجويداً",
        status: "عاجل",
        teacher: "الشيخ أحمد علي",
        deadline: "ينتهي غداً",
        type: "book",
        completed: false,
      },
      {
        id: 2,
        title: "اختبار التجويد الاسبوعي",
        desc: "أحكام النون الساكنة",
        status: "اعتيادي",
        questions: 10,
        deadline: "بعد 3 أيام",
        type: "exam",
        completed: false,
      },
      {
        id: 3,
        title: "تسجيل تلاوة",
        desc: "تسجيل صوتي 3 دقائق",
        status: "متأخر",
        duration: "5 دقائق",
        deadline: "منذ أمس",
        type: "audio",
        completed: false,
      },
      {
        id: 4,
        title: "حفظ سورة الكهف",
        desc: "أول 10 آيات",
        status: "اعتيادي",
        teacher: "الشيخ محمود",
        deadline: "بعد يومين",
        type: "book",
        completed: true,
      }
    ]);

    setUpcoming([
      {
        id: 1,
        title: "حلقة التلاوة الصباحية",
        teacher: "الشيخ محمود",
        time: "08:00 ص",
        day: "24",
        month: "أكتوبر",
      },
      {
        id: 2,
        title: "شرح متن الجزرية",
        teacher: "قاعة ب",
        time: "04:30 م",
        day: "26",
        month: "أكتوبر",
      },
    ]);
  }, []);

  const handleToggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title.includes(search);
    if (filter === "completed") return matchesSearch && task.completed;
    if (filter === "pending") return matchesSearch && !task.completed;
    return matchesSearch;
  });

  const completedCount = tasks.filter((t) => t.completed).length;
  const progress = Math.round((completedCount / tasks.length) * 100) || 0;

  return (
    <main className="flex-1 flex flex-col px-4 md:px-8 py-6 bg-gray-50/50" dir="rtl">
      
      {/* 🟢 Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="text-right">
          <h1 className="text-3xl font-black text-gray-900 mb-2">مهامك التعليمية</h1>
          <p className="text-gray-500 font-medium">لديك {tasks.length - completedCount} مهام متبقية لإنجازها اليوم</p>
        </div>
        
        <div className="flex gap-3">
          <button 
            onClick={() => setFilter("all")}
            className={`px-6 py-2.5 rounded-2xl font-bold transition-all ${filter === 'all' ? 'bg-emerald-700 text-white shadow-lg shadow-emerald-200' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
          >
            الكل
          </button>
          <button 
            onClick={() => setFilter("pending")}
            className={`px-6 py-2.5 rounded-2xl font-bold transition-all ${filter === 'pending' ? 'bg-emerald-700 text-white shadow-lg shadow-emerald-200' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
          >
            قيد التنفيذ
          </button>
          <button 
            onClick={() => setFilter("completed")}
            className={`px-6 py-2.5 rounded-2xl font-bold transition-all ${filter === 'completed' ? 'bg-emerald-700 text-white shadow-lg shadow-emerald-200' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
          >
            المكتملة
          </button>
        </div>
      </div>

      {/* 📊 Stats Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <StatCard 
          icon={<MdAssignment className="text-emerald-600" />} 
          label="إجمالي المهام" 
          value={tasks.length} 
          color="emerald"
        />
        <StatCard 
          icon={<MdAccessTime className="text-amber-600" />} 
          label="قيد التنفيذ" 
          value={tasks.length - completedCount} 
          color="amber"
        />
        <StatCard 
          icon={<MdCheckCircle className="text-blue-600" />} 
          label="مكتملة" 
          value={completedCount} 
          color="blue"
        />
      </div>

      {/* 🧩 Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* 🗓️ Sidebar: Upcoming & Progress */}
        <div className="lg:col-span-1 space-y-6">
          
          {/* Circular Progress Card */}
          <div className="bg-emerald-900 text-white rounded-[2rem] p-8 relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">تقدمك العام</h3>
              <p className="text-emerald-200 text-sm mb-6">أنت تبلي بلاءً حسناً!</p>
              
              <div className="flex items-center justify-center mb-6">
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <svg className="w-full h-full rotate-[-90deg]">
                    <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-emerald-800" />
                    <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white transition-all duration-1000" 
                      strokeDasharray={364} strokeDashoffset={364 - (364 * progress) / 100} strokeLinecap="round" />
                  </svg>
                  <span className="absolute text-2xl font-black">{progress}%</span>
                </div>
              </div>
              <button className="w-full py-3 bg-emerald-700/50 hover:bg-emerald-700 rounded-xl text-sm font-bold transition">عرض الإحصائيات</button>
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-800/30 rounded-full blur-3xl" />
          </div>

          {/* Upcoming Classes */}
          <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <button className="text-emerald-600 text-sm font-bold">الكل</button>
              <h3 className="font-black text-gray-800">حصص قادمة</h3>
            </div>
            
            <div className="space-y-4">
              {upcoming.map((item) => (
                <div key={item.id} className="group flex items-center gap-4 p-3 hover:bg-emerald-50 rounded-2xl transition-all cursor-pointer border border-transparent hover:border-emerald-100">
                  <div className="flex-1 text-right">
                    <h4 className="font-bold text-gray-800 text-sm group-hover:text-emerald-900">{item.title}</h4>
                    <p className="text-[10px] text-gray-400 font-medium">{item.teacher} • {item.time}</p>
                  </div>
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex flex-col items-center justify-center group-hover:bg-white transition-colors">
                    <span className="text-emerald-700 font-black text-sm">{item.day}</span>
                    <span className="text-[9px] text-gray-400 font-bold uppercase">{item.month}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 📝 Main: Task List */}
        <div className="lg:col-span-3">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-700">
              <MdAssignment size={20} />
            </div>
            <h3 className="text-xl font-black text-gray-800">قائمة المهام</h3>
          </div>

          <div className="space-y-4">
            {filteredTasks.map((task) => (
              <TaskItem 
                key={task.id} 
                task={task} 
                onToggle={() => handleToggleComplete(task.id)} 
              />
            ))}
            
            {filteredTasks.length === 0 && (
              <div className="text-center py-20 bg-white rounded-[2rem] border-2 border-dashed border-gray-200">
                <MdAssignment size={60} className="mx-auto text-gray-200 mb-4" />
                <p className="text-gray-400 font-bold">لا يوجد مهام تطابق بحثك</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

const StatCard = ({ icon, label, value, color }) => {
  const colors = {
    emerald: "bg-emerald-50 text-emerald-700",
    amber: "bg-amber-50 text-amber-700",
    blue: "bg-blue-50 text-blue-700"
  };
  return (
    <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex items-center justify-between group hover:shadow-md transition-all">
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${colors[color]}`}>
        {icon}
      </div>
      <div className="text-right">
        <p className="text-gray-400 text-sm font-bold mb-1">{label}</p>
        <h3 className="text-2xl font-black text-gray-900">{value}</h3>
      </div>
    </div>
  );
};

const TaskItem = ({ task, onToggle }) => {
  const getTypeIcon = (type) => {
    switch(type) {
      case 'audio': return <MdMic size={24} className="text-emerald-600" />;
      case 'exam': return <MdQuiz size={24} className="text-emerald-600" />;
      default: return <MdMenuBook size={24} className="text-emerald-600" />;
    }
  };

  return (
    <div className={`group bg-white p-6 rounded-[2rem] border-2 transition-all flex flex-col md:flex-row items-center gap-6 ${task.completed ? 'border-emerald-100 bg-emerald-50/20 opacity-75' : 'border-transparent hover:border-emerald-200 shadow-sm'}`}>
      
      {/* Checkbox */}
      <button 
        onClick={onToggle}
        className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${task.completed ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-gray-200 hover:border-emerald-400'}`}
      >
        {task.completed && <MdCheckCircle size={20} />}
      </button>

      {/* Icon */}
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${task.completed ? 'bg-white' : 'bg-gray-50 group-hover:bg-emerald-50'}`}>
        {getTypeIcon(task.type)}
      </div>

      {/* Content */}
      <div className="flex-1 text-center md:text-right">
        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1 justify-center md:justify-start">
          <h4 className={`text-lg font-black transition-all ${task.completed ? 'text-gray-400 line-through' : 'text-gray-800'}`}>
            {task.title}
          </h4>
          <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold w-fit mx-auto md:mx-0
            ${task.status === "عاجل" ? "bg-red-100 text-red-600" : "bg-gray-100 text-gray-500"}`}>
            {task.status}
          </span>
        </div>
        <p className="text-sm text-gray-400 font-medium leading-relaxed">{task.desc}</p>
      </div>

      {/* Action/Meta */}
      <div className="flex flex-col items-center md:items-end gap-3 min-w-[120px]">
        <span className="text-xs font-bold text-gray-400 flex items-center gap-1">
          <MdAccessTime size={14} />
          {task.deadline}
        </span>
        {!task.completed && (
          <button className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black rounded-xl shadow-lg shadow-emerald-200 transition-all active:scale-95">
            ابدأ الآن
          </button>
        )}
      </div>
    </div>
  );
};

export default Tasks;