import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Category.css';


const Categories = ({ onSelectCategory }) => {
    const categories = [
        "Fruits & Vegetables",
        "Dairy & Eggs",
        "Meat & Seafood",
        "Bakery & Snacks",
        "Beverages",
        "Household Essentials"
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-8">
            {categories.map((category) => (
                <div
                    key={category}
                    className="p-6 bg-gray-100 rounded-lg shadow-md text-center cursor-pointer"
                    onClick={() => onSelectCategory(category)}
                >
                    <h3 className="text-lg font-semibold">{category}</h3>
                </div>
            ))}
        </div>
    );
};

export default Categories;