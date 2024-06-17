// App.js
import React, { useState } from 'react';
import FileUpload from './FileUpload';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import DataService from './DataService';
import './App.css'; // Import CSS file for styling

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [data, setData] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleFileUpload = async (file) => {
    const parsedData = await DataService.parseDataFile(file);
    setData(parsedData);
    setFileName(file.name); // Update state with file name
  };

  const handleSearch = async () => {
    const results = await DataService.search(searchQuery, data);
    setSearchResults(results);
    setShowSearchResults(true); // Show search results when button is clicked
  };

  return (
    <div className="app-container">
      <h1 className="header">Search Application</h1>
      <div className="file-upload-container">
        <FileUpload onFileUpload={handleFileUpload} />
        {/* Display file name if uploaded */}
        {fileName && <p>File uploaded: {fileName}</p>}
      </div>
      <div className="search-bar-container">
        <SearchBar
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onSearch={handleSearch}
        />
      </div>
      {showSearchResults && (
        <div className="search-results-container">
          <SearchResults results={searchResults} />
        </div>
      )}
    </div>
  );
};

export default App;


