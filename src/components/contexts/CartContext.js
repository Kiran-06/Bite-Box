// import React, { createContext, useContext, useState, useEffect } from "react";

// const CartContext = createContext();

// export const useCart = () => {
//     const context = useContext(CartContext);
//     if (!context) {
//         throw new Error("useCart must be used within a CartProvider");
//     }
//     return context;
// };

// export const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState(() => {
//         const savedCart = localStorage.getItem("cart");
//         return savedCart ? JSON.parse(savedCart) : [];
//     });

//     useEffect(() => {
//         localStorage.setItem("cart", JSON.stringify(cart));
//     }, [cart]);

//     const addToCart = (product) => {
//         const existingItem = cart.find((item) => item.id === product.id);

//         if (existingItem) {
//             // Update quantity if item exists
//             setCart((prevCart) =>
//                 prevCart.map((item) =>
//                     item.id === product.id
//                         ? { ...item, quantity: item.quantity + product.quantity }
//                         : item
//                 )
//             );
//         } else {
//             // Add new item with quantity
//             setCart((prevCart) => [...prevCart, product]);
//         }
//     };

//     const removeFromCart = (id) => {
//         setCart((prevCart) => prevCart.filter((item) => item.id !== id));
//     };

//     const clearCart = () => {
//         setCart([]);
//     };

//     return (
//         <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
//             {children}
//         </CartContext.Provider>
//     );
// };


// import { createContext, useContext, useEffect, useState } from "react";
// import { useAuth } from "../contexts/AuthContext";  // ✅ Import useAuth

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState([]);
//     const { user } = useAuth();

//     useEffect(() => {
//         const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

//         if (user) {
//             const filteredCart = storedCart.filter(item => item.userId === user.id);  // ✅ Filter by user ID
//             setCart(filteredCart);
//         }
//     }, [user]);

//     const saveToLocalStorage = (cartData) => {
//         localStorage.setItem('cart', JSON.stringify(cartData));
//     };

//     const addToCart = (product) => {
//         const currentUser = user || JSON.parse(localStorage.getItem('user'));

//         if (!currentUser) {
//             alert('Please log in to add items to your cart.');
//             return;
//         }

//         const updatedCart = [
//             ...cart,
//             { ...product, userId: currentUser.id }  // ✅ Store with user ID
//         ];

//         setCart(updatedCart);
//         saveToLocalStorage(updatedCart);
//     };

//     const removeFromCart = (id) => {
//         const updatedCart = cart.filter(item => item.id !== id);
//         setCart(updatedCart);
//         saveToLocalStorage(updatedCart);
//     };

//     const clearCart = () => {
//         const currentUser = user || JSON.parse(localStorage.getItem('user'));

//         if (currentUser) {
//             const filteredCart = cart.filter(item => item.userId !== currentUser.id);
//             setCart(filteredCart);
//             saveToLocalStorage(filteredCart);
//         }
//     };

//     return (
//         <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
//             {children}
//         </CartContext.Provider>
//     );
// };

// export const useCart = () => useContext(CartContext);


// import { createContext, useContext, useEffect, useState } from "react";
// import { useAuth } from "../contexts/AuthContext";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState([]);
//     const { user } = useAuth();

//     // ✅ Load cart from localStorage when user logs in
//     useEffect(() => {
//         if (user) {
//             const savedCart = localStorage.getItem(`cart_${user.id}`);
//             setCart(savedCart ? JSON.parse(savedCart) : []);
//         }
//     }, [user]);

//     // ✅ Save cart to localStorage with user ID
//     const saveToLocalStorage = (cartData) => {
//         if (user) {
//             localStorage.setItem(`cart_${user.id}`, JSON.stringify(cartData));
//         }
//     };

//     const addToCart = (product) => {
//         if (!user) {
//             alert("Please log in to add items to your cart.");
//             return;
//         }

//         const existingItem = cart.find(item => item.id === product.id);

//         let updatedCart;
//         if (existingItem) {
//             // ✅ Update quantity if product already in cart
//             updatedCart = cart.map(item =>
//                 item.id === product.id
//                     ? { ...item, quantity: item.quantity + product.quantity }
//                     : item
//             );
//         } else {
//             // ✅ Add new product to cart
//             updatedCart = [...cart, { ...product, userId: user.id }];
//         }

//         setCart(updatedCart);
//         saveToLocalStorage(updatedCart);  // ✅ Save cart by user ID
//     };

//     const removeFromCart = (productId) => {
//         const updatedCart = cart.filter(item => item.id !== productId);
//         setCart(updatedCart);
//         saveToLocalStorage(updatedCart);
//     };

//     const clearCart = () => {
//         setCart([]);
//         if (user) {
//             localStorage.removeItem(`cart_${user.id}`);
//         }
//     };

//     return (
//         <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
//             {children}
//         </CartContext.Provider>
//     );
// };

// export const useCart = () => useContext(CartContext);



import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);

    // ✅ Add to cart and update quantity if item already exists
    const addToCart = (item) => {
        const existingItem = cart.find((cartItem) => cartItem.id === item.id);

        let updatedCart;

        if (existingItem) {
            // Update quantity if the item is already in the cart
            updatedCart = cart.map((cartItem) =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                    : cartItem
            );
        } else {
            // Add new item to the cart
            updatedCart = [...cart, item];
        }

        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const removeFromCart = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem("cart");
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
