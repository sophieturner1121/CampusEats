import React, { createContext, useState, useContext } from 'react';

// 1. Context creation
const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  // 2. State for user data and authentication status
  const [currentUser, setCurrentUser] = useState(null);

  // 3. Login function
  const login = (userData) => {
    // Save the user data (and possibly a token) in the state
    setCurrentUser(userData);
    // You can also save the token in localStorage or sessionStorage
  };

  // 4. Logout function
  const logout = () => {
    // Remove the user data from the state
    setCurrentUser(null);
    // Also, clear the token from storage
  };

  // 5. The value provided to context consumers
  const value = {
    currentUser,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};