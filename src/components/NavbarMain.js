import React from 'react';
import '../styles/navbarMain.css';
import NavbarMenuMain from "./NavbarMenuMain";

function NavbarMain() {
    return (
        <nav className="navbar-main">
            <div className="container">
                <NavbarMenuMain />
            </div>
        </nav>
    );
}

export default NavbarMain;