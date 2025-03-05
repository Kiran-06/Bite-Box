// import React from "react";
// import './Navbar.css';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import { Link } from 'react-router-dom';
// import HomePage from "./Home";
// import FeedbackForm from "./FeedbackForm";

// // import logo from './logo.png';


// // const Navbar = () => {
// //     return (
// //         <nav>
// //             <div className="navbar">
// //                 <div className="navbar-logo">
// //                     {/* <img src="/images/logo.png" className={logo} alt="logo" /> */}
// //                 </div>
// //                 <div class="right-navbar">
// //                     <ul className="menu">
// //                         <li>
// //                             <Link to={HomePage}>Home</Link>
// //                         </li>
// //                         <li>
// //                             <a href="#" class="dropdown">Categories
// //                                 <div class="dropdown-content">
// //                                     <a href="#">Fruits & Vegetabales</a>
// //                                     <a href="#">Bakery</a>
// //                                     <a href="#">Meat</a>
// //                                 </div>
// //                             </a>

// //                         </li>
// //                         <li>
// //                             <a href="#" class="dropdown">Deals
// //                                 <div class="dropdown-content">
// //                                     <a href="#">Deal of the Day</a>
// //                                     <a href="#">Special Deal</a>
// //                                 </div>
// //                             </a>
// //                         </li>
// //                         <li>
// //                             <a href="#">Cart</a>
// //                         </li>
// //                         <li>
// //                             <Link to="/LoginPage">Login/SignUp</Link>
// //                         </li>
// //                         <li>
// //                             <Link to="/FeedbackForm">Feedback</Link>
// //                         </li>

// //                     </ul>
// //                 </div>
// //             </div >
// //         </nav >
// //     );
// // };

// // export default Navbar;

import React, { useState } from "react";
import { Link } from 'react-scroll';
import './Navbar.css';
import FeedbackForm from "./FeedbackForm";

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full bg-white shadow-md p-4 flex justify-between items-center">
            <img src="/logo.png" alt="Logo" className="h-10" />
            <div className="space-x-6">
                <Link to="home" smooth={true} duration={500} className="cursor-pointer">Home</Link>
                <Link to="categories" smooth={true} duration={500} className="cursor-pointer">Categories</Link>
                <Link to="deals" smooth={true} duration={500} className="cursor-pointer">Deals</Link>
                <Link to="cart" smooth={true} duration={500} className="cursor-pointer">Shopping Cart</Link>
                <Link to="login" smooth={true} duration={500} className="cursor-pointer">Login/Signup</Link>
                <Link to="/FeedbackForm" smooth={true} duration={500} className="cursor-pointer">Feedback</Link>
            </div>
        </nav>
    );
};

export default Navbar;