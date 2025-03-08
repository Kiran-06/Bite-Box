import { Link } from "react-router-dom";
import Category from "./Category";

function Navbar() {
    return (
        <nav className="nav">
            <Link class="nav-home" to="/">Home</Link>
            <Link class="nav-cat" to="/Category">Categories</Link>
            <Link class="nav-deals" to="/deals">Deals</Link>
            <Link class="nav-feedback" to="/feedback">Feedback</Link>
        </nav>
    )
}

export default Navbar;