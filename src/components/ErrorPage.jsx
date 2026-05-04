import React from 'react';

const ErrorPage = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center p-8" dir="rtl">
    <h1 className="text-6xl font-black text-emerald-600 mb-4">404</h1>
    <h2 className="text-2xl font-bold text-gray-800 mb-4">عذراً، الصفحة غير موجودة!</h2>
    <p className="text-gray-500 mb-8">يبدو أنك حاولت الدخول لرابط غير صحيح أو صفحة تمت إزالتها.</p>
    <a href="/" className="px-8 py-3 bg-emerald-700 text-white rounded-xl font-bold hover:bg-emerald-800 transition-all">
      العودة للرئيسية
    </a>
  </div>
);

export default ErrorPage;
