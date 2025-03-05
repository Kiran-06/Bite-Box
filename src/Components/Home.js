import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import React from 'react';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <div className="home">
                <h1>Welcome to BiteBox</h1>
                <p>Where you can find the best food in town</p>
                <Link to="/menu">
                    <button>Order Now</button>
                </Link>
            </div>
        </div>
    );
};

export default HomePage;