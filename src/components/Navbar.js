import { Link } from "react-router-dom";
import { useScroll } from "./contexts/ScrollContext";
import { useAuth } from "./contexts/AuthContext";

function Navbar() {

    const { scrollToCategories } = useScroll();
    const { user } = useAuth();

    return (
        <nav className="nav">
            <Link className="nav-home" to="/">HOME</Link>
            <Link onClick={scrollToCategories} className="nav-cat">CATEGORIES</Link>
            <Link class="nav-deals" to="deals">DEALS</Link>
            {user?.isAdmin && (
                <Link className="nav-admin" to="/admin">
                    ADMIN DASHBOARD
                </Link>
            )}
        </nav>
    )
}

export default Navbar;