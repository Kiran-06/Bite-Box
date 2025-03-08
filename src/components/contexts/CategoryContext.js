import { createContext, useContext, useEffect, useState } from 'react';

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const savedCategories = localStorage.getItem('categories');
    if (savedCategories) {
      setCategories(JSON.parse(savedCategories));
    }
  }, []);

  const saveToLocalStorage = (data) => {
    localStorage.setItem('categories', JSON.stringify(data));
  };

  const addCategory = (category) => {
    const newCategory = { ...category, id: Date.now() };
    const updatedCategories = [...categories, newCategory];
    setCategories(updatedCategories);
    saveToLocalStorage(updatedCategories);
  };

  const updateCategory = (id, category) => {
    const updatedCategories = categories.map(cat => 
      cat.id === id ? { ...category, id } : cat
    );
    setCategories(updatedCategories);
    saveToLocalStorage(updatedCategories);
  };

  const deleteCategory = (id) => {
    const updatedCategories = categories.filter(cat => cat.id !== id);
    setCategories(updatedCategories);
    saveToLocalStorage(updatedCategories);
  };

  return (
    <CategoryContext.Provider value={{ categories, addCategory, updateCategory, deleteCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryContext = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error('useCategoryContext must be used within a CategoryProvider');
  }
  return context;
};