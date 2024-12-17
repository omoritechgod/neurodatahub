import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Questions = () => {
  // Keep track of the active question index
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question:
        "How long does it take for your indigenous food to arrive when ordered?",
      answer: "2-3 business days",
    },
    {
      question: "What happens if my flight is delayed or canceled?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, corrupti.",
    },
    {
      question: "Do you monitor flight arrival times?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, corrupti.",
    },
    {
      question: "How will I recognize my driver at the airport?",
      answer:
        "Details of driver, vehicle registration number and contact will be sent upon booking.",
    },
    {
      question: "What type of vehicles do you offer for airport pickups?",
      answer: "All kinds, depending on the size you need.",
    },
    {
      question:
        "Can I request a specific type of vehicle or additional services (e.g. child seat)?",
      answer: "Yes",
    },
  ];

  // Function to toggle the active question
  const toggleQuestion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null); // Close if already active
    } else {
      setActiveIndex(index); // Open clicked question
    }
  };

  return (
    <div className="">
      <div className=" w-[50%] m-auto text-sm flex flex-col gap-4 py-[2rem] lg:w-[75%] md:w-[95%] md:text-xs">
        {questions.map((question, index) => (
          <div key={index} className=" flex flex-col gap-3 rounded-lg drop-shadow-md p-4 bg-[rgba(255,255,255,0.75)]">
            <div className="flex justify-between items-center">
              <h1 className=" font-bold md:w-[80%] text-primary">{question.question}</h1>
              <FontAwesomeIcon
                icon={activeIndex === index ? faMinus : faPlus}
                onClick={() => toggleQuestion(index)}
                className="cursor-pointer text-primary"
              />
            </div>
            <hr className={`outline-none border-none bg-primary h-[1px] rounded-full drop-shadow-md ${activeIndex === index ? "flex" : "hidden"}`} />
            {/* Show the answer if the current question is active */}
            <p className={`text-slate-700 ${activeIndex === index ? "flex" : "hidden"}`}>
              {question.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
