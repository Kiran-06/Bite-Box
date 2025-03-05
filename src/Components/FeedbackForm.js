import React, { useState } from "react";
import "./FeedbackForm.css";

const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        rating: "",
        comments: "",
    });

    const [submitted, setSubmitted] = useState(false);

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.rating || !formData.comments) {
            alert("Please fill out all fields!");
            return;
        }

        console.log("Feedback Submitted:", formData);
        setSubmitted(true);
    };

    return (
        <div className="feedback-container">
            <h2>Grocery Store Feedback</h2>

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
                    <select name="rating" value={formData.rating} onChange={handleChange} required>
                        <option value="">Select a rating</option>
                        <option value="5">⭐️⭐️⭐️⭐️⭐️ (Excellent)</option>
                        <option value="4">⭐️⭐️⭐️⭐️ (Good)</option>
                        <option value="3">⭐️⭐️⭐️ (Average)</option>
                        <option value="2">⭐️⭐️ (Below Average)</option>
                        <option value="1">⭐️ (Poor)</option>
                    </select>

                    <textarea
                        name="comments"
                        placeholder="Your Comments"
                        value={formData.comments}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">Submit Feedback</button>
                </form>
            )}
        </div>
    );
};

export default FeedbackForm;
