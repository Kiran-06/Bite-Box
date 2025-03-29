import React, { createContext, useContext, useState, useEffect } from "react";

const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        const savedPayments = localStorage.getItem("payments");
        if (savedPayments) {
            setPayments(JSON.parse(savedPayments));
        }
    }, []);

    const savePaymentsToLocalStorage = (data) => {
        localStorage.setItem("payments", JSON.stringify(data));
    };

    const addPayment = (payment) => {
        const updatedPayments = [...payments, payment];
        setPayments(updatedPayments);
        savePaymentsToLocalStorage(updatedPayments);
    };

    return (
        <PaymentContext.Provider value={{ payments, addPayment }}>
            {children}
        </PaymentContext.Provider>
    );
};

export const usePayment = () => {
    const context = useContext(PaymentContext);
    if (!context) {
        throw new Error("usePayment must be used within a PaymentProvider");
    }
    return context;
};
