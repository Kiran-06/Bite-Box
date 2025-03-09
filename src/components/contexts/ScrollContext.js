import React, { createContext, useContext, useRef } from 'react';


const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const categoriesRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ScrollContext.Provider
      value={{
        scrollToCategories: () => scrollToSection(categoriesRef),
        categoriesRef
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);