import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext'; // Correct import of useAuth

const ProtectedRoute = () => {
  const { currentUser } = useAuth(); // Correct usage of useAuth
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;