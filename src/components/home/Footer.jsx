import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Logo from '../Logo';

function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 text-right">
        
        <div className="col-span-1 md:col-span-1">
          <div className="mb-4">
            <Logo />
          </div>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            منصة مشكاة لتعليم القرآن الكريم والتجويد والتفسير. نسعى لنشر العلم الشرعي بأسلوب عصري وميسر لجميع الفئات والأعمار.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-gray-800 mb-4">روابط سريعة</h3>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><a href="#" className="hover:text-emerald-600 transition-colors">عن المنصة</a></li>
            <li><a href="#" className="hover:text-emerald-600 transition-colors">البرامج التعليمية</a></li>
            <li><a href="#" className="hover:text-emerald-600 transition-colors">المعلمون</a></li>
            <li><a href="#" className="hover:text-emerald-600 transition-colors">الأسئلة الشائعة</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-gray-800 mb-4">المساعدة</h3>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><a href="#" className="hover:text-emerald-600 transition-colors">شروط الاستخدام</a></li>
            <li><a href="#" className="hover:text-emerald-600 transition-colors">سياسة الخصوصية</a></li>
            <li><a href="#" className="hover:text-emerald-600 transition-colors">طرق الدفع</a></li>
            <li><a href="#" className="hover:text-emerald-600 transition-colors">تواصل معنا</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-gray-800 mb-4">تواصل معنا</h3>
          <ul className="space-y-3 text-sm text-gray-500">
            <li className="flex items-center gap-2">
              <span className="text-emerald-600 text-lg">📧</span> info@mishkat.com
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-600 text-lg">📞</span> +20 123 456 7890
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-600 text-lg">📍</span> القاهرة، مصر
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-100 pt-8 text-center text-gray-400 text-sm">
        <p>جميع الحقوق محفوظة منصة مشكاة © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
