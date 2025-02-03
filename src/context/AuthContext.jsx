import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("authToken", token);
    setIsAuthenticated(true);
  };

  const logout = (navigate) => {  // Accept navigate function as parameter
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
    navigate("/login");  // Redirect to login after logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
