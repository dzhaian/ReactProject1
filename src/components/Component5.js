import React from 'react';
import '../styles/Component5.css'
import List from "./List";

const App = () => {
    return (
        <div className="container">
            <footer className="component5">
                <List />
                <List />
                <List />
                <List />
            </footer>
        </div>
    );
}

export default App;