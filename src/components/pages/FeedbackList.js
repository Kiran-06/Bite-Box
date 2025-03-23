import React, { useContext } from "react";
import { FeedbackContext } from '../contexts/FeedbackContext';

const FeedbackList = () => {
    const { feedbackList } = useContext(FeedbackContext);

    return (
        <div className="feedback-container">
            <h2>Submitted Feedback</h2>
            {feedbackList.length > 0 ? (
                <ul>
                    {feedbackList.map((item, index) => (
                        <li key={index} className="feedback-item">
                            <strong>{item.name}</strong> ({item.email})
                            <p>Rating: {item.rating}</p>
                            <p>Comments: {item.comments}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No feedback submitted yet.</p>
            )}
        </div>
    );
};

export default FeedbackList;