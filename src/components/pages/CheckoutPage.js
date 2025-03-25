import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Checkout = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        // ✅ Ensure logged-in user persists after refresh
        const storedUser = localStorage.getItem('user');
        if (!user && !storedUser) {
            navigate("/login");   // Redirect if not authenticated
        }
    }, [user, navigate]);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        city: "",
        zip: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/payment", { state: { formData } });
    };

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" onChange={handleChange} required />
                <label>Email:</label>
                <input type="email" name="email" onChange={handleChange} required />
                <label>Address:</label>
                <input type="text" name="address" onChange={handleChange} required />
                <label>City:</label>
                <input type="text" name="city" onChange={handleChange} required />
                <label>ZIP:</label>
                <input type="text" name="zip" onChange={handleChange} required />
                <Link to="Payment">
                    <button type="submit">Proceed to Payment</button>
                </Link>
            </form>
        </div>
    );
};

export default Checkout;
