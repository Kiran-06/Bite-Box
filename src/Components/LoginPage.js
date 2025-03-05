import React, { useState } from "react";

const LoginPage = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(isSignup ? "Signup Data: " : "Login Data: ", formData);
        alert(isSignup ? "Signup Successful!" : "Login Successful!");
    };

    return (
        <div className="container">
            <div className="form-box">
                <h2>{isSignup ? "Sign Up" : "Login"}</h2>
                <form onSubmit={handleSubmit}>
                    {isSignup && (
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    )}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
                </form>
                <p onClick={() => setIsSignup(!isSignup)}>
                    {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
