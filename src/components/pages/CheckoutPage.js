// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";

// const Checkout = () => {
//     const { user } = useAuth();
//     const navigate = useNavigate();

//     useEffect(() => {
//         // ✅ Ensure logged-in user persists after refresh
//         const storedUser = localStorage.getItem('user');
//         if (!user && !storedUser) {
//             navigate("/login");   // Redirect if not authenticated
//         }
//     }, [user, navigate]);

//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         address: "",
//         city: "",
//         zip: "",
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         navigate("/payment", { state: { formData } });
//     };

//     return (
//         <div className="checkout-container">
//             <h2>Checkout</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>Name:</label>
//                 <input type="text" name="name" onChange={handleChange} required />
//                 <label>Email:</label>
//                 <input type="email" name="email" onChange={handleChange} required />
//                 <label>Address:</label>
//                 <input type="text" name="address" onChange={handleChange} required />
//                 <label>City:</label>
//                 <input type="text" name="city" onChange={handleChange} required />
//                 <label>ZIP:</label>
//                 <input type="text" name="zip" onChange={handleChange} required />
//                 <button type="submit">Proceed to Payment</button>
//             </form>
//         </div>
//     );
// };

// export default Checkout;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";


const Checkout = () => {
    const navigate = useNavigate();
    const { cart } = useCart();
    const { user } = useAuth();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckout = () => {
        if (!user) {
            alert("Please log in to proceed.");
            navigate("/auth");
            return;
        }

        if (cart.length === 0) {
            alert("Your cart is empty.");
            return;
        }

        // ✅ Save form and cart data to local storage
        localStorage.setItem("checkoutData", JSON.stringify({ formData, cart }));

        navigate("/payment");
    };

    return (
        <div className="checkout-container a1">
            <h2>Checkout</h2>

            <div className="checkout-form">
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label>Address:</label>
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                />
            </div>

            <button className="checkout-btn" onClick={handleCheckout}>Proceed to Payment</button>
        </div>
    );
};

export default Checkout;



// import { useNavigate } from "react-router-dom";

// const Checkout = () => {
//     const navigate = useNavigate();

//     const handleProceedToPayment = () => {
//         navigate("/Payment");  // Ensure this route matches App.js route
//     };

//     return (
//         <div>
//             <h2>Checkout</h2>
//             {/* Checkout Form Fields */}
//             <button onClick={handleProceedToPayment}>Proceed to Payment</button>
//         </div>
//     );
// };

// export default Checkout;


// import { Link } from "react-router-dom";

// const Checkout = () => {
//     return (
//         <div>
//             <h2>Checkout</h2>
//             <Link to="/Payment">
//                 <button>Proceed to Payment</button>
//             </Link>
//         </div>
//     );
// };

// export default Checkout;
