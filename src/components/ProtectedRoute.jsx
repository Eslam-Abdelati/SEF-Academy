import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ element: Element, allowedRoles }) => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (allowedRoles && allowedRoles.includes(user.role)) {
    return <Element />;
  } else {
    return <Navigate to="/no-access" />; // Redirect if the user doesn't have the correct role
  }
};

export default ProtectedRoute;
