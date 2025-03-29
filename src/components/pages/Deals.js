// import React from 'react';

// import Grid from './Grid';

// const Deals = () => {
//     return (
//         <div>
//             <Grid />
//         </div>
//     );
// };

// export default Deals;

import React, { useEffect, useState } from "react";
import { useCart } from "../contexts/CartContext";
import { FaShoppingCart } from "react-icons/fa";

// ✅ Correct image import paths
import Apple from "../images/apple.jpg";    // Adjust the path based on location
import Mango from "../images/mango.jpg";
import Oranges from "../images/Oranges.png";
import Banana from "../images/banana.jpg";

const Deals = () => {
    const { addToCart } = useCart();
    const [deals, setDeals] = useState([]);

    // Mock Deals Data (You can replace with API fetch)
    useEffect(() => {
        const mockDeals = [
            { id: 1, name: "Apple", price: 120, image: Apple, discount: "10%" },
            { id: 2, name: "Banana", price: 60, image: Banana, discount: "15%" },
            { id: 3, name: "Orange", price: 90, image: Oranges, discount: "5%" },
            { id: 4, name: "Mango", price: 150, image: Mango, discount: "20%" }
        ];
        setDeals(mockDeals);
    }, []);

    const handleAddToCart = (deal) => {
        const product = {
            id: deal.id,
            product_name: deal.name,
            product_price: deal.price,
            quantity: 1
        };
        addToCart(product);
        alert(`${deal.name} added to cart!`);
    };

    return (
        <div className="deals-container">
            <h1>🔥 Today's Hot Deals 🔥</h1>

            <div className="deals-grid">
                {deals.map((deal) => (
                    <div key={deal.id} className="deal-card">
                        <img src={deal.image} alt={deal.name} className="deal-image" />
                        <h3>{deal.name}</h3>
                        <p>Price: ₹{deal.price}</p>
                        <p className="discount">Discount: {deal.discount}</p>

                        <button
                            className="add-to-cart-btn"
                            onClick={() => handleAddToCart(deal)}
                        >
                            <FaShoppingCart /> Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Deals;
