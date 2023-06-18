import React from 'react';
import NavbarMenuItem from './NavbarMenuItem';
import '../styles/navbarMain.css'
function NavbarMenu() {
    return (
        <div className="navbar-menu">
            <ul className="navbar-menu-list">
                <NavbarMenuItem text="Парикмахерская" />
                <NavbarMenuItem text="Барбершоп" />
                <NavbarMenuItem text="Маникюр" />
                <NavbarMenuItem text="Педикюр" />
                <NavbarMenuItem text="Массаж" />
                <NavbarMenuItem text="Мебель" />
            </ul>
        </div>
    );
}

export default NavbarMenu;
