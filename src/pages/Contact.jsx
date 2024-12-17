import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css/Contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="w-full">
      <Header />

      {/* Breadcrumbs Section */}
      <main className="breadCrumb bc-container">
        <div className="bc-bg"></div>
        <h1 className="bc-heading">Contact Us</h1>
        <div className="bc-link">
          <Link to="/">Home</Link> {"/"} 
          <Link to="/contact">Contact Us</Link>
        </div>
      </main>

      {/* Contact Section */}
      <section className="contact-section">
        <h1>Feel free to get in touch <br /> with NeuroDataHub</h1>
        <div className="contact-container">
          {/* About Card */}
          <div className="contact-card">
            <FontAwesomeIcon icon={faBrain} className="contact-icon" />
            <h3>About Us</h3>
            <p>Demystifying Neuroscience with AI & Data.</p>
          </div>

          {/* Email Card */}
          <div className="contact-card">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <h3>Send Email</h3>
            <p>info@neurodatahub.com</p>
            <p>contact@neurodatahub.com</p>
          </div>

          {/* Call Card */}
          <div className="contact-card">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <h3>Call Now</h3>
            <p>(+234) 803-702-7190</p>
            {/* <p>(+234) 802-055-4163</p> */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
