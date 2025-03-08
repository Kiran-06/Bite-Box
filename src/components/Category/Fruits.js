import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleWhole, faBanana } from '@fortawesome/free-solid-svg-icons';


const Fruits = () => {
    return (
        <>
            <h1 class="heading">FRUITS</h1>
            <div class="container">
                <div class="category-box">
                    <h2>Apple</h2>

                </div>
                <div class="category-box">
                    <h2>Banana</h2>
                </div>
                <div class="category-box">
                    <h2>Orange</h2>
                </div>
                <div class="category-box">
                    <h2>Strawberry</h2>
                </div>
                <div class="category-box">
                    <h2>Mango</h2>
                </div>
                <div class="category-box">
                    <h2>Watermelon</h2>
                </div>
            </div>
        </>
    );
};

export default Fruits;