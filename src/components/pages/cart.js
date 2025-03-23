import React from "react";
import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, removeFromCart, clearCart } = useCart();

    const totalPrice = cart.reduce((total, item) => total + (item.product_price * item.quantity), 0);

    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>

            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.product_name} />
                            <div>
                                <h3>{item.product_name}</h3>
                                <p>Price: ${item.product_price}</p>
                                <p>Quantity: {item.quantity}</p>
                                <p>Total: ${(item.product_price * item.quantity).toFixed(2)}</p>
                                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            </div>
                        </div>
                    ))}
                    <h3>Grand Total: ${totalPrice.toFixed(2)}</h3>
                    <button onClick={clearCart}>Clear Cart</button>
                    <Link to="/products" className="cart-btn">🛒 Continue Shopping</Link>
                </>
            )}
        </div>
    );
};

export default Cart;
