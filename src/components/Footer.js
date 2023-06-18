import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    const linkStyle = {
        textDecoration: 'none', // Remove underline
        color: 'grey', // Change color to blue
    };
    return (
        <footer className="footer">
            <p>Лучший магазин (с) 2019 Все права защищены. Интернет-магазин оборудования для салонов красоты</p>
            <div>
                <a href="https://www.example.com" style={linkStyle}>Политика конфиденциальности</a>
            </div>
        </footer>
    );
};

export default Footer;
