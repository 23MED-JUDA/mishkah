import React, { useState } from 'react';
import { 
  MdSearch, MdFileDownload, MdAccountBalanceWallet, MdError, 
  MdReceipt, MdHistory, MdCheckCircle, MdCancel,
  MdFilterList, MdTrendingUp, MdKeyboardArrowLeft, MdArrowBack, MdArrowForward
} from 'react-icons/md';

function SubscriptionsAdmin() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState('all');

  const transactions = [
    { id: 1, name: 'عبدالرحمن محمد خالد', invoice: '#MSK-8921', course: 'حلقة الإتقان (تجويد)', date: '14 أكتوبر 2023', amount: '350 ر.س', status: 'مكتمل', statusType: 'success' },
    { id: 2, name: 'فهد بن سلمان العتيبي', invoice: '#MSK-8854', course: 'مسار اللغة العربية', date: '12 أكتوبر 2023', amount: '420 ر.س', status: 'متأخر', statusType: 'late' },
    { id: 3, name: 'سارة إبراهيم الشريف', invoice: '#MSK-8910', course: 'تحفيظ الصغار', date: '10 أكتوبر 2023', amount: '280 ر.س', status: 'مكتمل', statusType: 'success' },
    { id: 4, name: 'يوسف عبدالله العمري', invoice: '#MSK-8722', course: 'القراءات العشر', date: '08 أكتوبر 2023', amount: '500 ر.س', status: 'فشل الدفع', statusType: 'failed' },
    { id: 5, name: 'نورة عبدالعزيز', invoice: '#MSK-8611', course: 'حلقة الإتقان (تجويد)', date: '05 أكتوبر 2023', amount: '350 ر.س', status: 'مكتمل', statusType: 'success' }
  ];

  return (
    <main className="flex-1 flex flex-col px-4 md:px-8 py-6 bg-gray-50/50" dir="rtl">
      
      {/* 🟢 Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div className="text-right">
          <h1 className="text-3xl font-black text-gray-900 mb-2">إدارة الاشتراكات والمالية</h1>
          <p className="text-gray-500 font-medium">متابعة التدفقات المالية، الفواتير، وحالات الدفع لجميع الطلاب</p>
        </div>
        
        <div className="w-full md:w-96 relative">
          <MdSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
          <input 
            type="text" 
            placeholder="بحث عن معاملة، فاتورة، اسم طالب..." 
            className="w-full pr-12 pl-4 py-3.5 bg-white border border-gray-100 rounded-2xl shadow-sm outline-none focus:ring-4 focus:ring-emerald-50 transition-all text-sm font-medium"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* 📊 Financial Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        <AdminFinanceCard label="الاشتراكات النشطة" val="1,240" trend="+12%" icon={<MdTrendingUp />} color="emerald" primary />
        <AdminFinanceCard label="إجمالي المدفوعات" val="45,000 ر.س" trend="من 154 معاملة" icon={<MdAccountBalanceWallet />} color="blue" />
        <AdminFinanceCard label="حالات متأخرة" val="18" trend="إجراء فوري مطلوب" icon={<MdError />} color="red" alert />
      </div>

      {/* 📋 Transactions Table */}
      <div className="bg-white rounded-[3rem] shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-8 border-b border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6 bg-gray-50/30">
          <div className="flex bg-white p-1.5 rounded-2xl border border-gray-100 shadow-sm w-full md:w-auto overflow-x-auto">
            {['كافة المعاملات', 'الاشتراكات النشطة', 'الفشل والتأخير', 'الفواتير المستحقة'].map((tab, i) => (
              <button 
                key={i} 
                onClick={() => setActiveTab(['all', 'active', 'failed', 'pending'][i])}
                className={`px-6 py-2.5 text-[10px] font-black rounded-xl transition-all whitespace-nowrap
                  ${(activeTab === 'all' && i === 0) || (activeTab === 'active' && i === 1) || (activeTab === 'failed' && i === 2) || (activeTab === 'pending' && i === 3)
                    ? 'bg-emerald-700 text-white shadow-lg shadow-emerald-100' : 'text-gray-400 hover:bg-white'}`}
              >
                {tab}
                {i === 2 && <span className="mr-2 px-1.5 py-0.5 bg-red-500 text-white rounded-full text-[8px]">3</span>}
              </button>
            ))}
          </div>

          <div className="flex gap-3">
            <button className="p-3 bg-white border border-gray-100 rounded-2xl text-gray-400 hover:text-emerald-700 transition-all shadow-sm"><MdFilterList size={22} /></button>
            <button className="flex items-center gap-2 px-6 py-2.5 bg-emerald-700 text-white rounded-2xl font-black hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-100">
              <MdFileDownload size={20} />
              تقرير مالي
            </button>
          </div>
        </div>

        <table className="w-full text-right border-collapse">
          <thead>
            <tr className="bg-gray-50/50">
              <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">الطالب والمعاملة</th>
              <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">المسار التعليمي</th>
              <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">التاريخ</th>
              <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">المبلغ</th>
              <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">الحالة</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {transactions.map((item, i) => (
              <tr key={i} className="group hover:bg-gray-50/50 transition-all">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl transition-transform group-hover:scale-110 shadow-sm
                      ${item.statusType === 'success' ? 'bg-emerald-50 text-emerald-700' : 
                        item.statusType === 'late' ? 'bg-amber-50 text-amber-700' : 'bg-red-50 text-red-700'}`}>
                      <MdReceipt />
                    </div>
                    <div>
                      <p className="text-lg font-black text-gray-900 mb-0.5">{item.name}</p>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">INV: {item.invoice}</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6 text-sm font-bold text-gray-600">{item.course}</td>
                <td className="px-8 py-6 text-center text-[10px] font-black text-gray-400 uppercase tracking-widest">{item.date}</td>
                <td className="px-8 py-6 text-center font-black text-gray-900">{item.amount}</td>
                <td className="px-8 py-6 text-center">
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase
                    ${item.statusType === 'success' ? 'bg-emerald-100 text-emerald-700' : 
                      item.statusType === 'late' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="p-8 bg-gray-50/30 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">عرض 5 معاملات من إجمالي 154</p>
          <div className="flex items-center gap-2">
            <button className="p-2.5 bg-white rounded-xl shadow-sm text-gray-400 hover:text-emerald-700 transition-all border border-gray-100"><MdArrowBack size={20} className="rotate-180" /></button>
            <button className="w-10 h-10 rounded-xl text-xs font-black bg-emerald-700 text-white shadow-lg shadow-emerald-100">1</button>
            <button className="w-10 h-10 rounded-xl text-xs font-black text-gray-400 bg-white border border-gray-100 hover:bg-gray-50">2</button>
            <span className="px-2 text-gray-300">...</span>
            <button className="p-2.5 bg-white rounded-xl shadow-sm text-gray-400 hover:text-emerald-700 transition-all border border-gray-100"><MdArrowForward size={20} className="rotate-180" /></button>
          </div>
        </div>
      </div>

      {/* 🚀 Financial Export Action */}
      <div className="mt-12 bg-emerald-900 p-10 rounded-[3.5rem] shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="relative z-10 text-center md:text-right max-w-2xl">
          <h3 className="text-2xl font-black text-white mb-2">تصدير التقارير الضريبية والمالية</h3>
          <p className="text-sm font-medium text-emerald-200 leading-relaxed">استخراج تقارير مفصلة لكل المسارات التعليمية، المعاملات البنكية، والخصومات المطبقة خلال الفترة المحددة بصيغة Excel أو PDF.</p>
        </div>
        <button className="relative z-10 px-10 py-5 bg-white text-emerald-900 rounded-[2rem] font-black shadow-xl hover:scale-105 transition-all flex items-center gap-3">
          تحميل التقرير المالي الكامل
          <MdKeyboardArrowLeft size={24} />
        </button>
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-emerald-800 rounded-full blur-[100px] opacity-50" />
      </div>
    </main>
  );
}

const AdminFinanceCard = ({ label, val, trend, icon, color, primary, alert }) => {
  const colors = {
    emerald: "bg-emerald-50 text-emerald-700 shadow-emerald-100",
    blue: "bg-blue-50 text-blue-700 shadow-blue-100",
    red: "bg-red-50 text-red-700 shadow-red-100"
  };

  return (
    <div className={`p-8 rounded-[3rem] shadow-sm border transition-all group hover:shadow-xl relative overflow-hidden bg-white
      ${alert ? 'border-red-100' : 'border-gray-100'}`}>
      <div className="flex justify-between items-start mb-6">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl transition-transform group-hover:scale-110 shadow-sm ${colors[color]}`}>
          {icon}
        </div>
        <span className={`px-2 py-0.5 rounded-lg text-[10px] font-black 
          ${alert ? 'bg-red-50 text-red-600 animate-pulse' : 'bg-emerald-50 text-emerald-600'}`}>
          {trend}
        </span>
      </div>
      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{label}</p>
      <h2 className={`text-3xl font-black ${alert ? 'text-red-700' : 'text-gray-900'}`}>{val}</h2>
      
      {primary && <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-emerald-50/50 rounded-full blur-3xl opacity-50 group-hover:scale-125 transition-transform duration-700" />}
    </div>
  );
};

export default SubscriptionsAdmin;
