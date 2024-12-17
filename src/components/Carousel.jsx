// src/components/Carousel.jsx
import React from 'react';
import '../assets/css/Carousel.css';
import videoLoop from '../assets/video/vidloop.mp4';
import { Link } from 'react-router-dom'; 

const Carousel = () => {
  return (
    <div className="video-background">
      <video className="background-video" src={videoLoop} autoPlay loop muted></video>
      <div className="overlay"></div>
      <div className="content">
        <h1>NeuroData Hub</h1>
        <p>Demystifying Neuroscience with AI & Data</p>
        <Link to="/about">
          <button className="read-more-button">Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default Carousel;
