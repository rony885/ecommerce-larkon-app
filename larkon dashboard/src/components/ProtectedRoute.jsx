import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // Check if the user has access token
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    // If no token, redirect to sign-in page
    return <Navigate to="/" replace />;
  }

  // If token exists, render the children component
  return children;
};

export default ProtectedRoute;
