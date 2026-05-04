import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import DashboardNavbar from "./DashboardNavbar";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

function DashboardLayout() {
  const { accountType } = useContext(AuthContext);
  const location = useLocation();

  // If on the root dashboard page, redirect to the appropriate sub-page based on role
  if (location.pathname === "/dashboard" || location.pathname === "/dashboard/") {
    if (accountType === 'student') return <Navigate to="/dashboard/student/profile" replace />;
    if (accountType === 'teacher') return <Navigate to="/dashboard/teacher/students" replace />;
    if (accountType === 'parent') return <Navigate to="/dashboard/parent/reports" replace />;
    if (accountType === 'admin') return <Navigate to="/dashboard/admin/accounts" replace />;
  }
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 font-inter">

      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardNavbar />

        <main className="flex-1 overflow-y-auto">
          <div className="max-w-[1600px] mx-auto">
            <Outlet />
          </div>
        </main>
      </div>

    </div>
  );
}

export default DashboardLayout;