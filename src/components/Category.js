import React from 'react';
import { Link } from 'react-router-dom';
import Fruits from './Category/Fruits';

const Category = () => {
    return (
        <>
            <h1 class="heading">CATEGORIES</h1>
            <div class="container">
                <div class="category-box">
                    <Link to="/Fruits" class="fruits"><h2>Fruits</h2></Link>
                </div>
                <div class="category-box">
                    <h2>Dairy</h2>
                </div>
                <div class="category-box">
                    <h2>Bakery</h2>
                </div>
                <div class="category-box">
                    <h2>Meat</h2>
                </div>
                <div class="category-box">
                    <h2>Seafood</h2>
                </div>
                <div class="category-box">
                    <h2>Beverages</h2>
                </div>
            </div>
        </>
    );
};

export default Category;