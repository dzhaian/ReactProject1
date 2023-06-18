import React from 'react';
import NavbarMenuItem from './NavbarMenuItem';
import '../styles/navbar.css'
function NavbarMenu() {
    return (
        <div className="navbar-menu">
            <ul className="navbar-menu-list">
                <NavbarMenuItem text="Доставка" />
                <NavbarMenuItem text="Оплата" />
                <NavbarMenuItem text="Отзывы" />
                <NavbarMenuItem text="Вопрос-ответ" />
                <NavbarMenuItem text="Контакты" />
            </ul>
        </div>
    );
}

export default NavbarMenu;
