import React from 'react';
import NavbarMenu from './NavbarMenu';
import '../styles/navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <NavbarMenu />
            </div>
        </nav>
    );
}

export default Navbar;
