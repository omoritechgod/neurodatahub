import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import AboutImage from '../assets/images/abt-1.jpg'; // Adjust path if necessary
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faUsers, faLaptopCode, faDownload, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />

      {/**************** breadcrumb start ****************/}
      <main className="breadCrumb bc-container">
        <div className="bc-bg"></div>
        <h1 className="bc-heading">About Us</h1>
        <div className="bc-link">
          <Link to="/">Home</Link> {"/"} <Link to="/about">About Us</Link>
        </div>
      </main>
      {/**************** breadcrumb end ****************/}

      {/* About Us Section */}
      <section className="about-section">
        <div className="about-img">
          <img src={AboutImage} alt="About NeuroData Hub" />
        </div>
        <div className="about-content">
          <h2>About NeuroData Hub</h2>
          <p>
            At NeuroData Hub, we're demystifying neuroscience with AI and data. <br />Our mission is to make neuroscience accessible to everyone by providing resources, tutorials, and datasets <br /> for researchers and students.
            Our platform democratizes access to neuroscience data, tools, and education. Whether you're a student, researcher, or AI enthusiast, we provide the resources needed to analyze neural data, <br /> explore new insights, and contribute to the field.
          </p>
          <button className="contact-btn">Get In Touch</button>
        </div>

      </section>

      {/* Mission and Vision Section */}
      <section className="mission-vision">
        <div className="mission">
          <h3>Mission Statement</h3>
          <p>
            Demystifying Neuroscience with AI & Data. We aim to simplify neuroscience 
            by providing comprehensive resources and support, making the field accessible to all.
          </p>
        </div>
        <div className="vision">
          <h3>Vision Statement</h3>
          <p>
            To create a vibrant research community connecting African students with global 
            researchers and neuroscience experts, fostering collaboration and innovation.
          </p>
        </div>
      </section>
      {/* Statistics Section */}
<section className="stats-section">
  <div className="stats-container">
    <div className="stat">
      <h3>500+</h3>
      <p>Trained Students</p>
    </div>
    <div className="stat">
      <h3>30+</h3>
      <p>Projects</p>
    </div>
    <div className="stat">
      <h3>20+</h3>
      <p>Satisfied Clients</p>
    </div>
  </div>
</section>



      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h3>Why Choose NeuroData Hub?</h3>
        <div className="why-cards">
          <div className="why-card">
            <FontAwesomeIcon icon={faUsers} className="icon" />
            <h4>A Global Community</h4>
            <p>Connecting neuroscientists, data scientists, and students, with a focus on empowering African researchers.</p>
          </div>
          <div className="why-card">
            <FontAwesomeIcon icon={faLaptopCode} className="icon" />
            <h4>Cutting-Edge AI Tools</h4>
            <p>Access machine learning models and data analysis pipelines for neuroscience research.</p>
          </div>
          <div className="why-card">
            <FontAwesomeIcon icon={faDownload} className="icon" />
            <h4>Free Access to Datasets</h4>
            <p>Explore and download datasets from leading repositories like the Allen Brain Observatory and the Human Connectome Project.</p>
          </div>
          <div className="why-card">
            <FontAwesomeIcon icon={faChalkboardTeacher} className="icon" />
            <h4>Hands-On Learning</h4>
            <p>Practical tutorials, workshops, and courses to build essential skills in analyzing neural data and applying AI techniques.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
