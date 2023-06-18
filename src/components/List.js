import React from 'react';
import '../styles/List.css';

const List = () => {
    return (
        <ul className="list">
            <li><a href="#"><strong>Популярные категории</strong></a></li>
            <div className="line"></div>
            <li><a href="https://example.com/nasadki">Насадки</a></li>
            <li><a href="https://example.com/instrumenty">Инструменты</a></li>
            <li><a href="https://example.com/gel-laki">Гель-лаки</a></li>
            <li><a href="https://example.com/dizayn">Дизайн</a></li>
            <li><a href="https://example.com/narashchivanie">Наращивание</a></li>
            <li><a href="https://example.com/oborudovanie">Оборудование</a></li>
            <div className="line"></div>
        </ul>
    );
};

export default List;
