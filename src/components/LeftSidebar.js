// function LeftSidebar(){
//     return(
//     <div className="sidebar">
//         <div className="help-section">
//             <h3>Need Help?</h3>
//         </div>
//     </div>
//     )
// }

// export default LeftSidebar;


import { useState } from "react";
import { FiHelpCircle, FiMessageSquare, FiPhone, FiChevronLeft } from "react-icons/fi";

function LeftSidebar() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="sidebar">

            <div className="help-section">
                <h3>Need Help?</h3>
                <ul>
                    <li>
                        <FiHelpCircle className="icon" />
                        <a href="#">FAQs</a>
                    </li>
                    <li>
                        <FiPhone className="icon" />
                        <a href="#">Contact Support</a>
                    </li>
                    <li>
                        <FiMessageSquare className="icon" />
                        <a href="#">Live Chat</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default LeftSidebar;

