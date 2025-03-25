import React, { createContext, useContext, useEffect, useState } from "react";

// Create Context
const PaymentContext = createContext();

// Hook for easy access
export const usePayment = () => useContext(PaymentContext);

export const PaymentProvider = ({ children }) => {
    const [payments, setPayments] = useState([]);

    // Load payments from local storage on component mount
    useEffect(() => {
        const storedPayments = JSON.parse(localStorage.getItem("payments")) || [];
        setPayments(storedPayments);
    }, []);

    // Save payments to local storage
    const addPayment = (payment) => {
        const updatedPayments = [...payments, payment];
        setPayments(updatedPayments);
        localStorage.setItem("payments", JSON.stringify(updatedPayments));
    };

    return (
        <PaymentContext.Provider value={{ payments, addPayment }}>
            {children}
        </PaymentContext.Provider>
    );
};
