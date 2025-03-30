import React, { useState } from "react";

const LiveChat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, { text: input, user: "You" }]);
            setInput("");
        }
    };

    return (
        <div className="page-container">
            <h2>Live Chat</h2>

            <div className="chat-box">
                {/* Display previous messages */}
                {messages.map((msg, index) => (
                    <div key={index} className="chat-message">
                        <strong>{msg.user}:</strong> {msg.text}
                    </div>
                ))}

                {/* Display the current message being typed */}
                {input && (
                    <div className="chat-message current-message">
                        <strong>You:</strong> {input}
                    </div>
                )}
            </div>

            <div className="chat-input">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                />
                <br />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default LiveChat;
