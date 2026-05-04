import { FaHome, FaBook, FaChalkboardTeacher, FaMoneyBill, FaInfoCircle } from "react-icons/fa";
import { MdQuiz, MdLogout } from "react-icons/md";
import { FaUserGraduate, FaUserTie } from "react-icons/fa";

import { MdSchool, MdPerson, MdPeopleAlt, MdAssignment, MdReport, MdLibraryBooks, MdHome } from 'react-icons/md';

// الروابط الرئيسية
const NavLink = [
  { id: 1, name: 'الرئيسية', path: '/', icon: <FaHome /> },
  { id: 2, name: 'المسارات', path: '/aitypes', icon: <FaBook /> },
  { id: 4, name: 'الباقات', path: '/contact', icon: <FaMoneyBill /> },
  { id: 3, name: 'المعلمين', path: '/teachers', icon: <FaChalkboardTeacher /> },
  { id: 8, name: 'من نحن', path: '/about', icon: <FaInfoCircle /> },



];
const Links = [
  { id: 1, name: 'الرئيسية', path: '/', icon: <FaHome /> },
  { id: 2, name: 'المسارات', path: '/aitypes', icon: <FaBook /> },
  { id: 3, name: 'المعلمين', path: '/teachers', icon: <FaChalkboardTeacher /> },
  { id: 4, name: 'الباقات', path: '/contact', icon: <FaMoneyBill /> },
  { id: 6, name: 'الامتحانات', path: '/exams', icon: <MdQuiz /> },
  { id: 7, name: 'الغياب', path: '/attendance', icon: <FaBook /> },
  { id: 8, name: 'من نحن', path: '/about', icon: <FaInfoCircle /> },
  { id: 9, name: 'تسجيل خروج', path: '/signout', icon: <MdLogout /> },
];

// الروابط الفرعية / الأطفال
const children = [
  { id: 1, name: 'الامتحانات', path: '/exams', icon: <MdQuiz /> },
  { id: 2, name: 'الغياب', path: '/attendance', icon: <FaBook /> },
  { id: 3, name: 'تسجيل خروج', path: '/signout', icon: <MdLogout /> },
];

// جهات الاتصال / أنواع المستخدمين
const Contact = [
  { name: "طالب", icon: <FaUserGraduate /> },
  { name: "معلم", icon: <FaChalkboardTeacher /> },
  { name: "ولي أمر", icon: <FaUserTie /> },
];

// المعلمين
const teachersData = [
  {
    id: 1,
    name: "محمود خالد",
    age: 28,
    img: null
  },
  {
    id: 2,
    name: "محمد حسن",
    age: 35,
    img: null
  },
  {
    id: 3,
    name: "أحمد علي",
    age: 30,
    img: null
  },
  {
    id: 4,
    name: "إبراهيم محمود",
    age: 42,
    img: null
  },
  {
    id: 5,
    name: "ياسين عبدالله",
    age: 38,
    img: null
  },
  {
    id: 6,
    name: "عمر الفاروق",
    age: 45,
    img: null
  }
];



// ../assets/index.js
export const countries = [
  "مصر", "السعودية", "الإمارات", "الكويت", "قطر",
  "البحرين", "عمان", "العراق", "الأردن", "لبنان",
  "فلسطين", "سوريا", "اليمن", "السودان", "ليبيا",
  "تونس", "الجزائر", "المغرب"
];


// روابط Navbar عامة
export const link = [
  { id: 1, name: 'الرئيسية', path: '/', icon: <MdHome /> },
];

// // روابط Sidebar حسب نوع المستخدم
// export const childLinks = [
//   // الطالب
//   { id: 1, name: 'امتحان', path: 'student/exam', icon: <MdAssignment />, type: 'student' },
//   { id: 2, name: 'المقررات', path: '/dashboard/student/courses', icon: <MdLibraryBooks />, type: 'student' },

//   // المعلم
//   { id: 3, name: 'الباقات', path: '/dashboard/teacher/packages', icon: <MdLibraryBooks />, type: 'teacher' },
//   { id: 4, name: 'الطلاب', path: '/dashboard/teacher/students', icon: <MdPeopleAlt />, type: 'teacher' },

//   // ولي الأمر
//   { id: 5, name: 'التقارير', path: '/dashboard/parent/reports', icon: <MdReport />, type: 'parent' },
//   { id: 6, name: 'متابعة الطالب', path: '/dashboard/parent/student', icon: <MdPerson />, type: 'parent' },
// ];

export {
  Links,
  children,
  Contact,
  teachersData,
  NavLink,
  
};