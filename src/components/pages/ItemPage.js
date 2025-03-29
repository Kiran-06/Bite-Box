import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

const ItemPage = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const [item, setItem] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
        const allItems = [...storedCart, ...storedProducts];

        // ✅ Ensure correct ID comparison
        const selectedItem = allItems.find((item) => String(item.id) === id);
        setItem(selectedItem);
    }, [id]);

    const handleAddToCart = () => {
        if (quantity <= 0) {
            alert("Please select a valid quantity.");
            return;
        }

        const cartItem = {
            ...item,
            quantity: parseInt(quantity, 10)
        };

        // ✅ Add item to cart context and localStorage
        addToCart(cartItem);
        navigate("/cart"); // Redirect to cart page
    };

    if (!item) {
        return <div>Item not found.</div>;
    }

    return (
        <div className="item-page">
            <h2>{item.product_name}</h2>
            <p>Price: ${item.product_price}</p>
            <img src={item.image} alt={item.product_name} style={{ width: "300px" }} />

            {/* ✅ Quantity Selector */}
            <div className="quantity-container">
                <label>Quantity:</label>
                <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="quantity-input"
                />
            </div>

            {/* ✅ Add to Cart Button */}
            <button onClick={handleAddToCart} className="add-to-cart-btn">Add to Cart</button>
        </div>
    );
};

export default ItemPage;
