import React from 'react';
import '../styles/RoundedButton.css';

function RoundedButton({ onClick, text }) {
    return (
        <button className="rounded-button" onClick={onClick}>
            {text}
        </button>
    );
}

export default RoundedButton;
