// import { Link } from 'react-router-dom';
// import logo from '../assets/logo.png';
// import { useAuth } from './contexts/AuthContext';
// import Navbar from './Navbar';
// import React from 'react';
// import FeedbackForm from './pages/Feedback';
// import { FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';


// function Header() {

//     const { user, logout, setShowAuthModal, setIsLogin } = useAuth();

//     return (
//         <header className="header">
//             <div className='header-left'>
//                 <div className="logo">
//                     <img src={logo} alt="Site Logo" className="logo-img" />
//                     <span className="bite-box-logo">BITE BOX</span>
//                 </div>

//                 <Navbar />
//             </div>

//             <div className='header-middle'>
//                 <div className="search-container">
//                     <input
//                         type="text"
//                         placeholder="Search products..."
//                         className="search-input"
//                     />
//                     <button className="search-button">
//                         <FaSearch />
//                     </button>
//                 </div>
//             </div>

//             <div className='header-right'>

//                 {user ? (
//                     <>
//                         <Link to="/cart"><button className="cart-button">
//                             <FaShoppingCart />
//                             <span className="cart-count">1</span>
//                         </button>
//                         </Link>
//                         <span class="wel-name">Welcome: {user.firstName}</span>
//                         <button className="logout-auth-button" onClick={logout}>
//                             <FaUser />
//                             <span>Logout</span>
//                         </button>
//                     </>
//                 ) : (

//                     <>
//                         <Link to="/auth">
//                             <button className="login-auth-button" >
//                                 <FaUser />
//                                 <span>Login/Signup</span>
//                             </button>
//                         </Link>

//                         <Link to="/Feedback"><button className="feedback-button">
//                             feedback
//                         </button>
//                         </Link>
//                     </>

//                 )}


//             </div>

//         </header>
//     )
// }

// export default Header;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/logo.png';
import { useAuth } from './contexts/AuthContext';
import Navbar from './Navbar';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';

function Header() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = () => {
        if (!searchQuery.trim()) {
            alert("Please enter a search term.");
            return;
        }

        // ✅ Retrieve cart and products from local storage
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        const storedProducts = JSON.parse(localStorage.getItem("products")) || [];

        // ✅ Combine both cart and products into a single list for searching
        const allItems = [...storedCart, ...storedProducts];

        // ✅ Search for the item (case-insensitive)
        const foundItem = allItems.find((item) =>
            item.product_name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (foundItem) {
            // 🔥 Convert ID to string for consistency with React Router
            navigate(`/item/${String(foundItem.id)}`);
        } else {
            alert("Item not found in local storage.");
        }
    };

    return (
        <header className="header">
            <div className='header-left'>
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Site Logo" className="logo-img" />
                        <span className="bite-box-logo">BITE BOX</span>
                    </Link>
                </div>
                <Navbar />
            </div>

            {/* ✅ Search Bar inside Header */}
            <div className='header-middle'>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                    <button className="search-button" onClick={handleSearch}>
                        <FaSearch />
                    </button>
                </div>
            </div>

            <div className='header-right'>
                {user ? (
                    <>
                        <Link to="/cart"><button className="cart-button">
                            <FaShoppingCart />
                            <span className="cart-count">1</span>
                        </button></Link>

                        <span className="wel-name">Welcome: {user.firstName}</span>

                        <Link to="/"><button className="logout-auth-button" onClick={logout}>
                            <FaUser />
                            <span>Logout</span>
                        </button></Link>
                    </>
                ) : (
                    <>
                        <Link to="/auth">
                            <button className="login-auth-button">
                                <FaUser />
                                <span>Login/Signup</span>
                            </button>
                        </Link>
                        <Link to="/Feedback">
                            <button className="feedback-button">Feedback</button>
                        </Link>
                    </>
                )}
            </div>
        </header>
    );
}

export default Header;
