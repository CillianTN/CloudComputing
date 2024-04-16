import React, { useEffect, useState } from 'react';
import { list, getUrl } from 'aws-amplify/storage'; // Import list and getUrl
import { Link } from 'react-router-dom'; // Import Link for navigation
import styles from './App.module.css'; // Make sure the CSS styles are properly set up

function Documents() {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFiles = async () => {
            setLoading(true);
            try {
                const response = await list({ level: 'guest' }); // Fetch files at 'guest' access level
                const fileUrls = await Promise.all(response.items.map(async file => {
                    // Generate URL for each file
                    const urlResult = await getUrl({
                        key: file.key,
                        options: {
                            level: 'guest',
                            expiresIn: 900  // Set expiration time of URLs to 15 minutes
                        }
                    });
                    return { ...file, url: urlResult.url }; // Append URL to each file object
                }));
                setFiles(fileUrls);
            } catch (error) {
                console.error('Error fetching files:', error);
                setFiles([]);
            }
            setLoading(false);
        };

        fetchFiles();
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Documents</h1>
            {loading ? <p>Loading...</p> :
                <ul>
                    {files.map(file => (
                        <li key={file.key}>
                            {file.key} - <a href={file.url} target="_blank" rel="noopener noreferrer" download>Download</a>
                        </li>
                    ))}
                </ul>
            }
            <div className={styles.navigationLinks}>
                <Link to="/"><button className={styles.button}>Home</button></Link>
                <Link to="/about"><button className={styles.button}>About Us</button></Link>
                <Link to="/upload"><button className={styles.button}>Upload Documents</button></Link>
            </div>
        </div>
    );
}

export default Documents;
