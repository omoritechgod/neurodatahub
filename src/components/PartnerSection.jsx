import React from 'react';
import TrendCaminA from '../assets/images/trendcamina.png';
import Uniport from '../assets/images/uniport.png';
import Gatsby from '../assets/images/gatsby.png';
import '../assets/css/PartnerSection.css';


const PartnerSection = () => {
  return (
    <section className="partners-section">
      <h2 className="partners-title">Our Partners</h2>
      <div className="partners-container">
        <div className="partner-card">
          <img src={TrendCaminA} alt="TrendCaminA" className="partner-logo" />
        </div>
        <div className="partner-card">
          <img src={Uniport} alt="University of Port Harcourt" className="partner-logo" />
        </div>
        <div className="partner-card">
          <img src={Gatsby} alt="Gatsby" className="partner-logo" />
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
