import React from 'react';
import '../styles/navbarLogo.css';
import logo from '../img/splatter.png';
function NavbarLogo() {
    return (
        <a href="/" className="navbar-logo">
         <img src={logo} alt={"img"}/><p>BEAUTY</p>
        </a>
    );
}

export default NavbarLogo;
