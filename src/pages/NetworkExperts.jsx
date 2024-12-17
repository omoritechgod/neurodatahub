import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../assets/css/NetworkExperts.css";
import drIb from "../assets/images/team/dr-ib.jpg";
import drOk from "../assets/images/team/dr-ok.jpg";

const experts = [
  {
    name: "Dr. Ibeachu Chinagorom",
    title: "Director",
    image: drIb,
    linkedin: "#",
    twitter: "#",
    website: "#",
    bio: "Dr. Ibeachu Chinagorom is the Director at NeuroDataHub, specializing in AI for neuroscience research with a focus on data-driven solutions.",
  },
  {
    name: "Dr. Ugochi Okengwu",
    title: "Associate Prof Computer Sci",
    image: drOk,
    linkedin: "#",
    twitter: "#",
    website: "#",
    bio: "Dr. Ugochi Okengwu is an Associate Professor of Computer Science with expertise in computational neuroscience and machine learning.",
  },
];

const NetworkExperts = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentExpert, setCurrentExpert] = useState(null);

  const openModal = (expert) => {
    setCurrentExpert(expert);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentExpert(null);
  };

  return (
    <div className="w-full">
      <Header />

      {/* Breadcrumb Section */}
      <main className="breadCrumb bc-container">
        <div className="bc-bg"></div>
        <h1 className="bc-heading">Network</h1>
        <div className="bc-link">
          <Link to="/">Home</Link> {" / "}
          <span>Network of Experts</span>
        </div>
      </main>

      {/* Experts Section */}
      <section className="experts-container">
        <h2 className="section-title">Meet Our Experts</h2>
        <div className="experts-grid">
          {experts.map((expert, index) => (
            <div key={index} className="expert-card">
              <img src={expert.image} alt={expert.name} className="expert-image" />
              <h3 className="expert-name">{expert.name}</h3>
              <p className="expert-title">{expert.title}</p>
              <div className="expert-icons">
                <a href={expert.twitter} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href={expert.linkedin} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href={expert.website} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLink} />
                </a>
              </div>
              <button className="read-more-button" onClick={() => openModal(expert)}>
                Read More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Section */}
      {modalOpen && currentExpert && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="modal-close" onClick={closeModal}>
              &times;
            </span>
            <img src={currentExpert.image} alt={currentExpert.name} className="modal-image" />
            <h3 className="modal-name">{currentExpert.name}</h3>
            <p className="modal-title">{currentExpert.title}</p>
            <p className="modal-bio">{currentExpert.bio}</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default NetworkExperts;
