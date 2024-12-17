import React from 'react';
import AboutImage from '../assets/images/abt.jpg'; // Ensure this is the correct path
import '../assets/css/AboutUs.css';
import '../assets/css/About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Image Section */}
        <div className="about-image">
          <img src={AboutImage} alt="About NeuroData Hub" />
        </div>

        {/* Text Section */}
        <div className="about-text">
          <h2>Unlock the Power of Brain Data</h2>
          <p>
            Welcome to <strong>NeuroData Hub</strong>—where neuroscience meets AI innovation. Based at the <em>University of Port Harcourt</em>, we empower students, researchers, and AI enthusiasts to explore neural data like never before.
          </p>
          <p>
            Dive into our tools, workshops, and datasets to uncover insights that push the boundaries of brain research.
          </p>
          {/* Call-to-Action Buttons */}
          <div className="about-buttons">
            <a href="#datasets" className="btn-primary">Explore Datasets</a>
            <a href="#workshops" className="btn-secondary">Join a Workshop</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
