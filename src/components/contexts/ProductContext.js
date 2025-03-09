import { createContext, useContext, useEffect, useState } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
        setProducts(JSON.parse(savedProducts));
    }
  }, []);

  const saveToLocalStorage = (data) => {
    localStorage.setItem('products', JSON.stringify(data));
  };

  const addProduct = (product) => {
    const newProduct = { ...product, id: Date.now() };
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    saveToLocalStorage(updatedProducts);
  };

  const updateProduct = (id, product) => {
    const updatedProducts = products.map(prd => 
      prd.id === id ? { ...product, id } : prd
    );
    setProducts(updatedProducts);
    saveToLocalStorage(updatedProducts);
  };

  const deleteProduct = (id) => {
    const updatedProducts = products.filter(prd => prd.id !== id);
    setProducts(updatedProducts);
    saveToLocalStorage(updatedProducts);
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a CategoryProvider');
  }
  return context;
};