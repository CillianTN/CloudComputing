import React, { useState } from 'react';

function HomePage({ signOut, user }) {
  const [uploading, setUploading] = useState(false);

  const handleFileUpload = async (event) => {
    // Existing file upload logic
  };

  const handleUploadButtonClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div className="container">
      <h1 className="heading">Hello {user?.username} Welcome to MTU Whiteboard!</h1>
      <h4>(This totally isn't a cheap rip off of what was once Blackboard)</h4>
      <input id="fileInput" type="file" onChange={handleFileUpload} style={{ display: 'none' }} />
      <button className="button" onClick={handleUploadButtonClick}>Upload File</button>
      <button className="button" onClick={handleSignOut}>Sign out</button>
      {uploading && <p className="uploading-message">Uploading... relax... this might take a moment depending on your internet</p>}
    </div>
  );
}

export default HomePage;
