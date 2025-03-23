import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                {/* Logo and Social Links */}
                <div style={styles.section}>
                    <h2 style={styles.logo}>
                        <a href="/"><span style={{ color: "#00aaff" }}>BITE</span>BOX</a>
                    </h2>
                    <div style={styles.social}>
                        <a href="https://www.facebook.com" style={styles.icon}><FaFacebookF /></a>
                        <a href="https://twitter.com" style={styles.icon}><FaTwitter /></a>
                        <a href="https://www.instagram.com" style={styles.icon}><FaInstagram /></a>
                        <a href="https://www.youtube.com" style={styles.icon}><FaYoutube /></a>
                    </div>
                </div>

                {/* Product Links */}
                <div style={styles.section}>
                    <h3>Product</h3>
                    <ul style={styles.list}>
                        <li><a href="#">Grocery</a></li>
                        <li><a href="#">Packages</a></li>
                        <li><a href="#">Popular</a></li>
                        <li><a href="#">New</a></li>
                    </ul>
                </div>

                {/* Category Links */}
                <div style={styles.section}>
                    <h3>Category</h3>
                    <ul style={styles.list}>
                        <li><a href="#">Beauty</a></li>
                        <li><a href="#">Vegetables</a></li>
                        <li><a href="#">Baby</a></li>
                        <li><a href="#">Medicine</a></li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div style={styles.section}>
                    <h3>Contact</h3>
                    <ul style={styles.list}>
                        <li>📞 <a href="tel:+123456789">+123456789</a></li>
                        <li>📧 <a href="mailto:bitebox2025@gmail.com">bitebox2025@gmail.com</a></li>
                        <li><a href="#">Cities we serve</a></li>
                    </ul>
                </div>
            </div>

            {/* Copyright Section */}
            <div style={styles.copyright}>
                <p>Copyright &copy; 2025 | All Rights Reserved</p>
            </div>
        </footer>
    );
};

// Inline Styles
const styles = {
    footer: {
        backgroundColor: "#1c1c1c",
        color: "#fff",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
    },
    container: {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        maxWidth: "1200px",
        margin: "0 auto",
    },
    section: {
        flex: "1",
        minWidth: "220px",
        marginBottom: "20px",
    },
    logo: {
        fontSize: "28px",
        fontWeight: "bold",
    },
    social: {
        display: "flex",
        gap: "15px",
        marginTop: "15px",
    },
    icon: {
        color: "#fff",
        fontSize: "20px",
        textDecoration: "none",
        transition: "color 0.3s",
    },
    list: {
        listStyle: "none",
        padding: 0,
        lineHeight: "2",
    },
    copyright: {
        textAlign: "center",
        padding: "15px",
        backgroundColor: "#111",
        color: "#aaa",
        fontSize: "14px",
    }
};

export default Footer;
