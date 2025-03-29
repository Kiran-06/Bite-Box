// import { createContext, useContext, useEffect, useState } from 'react';

// const UmsContext = createContext();

// export const UmsProvider = ({ children }) => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const savedUsers = localStorage.getItem('users');
//     if (savedUsers) {
//       setUsers(JSON.parse(savedUsers));
//     }
//   }, []);

//   const saveToLocalStorage = (data) => {
//     localStorage.setItem('users', JSON.stringify(data));
//   };

//   const addUser = (user) => {
//     const newUser = { ...user, id: Date.now() };
//     const updatedUsers = [...users, newUser];
//     setUsers(updatedUsers);
//     saveToLocalStorage(updatedUsers);
//   };

//   const updateUser = (id, user) => {
//     const updatedUsers = users.map(u =>
//       u.id === id ? { ...user, id } : u
//     );
//     setUsers(updatedUsers);
//     saveToLocalStorage(updatedUsers);
//   };

//   const deleteUser = (id) => {
//     const updatedUsers = users.filter(u => u.id !== id);
//     setUsers(updatedUsers);
//     saveToLocalStorage(updatedUsers);
//   };

//   const addCartItem = (id, product) => {
//     const updatedUsers = users.map(u => {
//       if (u.id === id) {
//         return { ...u, cart: [...u.cart, id] };
//       }
//       return u;
//     });
//     setUsers(updatedUsers);
//     saveToLocalStorage(updatedUsers);
//   };


//   return (
//     <UmsContext.Provider value={{ users, addUser, updateUser, deleteUser, addCartItem }}>
//       {children}
//     </UmsContext.Provider>
//   );
// };

// export const useUmsContext = () => {
//   const context = useContext(UmsContext);
//   if (!context) {
//     throw new Error('useUmsContext must be used within a CategoryProvider');
//   }
//   return context;
// };



import { createContext, useContext, useEffect, useState } from 'react';

const UmsContext = createContext();

export const UmsProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }

    const loggedInUser = localStorage.getItem('currentUser');
    if (loggedInUser) {
      setCurrentUser(JSON.parse(loggedInUser));
    }
  }, []);

  const saveToLocalStorage = (data) => {
    localStorage.setItem('users', JSON.stringify(data));
  };

  const addUser = (user) => {
    const newUser = { ...user, id: Date.now(), cart: [] };  // ✅ Ensure each user has a unique cart
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    saveToLocalStorage(updatedUsers);
  };

  const updateUser = (id, user) => {
    const updatedUsers = users.map(u =>
      u.id === id ? { ...user, id } : u
    );
    setUsers(updatedUsers);
    saveToLocalStorage(updatedUsers);
  };

  const deleteUser = (id) => {
    const updatedUsers = users.filter(u => u.id !== id);
    setUsers(updatedUsers);
    saveToLocalStorage(updatedUsers);
  };

  const loginUser = (user) => {
    setCurrentUser(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
  };

  const logoutUser = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
  };

  const addCartItem = (product) => {
    if (!currentUser) return;

    const updatedUsers = users.map(u => {
      if (u.id === currentUser.id) {
        return { ...u, cart: [...u.cart, product] };
      }
      return u;
    });

    setUsers(updatedUsers);
    saveToLocalStorage(updatedUsers);
    localStorage.setItem('currentUser', JSON.stringify({ ...currentUser, cart: [...currentUser.cart, product] }));
    setCurrentUser({ ...currentUser, cart: [...currentUser.cart, product] });
  };

  return (
    <UmsContext.Provider value={{ users, currentUser, addUser, updateUser, deleteUser, addCartItem, loginUser, logoutUser }}>
      {children}
    </UmsContext.Provider>
  );
};

export const useUmsContext = () => {
  const context = useContext(UmsContext);
  if (!context) {
    throw new Error('useUmsContext must be used within a UmsProvider');
  }
  return context;
};
