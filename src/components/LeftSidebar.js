import { useState } from "react";
import { FiHelpCircle, FiMessageSquare, FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";

function HelpSidebar() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`help-sidebar ${isHovered ? "expanded" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="help-btn">
                <FiHelpCircle className="menu-icon" />
            </div>

            <div className="help-options">
                <ul>
                    <li>
                        <FiHelpCircle className="menu-icon" />
                        <Link to="/faq">FAQs</Link>
                    </li>
                    <li>
                        <FiPhone className="menu-icon" />
                        <Link to="/ContactUs">Contact Us</Link>
                    </li>
                    <li>
                        <FiMessageSquare className="menu-icon" />
                        <Link to="/LiveChat">Live Chat</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default HelpSidebar;
