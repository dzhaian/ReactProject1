import React from 'react';
import '../styles/navbar.css'

function NavbarMenuItem(props) {
    return (
        <li className="navbar-menu-item">
            <a href="/" className="navbar-menu-link">
                {props.text}
            </a>
        </li>
    );
}

export default NavbarMenuItem;
