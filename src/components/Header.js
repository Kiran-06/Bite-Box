import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useAuth } from './contexts/AuthContext';
import Navbar from './Navbar';
import React from 'react';
import FeedbackForm from './pages/Feedback';
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
                        <Link to="/cart"><button className="cart-button">
                            <FaShoppingCart />
                            <span className="cart-count">1</span>
                        </button>
                        </Link>
                        <span class="wel-name">Welcome: {user.firstName}</span>
                        <button className="logout-auth-button" onClick={logout}>
                            <FaUser />
                            <span>Logout</span>
                        </button>
                    </>
                ) : (

                    <>
                        <Link to="/auth">
                            <button className="login-auth-button" >
                                <FaUser />
                                <span>Login/Signup</span>
                            </button>
                        </Link>

                        <Link to="/Feedback"><button className="feedback-button">
                            feedback
                        </button>
                        </Link>
                    </>

                )}


            </div>

        </header>
    )
}

export default Header;