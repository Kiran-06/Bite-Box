import { Link } from "react-router-dom";

function Navbar(){
    return (
        <nav className="nav">
            <Link class="nav-home" to="/">HOME</Link>
            <Link class="nav-cat" to="/categoriess">CATEGORIES</Link>
            <Link class="nav-deals" to="/deals">DEALS</Link>
        </nav>
    )
}

export default Navbar;