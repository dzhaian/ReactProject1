import React from 'react';
import '../styles/Card.css';
import img from '../img/img3.png';
import RoundedButton from "./RoundedButton";

const Card = ({ image, title, description, buttonText }) => {
    return (
        <div className="card">
            <img src={img} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                <RoundedButton text="Купить" onClick={() => console.log('Кнопка нажата!')} />
            </div>
        </div>
    );
};

export default Card;
