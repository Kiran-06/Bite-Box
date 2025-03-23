import { useState } from "react";
import { FiHelpCircle, FiMessageSquare, FiPhone } from "react-icons/fi";

function HelpSidebar() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`help-sidebar ${isHovered ? "expanded" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="help-btn">
                <span>Need Help?</span>
            </div>

            <div className="help-options">
                <ul>
                    <li>
                        <FiHelpCircle className="menu-icon" />
                        <span>FAQs</span>
                    </li>
                    <li>
                        <FiPhone className="menu-icon" />
                        <span>Contact Us</span>
                    </li>
                    <li>
                        <FiMessageSquare className="menu-icon" />
                        <span>Live Chat</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default HelpSidebar;
