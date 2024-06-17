// FileUpload.js
import React from 'react';
import './FileUpload.css'; // Import CSS file for styling

const FileUpload = ({ onFileUpload }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onFileUpload(file);
  };

  return (
    <div className="file-upload-container">
      <label htmlFor="file-upload" className="file-upload-label">
        <span className="file-upload-icon">📁</span>
        Click to upload file
      </label>
      <input
        id="file-upload"
        className="file-upload-input"
        type="file"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileUpload;
