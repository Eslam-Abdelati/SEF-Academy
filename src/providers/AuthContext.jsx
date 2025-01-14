import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const cookies = new Cookies();
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = cookies.get("TOKEN");
  useEffect(() => {
    if (token) {
      setCurrentUser("user");
      setLoading(false);
    } else {
      setCurrentUser(null);
      setLoading(false);
    }
  }, [token]);
  return (
    <AuthContext.Provider value={{ currentUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
