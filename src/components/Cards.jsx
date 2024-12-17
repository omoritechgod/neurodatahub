import React from "react";
import dataIcon from '../assets/images/icons/database.svg'; // Dataset icon
import learningIcon from '../assets/images/icons/book.svg'; // Learning icon
import collaborationIcon from '../assets/images/icons/team.svg'; // Collaboration icon
import '../assets/css/Cards.css';

const Cards = () => {
  const cardDetails = [
    {
      image: dataIcon,
      title: "Explore Neural Data",
      text: "Access large-scale neuroscience datasets, including brain imaging and electrophysiological recordings.",
    },
    {
      image: learningIcon,
      title: "Workshops & Tutorials",
      text: "Participate in hands-on workshops, tutorials, and courses to enhance your neural data analysis skills.",
    },
    {
      image: collaborationIcon,
      title: "Research Collaboration",
      text: "Connect with peers and mentors to share ideas, start projects, and leverage AI tools for research.",
    },
  ];

  return (
    <div className="cards">
      {cardDetails.map((card) => (
        <div className="card" key={card.title}>
          <div className="card-up">
            <div className="img-container">
              <img src={card.image} alt={card.title} />
            </div>
            <h1>{card.title}</h1>
          </div>
          <p>{card.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
