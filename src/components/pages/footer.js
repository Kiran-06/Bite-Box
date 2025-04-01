import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../../assets/logo.png";


const Footer = () => {
    return (
        <footer className="footer">
            {/* Logo and Social Links */}
            <div className="footer-section footer-logo">
                <img src={logo} alt="Site Logo" className="logo-img" />
                <a href="/"><span>BITE</span>-BOX</a>
                <div className="footer-social">
                    <a href="https://www.facebook.com"><FaFacebookF /></a>
                    <a href="https://twitter.com"><FaTwitter /></a>
                    <a href="https://www.instagram.com"><FaInstagram /></a>
                    <a href="https://www.youtube.com"><FaYoutube /></a>
                </div>
            </div>

            {/* Product Links */}
            <div className="footer-section">
                <h3>Product</h3>
                <ul>
                    <li><a href="#">Grocery</a></li>
                    <li><a href="#">Packages</a></li>
                    <li><a href="#">Popular</a></li>
                    <li><a href="#">New</a></li>
                </ul>
            </div>

            {/* Category Links */}
            <div className="footer-section">
                <h3>Category</h3>
                <ul>
                    <li><a href="#">Fruits</a></li>
                    <li><a href="#">Vegetables</a></li>
                    <li><a href="#">Grocery</a></li>
                    <li><a href="#">Meat</a></li>
                </ul>
            </div>

            {/* Contact Section */}
            <div className="footer-section footer-contact">
                <h3>Contact</h3>
                <ul>
                    <li>📞 <a href="tel:+123456789">+123456789</a></li>
                    <li>📧 <a href="mailto:bitebox2025@gmail.com">bitebox2025@gmail.com</a></li>
                </ul>
            </div>

            {/* Copyright */}
            <div className="footer-copyright">
                <p>Copyright &copy; 2025 | All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
