import React from 'react';
import '../styles/Component2.css';
import RoundedButton from "./RoundedButton";

function Component2() {
    return (
        <div className="container">
            <div className="component2">
                <p>Супер кресло</p>
                <h1>Текст акции всегда отражает суть, а не просто <br/> болтовню, поэтому внимательнее</h1>
                <RoundedButton text="Подробнее" onClick={() => console.log('Кнопка нажата!')} />
            </div>
        </div>
    );
}

export default Component2;
