import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
const Games = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quiz = [
    {
      id: 1,
      question: "A group of fish is called?",
      option1: "School",
      option2: "Pack",
      option3: "Fleet",
      answer: "School",
    },
    {
      id: 2,
      question: "Lauryn Hill was part of the hip hop trio called?",
      option1: "The Fugees",
      option2: "Destiny's Child",
      option3: "Salt-N-Pepa",
      answer: "The Fugees",
    },
    {
      id: 3,
      question: "What is the chemical symbol for water?",
      option1: "O2",
      option2: "H2O",
      option3: "HO2",
      answer: "H2O",
    },
    {
      id: 4,
      question: "A group of lions is called?",
      option1: "Pride",
      option2: "Pack",
      option3: "Herd",
      answer: "Pride",
    },
    {
      id: 5,
      question: "Author of Romeo & Juliet is?",
      option1: "Shakespeare",
      option2: "Hemingway",
      option3: "Tolstoy",
      answer: "Shakespeare",
    },
    {
      id: 6,
      question: "What is the capital of Canada?",
      option1: "Toronto",
      option2: "Ottawa",
      option3: "Vancouver",
      answer: "Ottawa",
    },
    {
      id: 7,
      question: "Old teen TV show is Buffy the?",
      option1: "Vampire Slayer",
      option2: "Witch",
      option3: "Ghost Hunter",
      answer: "Vampire Slayer",
    },
    {
      id: 8,
      question: "What are the 5 colors of the Olympic rings?",
      option1: "Red, Blue, Green, Yellow, Black",
      option2: "Red, Blue, Green, Yellow, White",
      option3: "Red, Green, Yellow, Black, Orange",
      answer: "Red, Blue, Green, Yellow, Black",
    },
    {
      id: 9,
      question: "What language is spoken in Brazil?",
      option1: "Spanish",
      option2: "Portuguese",
      option3: "French",
      answer: "Portuguese",
    },
    {
      id: 10,
      question:
        "What company name is also the name of the longest river in the world?",
      option1: "Nile",
      option2: "Amazon",
      option3: "Mississippi",
      answer: "Amazon",
    },
    {
      id: 11,
      question: "What is the name of the talking snowman in Disney’s Frozen?",
      option1: "Olaf",
      option2: "Sven",
      option3: "Kristoff",
      answer: "Olaf",
    },
    {
      id: 12,
      question: "Elon Musk is CEO of which global automotive brand?",
      option1: "Tesla",
      option2: "Ford",
      option3: "Toyota",
      answer: "Tesla",
    },
    {
      id: 13,
      question: "What operating system does a Google Pixel phone use?",
      option1: "iOS",
      option2: "Android",
      option3: "Windows Phone",
      answer: "Android",
    },
    {
      id: 14,
      question: "Harry Potter’s best friend is called?",
      option1: "Hermione",
      option2: "Ron",
      option3: "Neville",
      answer: "Ron",
    },
    {
      id: 15,
      question: "What is the name of the crab in Disney’s The Little Mermaid?",
      option1: "Sebastian",
      option2: "Flounder",
      option3: "Scuttle",
      answer: "Sebastian",
    },
    {
      id: 16,
      question: "Batman lives in what city?",
      option1: "Metropolis",
      option2: "Gotham",
      option3: "Star City",
      answer: "Gotham",
    },
    {
      id: 17,
      question:
        "Who painted the ceiling of the Sistine Chapel in Vatican City?",
      option1: "Leonardo da Vinci",
      option2: "Michelangelo",
      option3: "Raphael",
      answer: "Michelangelo",
    },
    {
      id: 18,
      question: "What is the name of the coffee house in the TV Show Friends?",
      option1: "Central Perk",
      option2: "Monk's Café",
      option3: "MacLaren's Pub",
      answer: "Central Perk",
    },
    {
      id: 19,
      question: "Another name for New York City is?",
      option1: "The Big Orange",
      option2: "The Big Apple",
      option3: "The Big Peach",
      answer: "The Big Apple",
    },
    {
      id: 20,
      question: "What awards has an EGOT winner won?",
      option1: "Emmy, Grammy, Oscar, Tony",
      option2: "Emmy, Golden Globe, Oscar, Tony",
      option3: "Grammy, Oscar, Pulitzer, Nobel",
      answer: "Emmy, Grammy, Oscar, Tony",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showCoupon, setShowCoupon] = useState(false);
  const [hasStarted, setHasStarted] = useState(false); // New state to control when quiz starts

  // Get 3 random questions from the quiz array
  const randomQuestions = quiz.sort(() => 0.5 - Math.random()).slice(0, 3);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === randomQuestions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < randomQuestions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      setIsCompleted(true);
      if (score === 2) setShowCoupon(true); // Check if all 3 are correct
    }
  };

  return (
    <div>
      <Header />
      <main className="breadCrumb bc-container">
        <div className="bc-bg"></div>
        <h1 className="bc-heading">Games</h1>
        <div className="bc-link">
          <Link to="/">Home</Link>
          {"/"}
          <Link to="/game">Games</Link>
        </div>
      </main>

      {!hasStarted ? ( // Show instructions and start button when game hasn't started
        <div className="w-[50%] m-auto py-[5rem] flex flex-col gap-2 md:w-[90%]">
          <h1 className="font-bold text-xl uppercase">Game Instructions</h1>
          <p>
            Answer 3 random questions correctly to win a coupon code for a 3%
            discount on your next purchase.
          </p>
          <button
            onClick={() => setHasStarted(true)} // Set hasStarted to true when button is clicked
            className="text-xs flex items-center gap-1 bg-primary text-white rounded-full p-2.5 px-4 w-fit"
          >
            Proceed to play game{" "}
            <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
          </button>
        </div>
      ) : (
        // Show the quiz once game has started
        <div className="flex justify-center items-center py-[5rem] px-4">
          {!isCompleted ? (
            <div className="bg-white w-[35%] lg:w-[50%] md:w-[90%] md:text-sm rounded-lg p-6 drop-shadow-md">
              <h2>{randomQuestions[currentQuestionIndex].question}</h2>
              <div className="flex flex-col gap-2 mt-4">
                <button
                  className="bg-gray-100 p-2 rounded"
                  onClick={() =>
                    handleAnswer(randomQuestions[currentQuestionIndex].option1)
                  }
                >
                  {randomQuestions[currentQuestionIndex].option1}
                </button>
                <button
                  className="bg-gray-100 p-2 rounded"
                  onClick={() =>
                    handleAnswer(randomQuestions[currentQuestionIndex].option2)
                  }
                >
                  {randomQuestions[currentQuestionIndex].option2}
                </button>
                <button
                  className="bg-gray-100 p-2 rounded"
                  onClick={() =>
                    handleAnswer(randomQuestions[currentQuestionIndex].option3)
                  }
                >
                  {randomQuestions[currentQuestionIndex].option3}
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center">
              {showCoupon ? (
                <div className=" bg-white drop-shadow-md rounded-md p-4 w-[90%] flex flex-col gap-4 m-auto text-sm">
                  <FontAwesomeIcon icon={faCircleCheck} className=" text-5xl text-green-500" />
                  <div>
                  <h2>Congratulations! You completed the quiz.</h2>
                  <p>
                    You've won a 3% discount coupon! Use code:{" "}
                    <span className="font-bold">DISCOUNT3</span>
                  </p>
                  </div>
                  <Link to="/" className=" text-xs bg-primary rounded-full p-3 text-white flex gap-2 items-center justify-center w-[50%] m-auto">
                    <FontAwesomeIcon icon={faArrowLeft} className=" text-center text-xs" />
                    Back to home
                  </Link>
                </div>
              ) : (
                <div className=" bg-white drop-shadow-md rounded-md p-4 w-[90%] flex flex-col gap-4 m-auto text-sm">
                  <FontAwesomeIcon icon={faCircleXmark} className=" text-5xl text-red-600" />
                  <div>
                  <h2>Congratulations! You completed the quiz.</h2>
                  <p>Better luck next time! Try again to win the discount.</p>
                  </div>
                  <Link to="/" className=" text-xs bg-primary rounded-full p-3 text-white flex gap-2 items-center justify-center w-[50%] m-auto">
                    <FontAwesomeIcon icon={faArrowLeft} className=" text-center text-xs" />
                    Back to home
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Games;
