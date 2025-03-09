import { createContext, useContext, useEffect, useState } from 'react';

const UmsContext = createContext();

export const UmsProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }
  }, []);

  const saveToLocalStorage = (data) => {
    localStorage.setItem('users', JSON.stringify(data));
  };

  const addUser = (user) => {
    const newUser = { ...user, id: Date.now() };
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

  return (
    <UmsContext.Provider value={{ users, addUser, updateUser, deleteUser }}>
      {children}
    </UmsContext.Provider>
  );
};

export const useUmsContext = () => {
  const context = useContext(UmsContext);
  if (!context) {
    throw new Error('useUmsContext must be used within a CategoryProvider');
  }
  return context;
};