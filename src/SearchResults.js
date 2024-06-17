// SearchResults.js
import React from 'react';
import './SearchResults.css'; // Import CSS file for styling

const SearchResults = ({ results }) => {
  return (
    <div className="search-results-container">
      <h2>Search Results:</h2>
      {results.length > 0 ? (
        <ul className="search-results-list">
          {results.map((result, index) => (
            <li key={index} className="search-result-item">{JSON.stringify(result)}</li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
