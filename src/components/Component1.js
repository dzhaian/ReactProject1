import React from 'react';
import SearchBar from "./SearchBar";
import NavbarLogo from "./NavbarLogo";
import '../styles/Component1.css'
import RoundedButton from "./RoundedButton";

function Component1() {
    return (
        <div className="container">
            <div className="component1">
                <NavbarLogo />
                <SearchBar />
                <p>8-(800)-123-56-789</p>
                <RoundedButton text="Обратный звонок!" onClick={() => console.log('Кнопка нажата!')} />
            </div>
        </div>

    );
}

export default Component1;
