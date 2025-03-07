import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import LoginPage from './LoginPage';
import Navbar from './Navbar';


function Header() {
    return(
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Site Logo" className="logo-img" />
                <span class="bite-box-logo">BITE BOX</span>
            </div>

            <Navbar />

            <div className="search-container">
                <input type="text" placeholder="Search for items" />
            </div>
            <div className="auth">
                <button><Link to="login">Login/Signup</Link></button>
            </div>

      </header>
    )
}

export default Header;