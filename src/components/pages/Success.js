import React from "react";
import { useNavigate } from "react-router-dom";


const Success = () => {
    const navigate = useNavigate();

    const handleReturn = () => {
        navigate("/");  // Redirect to home or admin dashboard
    };

    return (
        <div className="success-container">
            <div className="celebration">
                🎉
            </div>
            <h2>Payment Successful!</h2>
            <p>Thank you for your order. Your payment has been confirmed.</p>

            <button onClick={handleReturn} className="success-btn">Back to Home</button>
        </div>
    );
};

export default Success;
