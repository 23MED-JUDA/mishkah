import React, { useState } from 'react';
import { NavLink as navLinks } from '../assets';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from './Logo';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();


  // 🎯 تحديد ما إذا كان الناف بار يجب أن يكون ثابتاً (فقط في الصفحة الرئيسية)
  const isHome = location.pathname === '/';

  return (
    <nav className={`${isHome ? 'fixed' : 'absolute'} top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-md border-b p-4 shadow-sm`}>

      <div className='flex justify-between items-center max-w-7xl mx-auto'>
        <Logo />

        <button className='md:hidden p-2 border rounded' onClick={() => setMenuOpen(!menuOpen)}>☰</button>

        <ul className='hidden md:flex gap-8'>
          {navLinks.map(link => (
            <li key={link.id}>
              <Link to={link.path} className='hover:text-blue-600 transition'>{link.name}</Link>
            </li>
          ))}
        </ul>

        <div className='hidden md:flex gap-3'>
          <button onClick={() => navigate('/login')} className='px-6 py-2.5 text-emerald-700 font-bold hover:bg-emerald-50 rounded-xl transition-all'>تسجيل دخول</button>
          <button onClick={() => navigate('/register')} className='px-6 py-2.5 bg-emerald-700 text-white rounded-xl font-bold hover:bg-emerald-800 shadow-lg shadow-emerald-100 transition-all'>إنشاء حساب</button>
        </div>
      </div>

      {menuOpen && (
        <ul className='flex flex-col mt-4 gap-2 md:hidden'>
          {navLinks.map(link => (
            <li key={link.id}>
              <Link to={link.path} onClick={() => setMenuOpen(false)} className='block px-3 py-2 rounded hover:bg-gray-200'>{link.name}</Link>
            </li>
          ))}
          <div className='flex flex-col gap-2 mt-2'>
            <button onClick={() => navigate('/login')} className='px-4 py-2 border rounded-lg'>تسجيل دخول</button>
            <button onClick={() => navigate('/register')} className='px-4 py-2 bg-emerald-700 text-white rounded-lg'>إنشاء حساب</button>
          </div>
        </ul>
      )}

    </nav>
  );
}

export default NavBar;