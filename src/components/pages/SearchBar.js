import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (!searchQuery.trim()) {
            alert("Please enter a search term.");
            return;
        }

        // Retrieve data from local storage
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        const storedProducts = JSON.parse(localStorage.getItem("products")) || [];

        // Combine both sources to search in (cart and products)
        const allItems = [...storedCart, ...storedProducts];

        const foundItem = allItems.find((item) =>
            item.product_name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (foundItem) {
            // ✅ Redirect to the item page if found
            navigate(`/item/${foundItem.id}`);
        } else {
            // ❌ Show not found prompt
            alert("Item not found in local storage.");
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search for an item..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
