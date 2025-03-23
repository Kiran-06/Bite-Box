import React, { useState, useContext } from "react";
import { FeedbackContext } from '../contexts/FeedbackContext';


const FeedbackForm = () => {
    const { addFeedback } = useContext(FeedbackContext);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        rating: "",
        comments: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, rating, comments } = formData;

        if (!name || !email || !rating || !comments) {
            alert("Please fill out all fields!");
            return;
        }

        const newFeedback = {
            id: Date.now(),
            ...formData,
        };

        // Add feedback to context and local storage
        addFeedback(newFeedback);

        console.log("Feedback Submitted:", newFeedback);
        setSubmitted(true);

        // Clear form after submission
        setFormData({
            name: "",
            email: "",
            rating: "",
            comments: "",
        });

        // Reset success message after 3 seconds
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className="feedback-container">
            <h2>Share Your Feedback</h2>

            {submitted ? (
                <p className="success-message">Thank you for your feedback!</p>
            ) : (
                <form onSubmit={handleSubmit} className="feedback-form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label>Rating:</label>
                    <select
                        name="rating"
                        value={formData.rating}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a rating</option>
                        <option value="5">⭐⭐⭐⭐⭐ (Excellent)</option>
                        <option value="4">⭐⭐⭐⭐ (Good)</option>
                        <option value="3">⭐⭐⭐ (Average)</option>
                        <option value="2">⭐⭐ (Below Average)</option>
                        <option value="1">⭐ (Poor)</option>
                    </select>

                    <textarea
                        name="comments"
                        placeholder="Your Comments"
                        value={formData.comments}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit" className="fbutton">
                        Submit Feedback
                    </button>
                </form>
            )}
        </div>
    );
};

export default FeedbackForm;