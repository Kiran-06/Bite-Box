import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useAuth } from './contexts/AuthContext';
import Navbar from './Navbar';
import React from 'react';
import { FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';


function Header() {

    const { user, logout, setShowAuthModal, setIsLogin } = useAuth();

    return (
        <header className="header">
            <div className='header-left'>
                <div className="logo">
                    <img src={logo} alt="Site Logo" className="logo-img" />
                    <span className="bite-box-logo">BITE BOX</span>
                </div>

                <Navbar />
            </div>

            <div className='header-middle'>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="search-input"
                    />
                    <button className="search-button">
                        <FaSearch />
                    </button>
                </div>
            </div>

            <div className='header-right'>

                {user ? (
                    <>
                        <button className="cart-button">
                            <FaShoppingCart />
                            <span className="cart-count">1</span>
                        </button>
                        <span>Welcome: {user.firstName}</span>
                        <button className="auth-button" onClick={logout}>
                            <FaUser />
                            <span>Logout</span>
                        </button>
                    </>
                ) : (

                    <>
                        <Link to="/auth">
                            <button className="auth-button" >
                                <FaUser />
                                <span>Login/Signup</span>
                            </button>
                        </Link>

                        <button className="feedback-button">
                            feedback
                        </button>
                    </>

                )}


            </div>

        </header>
    )
}

export default Header;