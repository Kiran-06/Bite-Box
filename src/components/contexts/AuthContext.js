// import { createContext, useContext, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // ✅ Load user data from localStorage on app load
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   const login = (userData) => {
//     const userWithAdminStatus = {
//       ...userData,
//       isAdmin: userData.isAdmin || false
//     };

//     setUser(userWithAdminStatus);

//     // ✅ Save user data in localStorage
//     localStorage.setItem('user', JSON.stringify(userWithAdminStatus));
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem('user');
//     navigate('/login');  // Redirect to login on logout
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => useContext(AuthContext);


import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
    const userWithAdminStatus = {
      ...userData,
      isAdmin: userData.isAdmin || false
    };

    setUser(userWithAdminStatus);

    // ✅ Save user data in localStorage
    localStorage.setItem('user', JSON.stringify(userWithAdminStatus));

    // ✅ Automatically reload cart on login
    navigate('/');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');  // ✅ Remove user data
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
