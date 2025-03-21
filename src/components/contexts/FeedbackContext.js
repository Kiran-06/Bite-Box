import React, { useContext, createContext, useState, useEffect } from "react";

// Create context
const FeedbackContext = createContext();

// Context provider component
const FeedbackProvider = ({ children }) => {
    const [feedbackList, setFeedbackList] = useState([]);

    // Load data from local storage on initial render
    useEffect(() => {
        const storedFeedback = JSON.parse(localStorage.getItem("feedback")) || [];
        setFeedbackList(storedFeedback);
    }, []);

    // Save to local storage whenever feedbackList changes
    useEffect(() => {
        localStorage.setItem("feedback", JSON.stringify(feedbackList));
    }, [feedbackList]);

    // Add new feedback to the list
    const addFeedback = (feedback) => {
        setFeedbackList((prev) => [...prev, feedback]);
    };

    return (
        <FeedbackContext.Provider value={{ feedbackList, addFeedback }}>
            {children}
        </FeedbackContext.Provider>
    );
};

export default FeedbackProvider;

export const useFeedback = () => useContext(FeedbackContext);