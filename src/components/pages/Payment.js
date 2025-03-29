// import React, { useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useCart } from "../contexts/CartContext";
// import { useAuth } from "../contexts/AuthContext";

// const Payment = () => {
//     const { clearCart } = useCart();
//     const { user } = useAuth();
//     const location = useLocation();
//     const navigate = useNavigate();

//     useEffect(() => {
//         const storedUser = localStorage.getItem('user');
//         if (!user && !storedUser) {
//             navigate("/login");  // Redirect to login if not authenticated
//         }
//     }, [user, navigate]);

//     const { formData, cart } = location.state || {};

//     if (!formData || !cart) {
//         return <div>No order details found. Go back to cart.</div>;
//     }

//     const handlePayment = () => {
//         alert("Payment Successful! Thank you for your order.");
//         clearCart();
//         navigate("/admin-dashboard");
//     };

//     const totalPrice = cart.reduce((total, item) => total + (Number(item.product_price) * item.quantity), 0);

//     return (
//         <div className="payment-container">
//             <h2>Payment Confirmation</h2>

//             <div className="order-summary">
//                 {cart.map((item) => (
//                     <div key={item.id}>
//                         <p>{item.product_name} x {item.quantity}</p>
//                         <p>₹{(item.product_price * item.quantity).toFixed(2)}</p>
//                     </div>
//                 ))}
//                 <h3>Total Price: ₹{totalPrice.toFixed(2)}</h3>
//             </div>

//             <button onClick={handlePayment}>Confirm Payment</button>
//         </div>
//     );
// };

// export default Payment;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";
import { usePayment } from "../contexts/PaymentContext";

const Payment = () => {
    const { clearCart } = useCart();
    const { user } = useAuth();
    const { addPayment } = usePayment();
    const navigate = useNavigate();
    const [checkoutData, setCheckoutData] = useState(null);

    useEffect(() => {
        if (!user) {
            navigate("/auth");
            return;
        }

        // ✅ Retrieve cart and form data from local storage
        const storedData = localStorage.getItem("checkoutData");
        if (storedData) {
            setCheckoutData(JSON.parse(storedData));
        } else {
            navigate("/cart");
        }
    }, [user, navigate]);

    if (!checkoutData) {
        return <div>Loading order details...</div>;
    }

    const { formData, cart } = checkoutData;

    const totalPrice = cart.reduce(
        (total, item) => total + (Number(item.product_price) * item.quantity),
        0
    );

    const handlePayment = () => {
        const paymentDetails = {
            name: formData.name,
            email: formData.email,
            address: formData.address,
            date: new Date().toLocaleString(),
            items: cart.map(item => ({
                product_name: item.product_name,
                quantity: item.quantity,
                total: (item.product_price * item.quantity).toFixed(2)
            })),
            totalPrice: totalPrice.toFixed(2)
        };

        // ✅ Save payment details to context
        addPayment(paymentDetails);

        // ✅ Clear cart and local storage
        clearCart();
        localStorage.removeItem("checkoutData");

        // ✅ Redirect to Success page with celebration
        navigate("/success");
    };

    return (
        <div className="payment-container">
            <h2>Payment Confirmation</h2>

            <div className="order-summary">
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Address:</strong> {formData.address}</p>

                {cart.map((item) => (
                    <div key={item.id}>
                        <p>{item.product_name} x {item.quantity}</p>
                        <p>${(item.product_price * item.quantity).toFixed(2)}</p>
                    </div>
                ))}
                <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
            </div>

            <button onClick={handlePayment} className="payment-btn">Confirm Payment</button>
        </div>
    );
};

export default Payment;
