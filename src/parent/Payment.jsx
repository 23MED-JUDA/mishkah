import React, { useState } from "react";
import { 
  MdAccountBalanceWallet, MdCreditCard, MdPayment, 
  MdCheckCircle, MdOutlineShield, MdReceipt,
  MdOutlineInfo, MdPerson, MdKeyboardArrowLeft
} from "react-icons/md";
import { FaCcVisa, FaCcMastercard, FaMobileAlt } from "react-icons/fa";

function Payment() {
  const [balance] = useState(0);
  const [students, setStudents] = useState([
    { id: 1, name: "أحمد محمد علي", level: "التمهيدي", avatar: "A", selectedPath: "مسار التجويد", price: 250 },
    { id: 2, name: "سارة محمد علي", level: "المتوسط", avatar: "S", selectedPath: "مسار الحفظ", price: 250 },
  ]);

  const paths = [
    { name: "مسار الحفظ", icon: "📖", price: 250 },
    { name: "مسار التجويد", icon: "🎧", price: 250 },
    { name: "مسار التفسير", icon: "📜", price: 250 },
  ];

  const paymentMethods = [
    { id: 1, name: "فودافون كاش", type: "vodafone", icon: <FaMobileAlt />, color: "red" },
    { id: 2, name: "بطاقة بنكية", type: "card", icon: <MdCreditCard />, color: "emerald" },
    { id: 3, name: "إنستا باي", type: "instapay", label: "IP", color: "blue" },
  ];

  const [selectedPayment, setSelectedPayment] = useState("vodafone");

  const selectPath = (studentId, pathName) => {
    setStudents(students.map(s => s.id === studentId ? { ...s, selectedPath: pathName } : s));
  };

  const handleConfirm = () => {
    alert("جاري تحويلك لبوابة الدفع المؤمنة...");
  };

  const total = students.reduce((acc, s) => acc + s.price, 0) + 15;

  return (
    <main className="flex-1 flex flex-col px-4 md:px-8 py-6 bg-gray-50/50" dir="rtl">
      
      {/* 🟢 Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div className="text-right">
          <h1 className="text-3xl font-black text-gray-900 mb-2">الاشتراك والدفع</h1>
          <p className="text-gray-500 font-medium">إدارة مسارات أبنائك وإتمام عملية الدفع بأمان وسهولة</p>
        </div>
        
        <div className="bg-white px-8 py-4 rounded-[2rem] shadow-sm border border-gray-100 flex items-center gap-4 group">
          <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
            <MdAccountBalanceWallet />
          </div>
          <div className="text-right">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">الرصيد الحالي</p>
            <p className="text-xl font-black text-gray-900">{balance} ج.م</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* 💳 Left Section: Payment Summary */}
        <div className="lg:col-span-1 space-y-6 lg:order-last">
          <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-gray-100 relative overflow-hidden">
            <h3 className="text-xl font-black text-gray-800 mb-8 flex items-center gap-2">
              <MdReceipt className="text-emerald-600" />
              ملخص الاشتراك
            </h3>
            
            <div className="space-y-6 mb-8">
              {students.map((s) => (
                <div key={s.id} className="flex justify-between items-center group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center font-black text-gray-400 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors">{s.avatar}</div>
                    <div>
                      <p className="text-sm font-black text-gray-800">{s.name}</p>
                      <p className="text-[10px] font-bold text-gray-400">{s.selectedPath}</p>
                    </div>
                  </div>
                  <span className="font-black text-gray-900">{s.price} ج.م</span>
                </div>
              ))}
              
              <div className="flex justify-between items-center text-gray-400 font-bold text-sm">
                <span>رسوم إدارية</span>
                <span>15 ج.م</span>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-black text-gray-900">الإجمالي</span>
                <span className="text-2xl font-black text-emerald-700">{total} ج.م</span>
              </div>
              <p className="text-[10px] text-gray-400 font-bold text-center">شامل ضريبة القيمة المضافة</p>
            </div>

            <button 
              onClick={handleConfirm}
              className="w-full py-4 bg-emerald-700 text-white rounded-2xl font-black text-sm shadow-xl shadow-emerald-100 hover:bg-emerald-800 transition-all flex items-center justify-center gap-2"
            >
              <MdPayment size={20} />
              تأكيد الدفع والاشتراك
            </button>
            
            <div className="mt-6 flex items-center justify-center gap-2 text-gray-400 font-black text-[10px] uppercase tracking-widest">
              <MdOutlineShield size={16} />
              جميع المدفوعات مؤمنة ومشفرة
            </div>
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50/50 rounded-full -translate-x-16 -translate-y-16 blur-3xl opacity-50" />
          </div>

          <div className="bg-blue-900 p-8 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
            <div className="relative z-10">
              <MdOutlineInfo size={32} className="text-blue-400 mb-4" />
              <h4 className="text-lg font-black mb-2">لماذا تشترك؟</h4>
              <p className="text-xs font-medium text-blue-200 leading-relaxed mb-6">الاشتراك يمنح أبناءك وصولاً كاملاً للحلقات المباشرة، التقارير الأسبوعية، والمكتبة القرآنية الشاملة.</p>
              <button className="text-white font-black text-xs hover:underline">اعرف المزيد عن المميزات</button>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-800 rounded-full blur-3xl opacity-50" />
          </div>
        </div>

        {/* 👥 Right Section: Student Management & Payment Methods */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Student Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {students.map((student) => (
              <div key={student.id} className="bg-white p-8 rounded-[3rem] shadow-sm border border-gray-100 group">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gray-50 rounded-[1.5rem] flex items-center justify-center text-2xl font-black text-gray-400 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-all">{student.avatar}</div>
                  <div>
                    <h4 className="text-xl font-black text-gray-900">{student.name}</h4>
                    <p className="text-sm text-gray-400 font-bold">المستوى: {student.level}</p>
                  </div>
                </div>

                <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4 mr-2">اختر المسار التعليمي</p>
                <div className="space-y-3">
                  {paths.map((p) => (
                    <button 
                      key={p.name}
                      onClick={() => selectPath(student.id, p.name)}
                      className={`w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all
                        ${student.selectedPath === p.name 
                          ? 'border-emerald-600 bg-emerald-50/50' 
                          : 'border-transparent bg-gray-50 hover:bg-white hover:border-gray-200'}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{p.icon}</span>
                        <span className={`text-sm font-black ${student.selectedPath === p.name ? 'text-emerald-700' : 'text-gray-600'}`}>{p.name}</span>
                      </div>
                      {student.selectedPath === p.name && <MdCheckCircle className="text-emerald-600" size={20} />}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Payment Method Selection */}
          <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 relative overflow-hidden">
            <h3 className="text-xl font-black text-gray-800 mb-8">اختر طريقة الدفع</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {paymentMethods.map((method) => (
                <button 
                  key={method.id}
                  onClick={() => setSelectedPayment(method.type)}
                  className={`p-8 rounded-[2rem] border-2 transition-all flex flex-col items-center justify-center gap-4 group
                    ${selectedPayment === method.type 
                      ? 'border-emerald-600 bg-emerald-50/50' 
                      : 'border-transparent bg-gray-50 hover:bg-white hover:border-gray-200 hover:shadow-xl'}`}
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl transition-transform group-hover:scale-110
                    ${selectedPayment === method.type ? 'bg-white text-emerald-700 shadow-sm' : 'bg-white text-gray-400 shadow-sm'}`}>
                    {method.label ? <span className="text-xs font-black">{method.label}</span> : method.icon}
                  </div>
                  <span className={`text-sm font-black ${selectedPayment === method.type ? 'text-emerald-700' : 'text-gray-500'}`}>{method.name}</span>
                  {selectedPayment === method.type && (
                    <div className="absolute top-4 left-4 text-emerald-600">
                      <MdCheckCircle size={20} />
                    </div>
                  )}
                </button>
              ))}
            </div>
            
            <div className="mt-10 p-6 bg-gray-50 rounded-[2rem] border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <FaCcVisa className="text-3xl text-gray-300" />
                  <FaCcMastercard className="text-3xl text-gray-300" />
                </div>
                <p className="text-xs font-bold text-gray-400">نقبل جميع البطاقات البنكية والمحافظ الإلكترونية</p>
              </div>
              <button className="text-emerald-700 font-black text-sm flex items-center gap-1 hover:underline">
                شروط وأحكام الاستخدام
                <MdKeyboardArrowLeft size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Payment;