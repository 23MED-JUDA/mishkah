import React from 'react';
import { FaBookOpen } from 'react-icons/fa';

function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg shrink-0">
        <FaBookOpen className="text-xl" />
      </div>
      <span className="font-bold text-2xl text-emerald-800 tracking-tight">
        مشكاة
      </span>
    </div>
  );
}

export default Logo;
