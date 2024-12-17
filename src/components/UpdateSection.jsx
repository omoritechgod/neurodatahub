import React from 'react';
import "../assets/css/UpdateSection.css";
import update1 from '../assets/images/update1.jpg';
import update2 from '../assets/images/update2.jpg';
import update3 from '../assets/images/update3.jpg';

const updates = [
  {
    id: 1,
    category: 'CAMPUS AND COMMUNITY',
    title: 'Imbizo Computational Neuroscience  workshop in South Africa',
    description:
      'Former Electrical and Computer Engineering master’s student João Catelas was one of the winners of the 1st edition of the Alcino...',
    imageUrl: update1 ,
  },
  {
    id: 2,
    category: 'CAMPUS AND COMMUNITY',
    title: 'Bridging Maths course at Gatsby Computational Neuroscience unit, University of London',
    description:
      'The Técnico library offers the academic community two new services for assigning unique identification numbers...',
    imageUrl: update2 ,
  },
  {
    id: 3,
    category: 'SCIENCE AND TECHNOLOGY',
    title: 'Facilitators from Allen Institute',
    description:
      'Daniela Lopes developed work on potential flaws in the Tor network, a software that allows anonymous and secure browsing...',
    imageUrl: update3 ,
  },
];

const UpdateSection = () => {
  return (
    <section className="updates-section">
      <h2 className="section-title">Updates</h2>
      <div className="updates-container">
        {updates.map((update) => (
          <div className="update-card" key={update.id}>
            <div className="update-image-container">
                <img
                src={update.imageUrl}
                alt={update.title}
                className="update-image"
                />
            </div>
            <div className="update-content">
              {/* <span className="update-category">{update.category}</span> */}
              <h3 className="update-title">{update.title}</h3>
              <p className="update-description">{update.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpdateSection;
