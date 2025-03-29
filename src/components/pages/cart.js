// import React from "react";
// import { useCart } from "../contexts/CartContext";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";

// const Cart = () => {
//     const { cart, removeFromCart, clearCart } = useCart();
//     const { user } = useAuth();
//     const navigate = useNavigate();

//     const totalPrice = cart.reduce((total, item) => total + (Number(item.product_price) * item.quantity), 0);

//     const handleCheckout = () => {
//         // ✅ Verify user authentication before proceeding
//         if (!user) {
//             alert("You must be logged in to checkout.");
//             navigate("/login");  // Redirect to login
//             return;
//         }

//         if (cart.length === 0) {
//             alert("Your cart is empty.");
//             return;
//         }

//         navigate("/Payment");
//     };

//     return (
//         <div className="cart-container">
//             <h2>Shopping Cart</h2>

//             {cart.length === 0 ? (
//                 <p>Your cart is empty.</p>
//             ) : (
//                 <>
//                     {cart.map((item) => (
//                         <div key={item.id} className="cart-item">
//                             <img src={item.image} alt={item.product_name} />
//                             <div>
//                                 <h3>{item.product_name}</h3>
//                                 <p>Price: ₹{item.product_price}</p>
//                                 <p>Quantity: {item.quantity}</p>
//                                 <p>Total: ₹{(item.product_price * item.quantity).toFixed(2)}</p>
//                                 <button onClick={() => removeFromCart(item.id)}>Remove</button>
//                             </div>
//                         </div>
//                     ))}
//                     <h3>Grand Total: ₹{totalPrice.toFixed(2)}</h3>

//                     <button onClick={clearCart}>Clear Cart</button>
//                     <button onClick={handleCheckout}>Proceed to Checkout</button>
//                 </>
//             )}
//         </div>
//     );
// };

// export default Cart;


// import React from "react";
// import { useCart } from "../contexts/CartContext";
// import { useAuth } from "../contexts/AuthContext";
// import { Link, useNavigate } from "react-router-dom";

// const Cart = () => {
//     const { cart, removeFromCart, clearCart } = useCart();
//     const { user } = useAuth();
//     const navigate = useNavigate();

//     const handleCheckout = () => {
//         // ✅ Verify user authentication before proceeding
//         if (!user) {
//             alert("You must be logged in to checkout.");
//             navigate("/login");  // Redirect to login
//             return;
//         }

//         if (cart.length === 0) {
//             alert("Your cart is empty.");
//             return;
//         }

//         navigate("/Payment");
//     };
//     // ✅ Filter cart items by logged-in user's ID
//     const userCart = cart.filter(item => item.userId === user.id);

//     const totalPrice = userCart.reduce((total, item) => total + (item.product_price * item.quantity), 0);

//     return (
//         <div className="cart-container">
//             <h2>Shopping Cart</h2>

//             {userCart.length === 0 ? (
//                 <p>Your cart is empty.</p>
//             ) : (
//                 <>
//                     {userCart.map((item) => (
//                         <div key={item.id} className="cart-item">
//                             <img src={item.image} alt={item.product_name} />
//                             <div>
//                                 <h3>{item.product_name}</h3>
//                                 <p>Price: ₹{item.product_price}</p>
//                                 <p>Quantity: {item.quantity}</p>
//                                 <p>Total: ₹{(item.product_price * item.quantity).toFixed(2)}</p>
//                                 <button onClick={() => removeFromCart(item.id)}>Remove</button>
//                             </div>
//                         </div>
//                     ))}
//                     <h3>Grand Total: ₹{totalPrice.toFixed(2)}</h3>
//                     <button onClick={clearCart}>Clear Cart</button>
//                     <button onClick={handleCheckout}>Proceed to Checkout</button>
//                     <Link to="/products" className="cart-btn">🛒 Continue Shopping</Link>
//                 </>
//             )}
//         </div>
//     );
// };

// export default Cart;


import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { cart, removeFromCart, clearCart } = useCart();
    const { user } = useAuth();
    const navigate = useNavigate();

    if (!user) {
        return <p>Please log in to view your cart.</p>;
    }

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <div className="cart-container">
                        {cart.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <img src={item.image} alt={item.product_name} className="cart-image" />
                                <div className="cart-details">
                                    <h3>{item.product_name}</h3>
                                    <p>Price: ${item.product_price}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <button onClick={() => removeFromCart(item.id)} className="carting-btn">Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-actions">
                        <button onClick={clearCart} className="carting-btn">Clear Cart</button>
                        <button onClick={() => navigate("/CheckoutPage")} className="carting-btn">Proceed to Checkout</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;

