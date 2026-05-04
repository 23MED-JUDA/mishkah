import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const PrivateRoute = ({ element, allowedTypes }) => {
  const { isLoggedIn, accountType, loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>;

  // ❌ لو مش مسجل → يوديه تسجيل
  if (!isLoggedIn) return <Navigate to="/register" replace />;

  // ❌ صلاحيات
  if (!allowedTypes.includes(accountType)) {
    return <Navigate to="/" replace />;
  }

  return element;
};

export default PrivateRoute;