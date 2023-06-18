import React from 'react';
import '../styles/Component6.css'
import RoundedButton from "./RoundedButton";
import SocialIcons from "./SocialIcons";

function Component6() {
    return (
        <div className="container">
            <div className="component6">
                <SocialIcons />
                <p>198555, Невский пр. 140, офис 140</p>
                <p>8-(800)-123-56-789</p>
                <RoundedButton text="Обратный звонок!" onClick={() => console.log('Кнопка нажата!')} />
            </div>
        </div>
    );
}

export default Component6;
