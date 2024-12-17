import React from "react";
import person1 from "../assets/images/Review/IMG-20240914-WA0052.jpg";
import person2 from "../assets/images/Review/IMG-20240914-WA0053.jpg";
import person3 from "../assets/images/Review/IMG-20240914-WA0054.jpg";
import person4 from "../assets/images/Review/IMG-20240914-WA0055.jpg";
import { useState, useEffect } from "react";

const Reviews = () => {
  let reviews = [
    {
      image: person1,
      name: "David Mark",
      review:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit eum hic nihil minima eos nostrum aspernatur numquam laborum necessitatibus atque?",
    },
    {
      image: person2,
      name: "Cynthia Thomas",
      review:
        "Iste, molestiae ut? Aliquid, excepturi fuga ullam ipsam non accusantium quod molestias nisi doloremque perspiciatis porro voluptate dolorum ab, error aperiam minus.",
    },
    {
      image: person3,
      name: "Mitchelle White",
      review:
        "Id eveniet repudiandae facere, minus vel impedit blanditiis deserunt molestiae perspiciatis quos beatae, numquam asperiores ex? Enim assumenda id, quisquam at ipsam soluta. Dolore eligendi pariatur consectetur.",
    },
    {
      image: person4,
      name: "Alexander Becca",
      review:
        "Quasi, nobis, ex unde ipsa sapiente esse perspiciatis dolorum corrupti, rem veritatis officiis. Nihil dolore, perferendis, ab nemo numquam quia et, modi ut maxime sit porro delectus distinctio. Reiciendis doloremque accusamus similique!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the review every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [reviews.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className=" relative flex justify-center items-center py-[5rem] px-4 md:py-12 bg-primary">
      {/* Review Container */}
      <div className=" relative bg-white w-[50%] lg:w-[75%] md:w-full rounded-lg p-[2rem] transition-opacity duration-1000 ease-in-out h-[45vh] lg:h-[30vh] md:h-[35vh] flex items-center justify-center md:p-[1rem]">
        {reviews.map((review, index) => (
          <div
            key={index}
            className={` flex flex-col justify-center items-center text-center gap-[2rem] w-full transition-opacity duration-1000 ease-in-out 
              ${index === currentIndex ? "flex" : "hidden"}`}
          >
            <div className=" flex flex-col gap-5">
              <p className="text-gray-700 leading-5 md:text-sm">
                "{review.review}"
              </p>
              <div className="flex items-center justify-center flex-col gap-1">
                <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                  <img
                    src={review.image}
                    className="w-full"
                    alt={review.name}
                  />
                </div>
                <p className="font-bold text-xs">{review.name}</p>
              </div>
            </div>

          </div>
        ))}
        <div className="flex items-center gap-[0.25rem] absolute bottom-4">
              {reviews.map((_, index) => (
                <span
                  key={index}
                  className={`rounded-full drop-shadow-sm cursor-pointer transition ${
                    index === currentIndex
                      ? "bg-primary-20 h-[10px] w-[10px]"
                      : "bg-primary-30 h-[8px] w-[8px]"
                  }`}
                  onClick={() => goToSlide(index)}
                ></span>
              ))}
        </div>
      </div>
      <button
        className="absolute left-20 bg-[rgba(207,219,226,0.35)] px-[25px] py-[6px] hover:bg-[rgba(207,219,226)] text-[2rem] cursor-pointer rounded-full text-white flex  items-center justify-center lg:left-8 md:px-[19px] md:hidden"
        onClick={prevSlide}
      >
        ‹
      </button>
      <button
        className="absolute right-20 bg-[rgba(207,219,226,0.35)] px-[25px] py-[6px] hover:bg-[rgba(207,219,226)] text-[2rem] cursor-pointer rounded-full text-white flex  items-center justify-center lg:right-8 md:px-[19px] md:hidden"
        onClick={nextSlide}
      >
        ›
      </button>
    </div>
  );
};

export default Reviews;
