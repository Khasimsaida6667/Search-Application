// SearchBar.js
import React from 'react';
import './SearchBar.css'; // Import CSS file for styling

const SearchBar = ({ value, onChange, onSearch }) => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-input"
        value={value}
        onChange={onChange}
        placeholder="Enter search query..."
      />
      <button className="search-button" onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
