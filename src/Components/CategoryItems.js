import React, { useState } from "react";
import { Link } from 'react-scroll';

const CategoryItems = ({ category, onBack }) => {
    const items = {
        "Fruits & Vegetables": [
            { name: "Apple", price: "$2/kg" },
            { name: "Banana", price: "$1/kg" },
            { name: "Carrot", price: "$1.5/kg" },
        ],
        "Dairy & Eggs": [
            { name: "Milk", price: "$3/L" },
            { name: "Cheese", price: "$5/block" },
        ],
    };

    return (
        <div className="p-8">
            <button onClick={onBack} className="mb-4 px-4 py-2 bg-gray-300 rounded">Back</button>
            <h2 className="text-xl font-bold mb-4">{category}</h2>
            <div className="grid grid-cols-2 gap-4">
                {items[category]?.map((item) => (
                    <div key={item.name} className="p-4 bg-gray-200 rounded-lg text-center">
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryItems;