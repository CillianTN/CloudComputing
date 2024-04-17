import { Amplify } from 'aws-amplify';
import { withAuthenticator, WithAuthenticatorProps } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styles from './App.module.css';
import AboutPage from './AboutPage';
import Documents from './Documents';
import UploadDocuments from './UploadDocuments';

Amplify.configure(config);

function App({ signOut, user }: WithAuthenticatorProps) {

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={
          <div className={styles.container}>
            <img src="https://marketing.mtu.ie/contentfiles/images/MTU/Logos/MTU_Logo_Colour_RGB_300dpi.jpg" alt="MTU Logo" className={styles.logo} />

            <h1 className={styles.heading}>Hello {user?.username} Welcome to MTU Whiteboard!</h1>
            <h4 className={styles.subheading}>(This totally isn't a cheap rip off of what was once Blackboard)</h4>
            <h4 className={styles.subheading}>Use one of the options below to interact with the website. If you want to upload a document, press the 'Upload Documents' button. To view already uploaded documents, click 'Documents'.</h4>
            <button className={styles.button} onClick={handleSignOut}>
              Sign out
            </button>
            <Link to="/about"><button className={`${styles.button} ${styles.linkButton}`}>About Us</button></Link>
            <Link to="/documents"><button className={`${styles.button} ${styles.linkButton}`}>Documents</button></Link>
            <Link to="/upload"><button className={`${styles.button} ${styles.linkButton}`}>Upload Documents</button></Link>
          </div>
        } />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/upload" element={<UploadDocuments />} />
      </Routes>
    </div>
  );
}

export default withAuthenticator(App);
