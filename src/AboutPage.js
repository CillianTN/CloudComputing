import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AboutPage.module.css';  // Import CSS module

function AboutPage() {
  return (
    <div className={styles.container}>
      <img src="https://marketing.mtu.ie/contentfiles/images/MTU/Logos/MTU_Logo_Colour_RGB_300dpi.jpg" alt="MTU Logo" className={styles.logo} />
      <h1 className={styles.header}>About Us</h1>
      <p className={styles.text}>
        MTU Whiteboard was born out of a shared vision for innovative learning solutions within the Cloud Application Development module at our institution.<br />
        As a team passionate about harnessing technology to enhance education, we embarked on a journey to create a platform where lecturers and students could seamlessly connect through the exchange of knowledge.<br />
        With a focus on user experience and accessibility, MTU Whiteboard empowers learners to engage with course materials anytime, anywhere. Our dedication to fostering collaborative learning drives us forward as we continue to evolve and improve the platform for the benefit of our vibrant academic community. Join us on this journey and reimagine education with MTU Whiteboard.
      </p>
      {/* Button to navigate back to the home page */}
      <Link to="/"><button className={styles.button}>Go Back to Home</button></Link>
    </div>
  );
}

export default AboutPage;
