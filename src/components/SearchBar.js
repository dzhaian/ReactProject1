import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../styles/SearchBar.css'

function SearchBar() {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Поиск..." />
            <button type="submit">
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
    );
}

export default SearchBar;
