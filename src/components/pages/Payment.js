import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";

const Payment = () => {
    const { clearCart } = useCart();
    const { user } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (!user && !storedUser) {
            navigate("/login");  // Redirect to login if not authenticated
        }
    }, [user, navigate]);

    const { formData, cart } = location.state || {};

    if (!formData || !cart) {
        return <div>No order details found. Go back to cart.</div>;
    }

    const handlePayment = () => {
        alert("Payment Successful! Thank you for your order.");
        clearCart();
        navigate("/admin-dashboard");
    };

    const totalPrice = cart.reduce((total, item) => total + (Number(item.product_price) * item.quantity), 0);

    return (
        <div className="payment-container">
            <h2>Payment Confirmation</h2>

            <div className="order-summary">
                {cart.map((item) => (
                    <div key={item.id}>
                        <p>{item.product_name} x {item.quantity}</p>
                        <p>${(item.product_price * item.quantity).toFixed(2)}</p>
                    </div>
                ))}
                <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
            </div>

            <button onClick={handlePayment}>Confirm Payment</button>
        </div>
    );
};

export default Payment;
