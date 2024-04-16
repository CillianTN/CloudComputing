import React, { useState } from 'react';
import { uploadData } from 'aws-amplify/storage';  
import { useNavigate, Link } from 'react-router-dom'; // Include useNavigate and Link
import styles from './App.module.css'; // Using the same CSS module for styling consistency

function UploadDocuments() {
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const navigate = useNavigate();  // Navigate function for potentially navigating

    const handleFileChange = (event) => {
        setFile(event.target.files[0]); // Set file on file selection
    };

    const handleUpload = async () => {
        if (file) {
            setUploading(true);
            try {
                const result = await uploadData({
                    key: file.name,
                    data: file,
                    options: {
                        accessLevel: 'guest',
                        onProgress: progress => {
                            console.log(`Progress: ${progress.loaded}/${progress.total}`);
                        }
                    }
                });
                console.log('Succeeded:', result);
                alert('Upload successful!');
                // Reset state to simulate a page refresh
                setFile(null);
                setUploading(false);
            } catch (error) {
                console.error('Error:', error);
                alert('Upload failed!');
                setUploading(false);
            }
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Upload Documents</h1>
            <input type="file" onChange={handleFileChange} />
            <button className={styles.button} onClick={handleUpload} disabled={uploading}>
                {uploading ? 'Uploading...' : 'Upload'}
            </button>
            {file && <p>File ready to upload: {file.name}</p>}
            <div className={styles.navigationLinks}>
                <Link to="/"><button className={styles.button}>Home</button></Link>
                <Link to="/about"><button className={styles.button}>About Us</button></Link>
                <Link to="/documents"><button className={styles.button}>Documents</button></Link>
            </div>
        </div>
    );
}

export default UploadDocuments;
