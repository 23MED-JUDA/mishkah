import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { AuthProvider } from './components/AuthProvider.jsx';
import App from './App.jsx';
import SignOut from './contact/SignOut.jsx';
import Login from './contact/Login.jsx';
import DashboardLayout from './components/DashboardLayout.jsx';
import CoursesPage from './student/CoursesPage.jsx';
import PackagesPage from './teacher/PackagesPage.jsx';
import StudentsPage from './teacher/StudentsPage.jsx';
import ReportsPage from './parent/ReportsPage.jsx';
import ExamPage from './components/qiz/ExamPage.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import Library from './teacher/Library.jsx';
import Reports from './teacher/Reports.jsx';
import Evaluation from './teacher/evaluation.jsx';
import ContactTeacher from './teacher/ContactTeacher.jsx';
import Profile from './student/Profile.jsx';
import Calendar from './student/Calendar.jsx';
import LibraryStudent from './student/LibraryStudent.jsx';
import Tasks from './student/Tasks.jsx';
import Tracking from './student/Tracking.jsx';
import ResultPage from './components/qiz/ResultPage.jsx';
import Episods from './parent/Episods.jsx';
import Notifications from './parent/Notifications.jsx';
import Payment from './parent/Payment.jsx';
import Teacher from './teacher/Teacher.jsx';
import About from './components/NavbarLink/About.jsx';
import Tracks from './components/NavbarLink/Tracks.jsx';
import Pricing from './components/NavbarLink/Pricing.jsx';
import StudentLogin from './contact/StudentLogin.jsx';
import ProfileParent from './parent/Profile.jsx';
import SignUp from './contact/SignUp.jsx';

// Admin Imports
import AccountsManagement from './admin/AccountsManagement.jsx';
import StudentsManagement from './admin/StudentsManagement.jsx';
import ContentManagement from './admin/ContentManagement.jsx';
import CirclesManagement from './admin/CirclesManagement.jsx';
import ReviewTeachers from './admin/ReviewTeachers.jsx';
import ReportsAdmin from './admin/ReportsAdmin.jsx';
import SubscriptionsAdmin from './admin/SubscriptionsAdmin.jsx';
import NotificationsAdmin from './admin/NotificationsAdmin.jsx';
import SettingsAdmin from './admin/SettingsAdmin.jsx';
import AdminLogin from './contact/AdminLogin.jsx';
import ProgramDetails from './components/home/ProgramDetails.jsx';
import ErrorPage from './components/ErrorPage.jsx';

const router = createBrowserRouter([
  { 
    path: "/", 
    element: <App />,
    errorElement: <ErrorPage /> 
  },
  { path: "/register", element: <SignUp/> },
  { path: "/StudentLogin", element: <StudentLogin /> },
  { path: "/signout", element: <SignOut /> },
  { path: "/login", element: <Login /> },
  { path: "/admin/login", element: <AdminLogin /> },
  { path: "/program-details", element: <ProgramDetails /> },

  { path: "/exam/:id", element: <ExamPage /> },
  { path: "/result", element: <ResultPage /> },
  { path: "/contact", element: <Pricing/> },
  { path: "/teachers", element: <Teacher/> },
  { path: "/aitypes", element: <Tracks/> },
  { path: "/about", element: <About/> },
  { path: "/student/courses", element: <CoursesPage /> },
  {
    path: "/dashboard",
    element: <PrivateRoute element={<DashboardLayout />} allowedTypes={['student','teacher','parent','admin']} />,
    children: [
      { path: "student/profile", element: <Profile/> },
      { path: "student/courses", element: <CoursesPage /> },
      { path: "student/calendar", element: <Calendar/> },
      { path: "student/library", element: <LibraryStudent/> },
      { path: "student/tasks", element: <Tasks/> },
      { path: "student/tracking", element: <Tracking/> },

      { path: "teacher/contact", element: <ContactTeacher/> },
      { path: "teacher/packages", element: <PackagesPage /> },
      { path: "teacher/students", element: <StudentsPage /> },
      { path: "teacher/library", element: <Library/> },
      { path: "teacher/reports", element: <Reports/> },
      { path: "teacher/evaluation", element: <Evaluation/> },

      { path: "parent/contact", element: <ProfileParent/> },
      { path: "parent/reports", element: <ReportsPage /> },
      { path: "parent/episods", element: <Episods /> },
      { path: "parent/notifications", element: <Notifications /> },
      { path: "parent/payment", element: <Payment /> },

      // Admin Routes
      { path: "admin/accounts", element: <AccountsManagement /> },
      { path: "admin/students", element: <StudentsManagement /> },
      { path: "admin/content", element: <ContentManagement /> },
      { path: "admin/circles", element: <CirclesManagement /> },
      { path: "admin/review-teachers", element: <ReviewTeachers /> },
      { path: "admin/reports", element: <ReportsAdmin /> },
      { path: "admin/subscriptions", element: <SubscriptionsAdmin /> },
      { path: "admin/notifications", element: <NotificationsAdmin /> },
      { path: "admin/settings", element: <SettingsAdmin /> },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);