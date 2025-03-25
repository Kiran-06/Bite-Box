// import { Link } from "react-router-dom";
// import { useScroll } from "./contexts/ScrollContext";
// import { useAuth } from "./contexts/AuthContext";

// function Navbar() {

//     const { scrollToCategories } = useScroll();
//     const { user } = useAuth();

//     return (
//         <nav className="nav">
//             <Link className="nav-item nav-home" to="/">HOME</Link>
//             <Link to="/" onClick={scrollToCategories} className="nav-item nav-cat">CATEGORIES</Link>
//             <Link class="nav-item nav-deals" to="deals">DEALS</Link>
//             {user?.isAdmin && (
//                 <>
//                     <Link className="nav-item nav-admin" to="/admin">
//                         ADMIN DASHBOARD
//                     </Link>
//                     <Link className="nav-item nav-user" to="/ums">
//                         USER MANAGEMENT
//                     </Link>
//                 </>

//             )}
//         </nav>
//     )
// }

// export default Navbar;


import { Link, useNavigate } from "react-router-dom";
import { useScroll } from "./contexts/ScrollContext";
import { useAuth } from "./contexts/AuthContext";

function Navbar() {

    const { scrollToCategories } = useScroll();
    const { user } = useAuth();
    const navigate = useNavigate();

    const scrollToTop = () => {
        navigate('/'); // Ensure navigation to home
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top
    };

    return (
        <nav className="nav">
            <Link className="nav-item nav-home" to="/" onClick={scrollToTop}>HOME</Link>
            <Link to="/" onClick={scrollToCategories} className="nav-item nav-cat">CATEGORIES</Link>
            <Link className="nav-item nav-deals" to="/deals">DEALS</Link>

            {user?.isAdmin && (
                <>
                    <Link className="nav-item nav-admin" to="/admin">
                        ADMIN DASHBOARD
                    </Link>
                    <Link className="nav-item nav-user" to="/ums">
                        USER MANAGEMENT
                    </Link>
                </>
            )}
        </nav>
    );
}

export default Navbar;
