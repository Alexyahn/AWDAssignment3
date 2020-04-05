import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return <nav>
                <div className="container">
                    <div className="navbar-header">
                        <a href="https://csp.edu"><img src="https://www.csp.edu/wp-content/themes/csponline/assets/images/logo.svg" alt="Concordia Logo" /></a>
                            <ul className="nav-links">
                                <Link to='/Home'>
                                    <li>Home</li>
                                </Link >

                                <Link to='/About'>
                                    <li>About</li>
                                </Link >

                                <Link to='/Contact'>
                                    <li>Contact</li>
                                </Link >

                                <Link to='/Shop'>
                                    <li>Shop</li>
                                </Link >
                            </ul>
                    </div>
                </div>
            </nav>
}

export default Navbar;