// import { createContext, useContext, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [showAuthModal, setShowAuthModal] = useState(false);
//   const [isLogin, setIsLogin] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) setUser(JSON.parse(storedUser));
//   }, []);

//   const login = (userData) => {
//     const userWithAdminStatus = {
//       ...userData,
//       isAdmin: userData.isAdmin || false
//     };
//     setUser(userWithAdminStatus);
//     localStorage.setItem('user', JSON.stringify(userWithAdminStatus));
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem('user');
//     navigate('/login');
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout, showAuthModal, setShowAuthModal, isLogin, setIsLogin, navigate }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => useContext(AuthContext);



import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));

    // ✅ Navigate after successful login
    navigate("/");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate("/auth");  // Redirect to login on logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
