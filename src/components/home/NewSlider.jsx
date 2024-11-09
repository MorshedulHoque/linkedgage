import React, { useState, useCallback } from "react";
import img1 from "../../images/2.webp";
import img2 from "../../images/3.webp";
import img3 from "../../images/4.webp";

const content = [
  {
    title: "Click to Spark Conversations!",
    description:
      "Tired of crafting comments from scratch? Just click the LinkedGage icon attached to every post’s comment section, and you’re ready to roll.",
    img: img1,
  },
  {
    title: "Tone It Up",
    description:
      "Choose the right tone for any post—whether you want to sound professional, supportive, or enthusiastic, LinkedGage’s popup offers various emotions for perfectly tailored responses.",
    img: img2,
  },
  {
    title: "Your Comment, Your Way",
    description:
      "Once your comment is generated, it’s placed directly in the comment box. Feel free to edit it or simply hit ‘Comment’ to share it instantly.",
    img: img3,
  },
];

function NewSlider() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  // Handler for changing the selected index
  const handleContentChange = useCallback(
    (newIndex) => {
      if (newIndex !== selectedIndex) {
        setFadeIn(false);
        setTimeout(() => {
          setSelectedIndex(newIndex % content.length);
          setFadeIn(true);
        }, 300);
      }
    },
    [selectedIndex]
  );

  return (
    <div className="bg-zinc-900 flex flex-col items-center min-h-fit px-4 py-16 sm:px-12 md:py-32">
      <div className="text-center mb-10">
        <h1 className="text-white text-3xl sm:text-4xl font-bold mb-2">
          Engage in a Snap: Click, Engage, Done!
        </h1>
        <p className="text-gray-400 text-base sm:text-lg mb-10">
          Transform your LinkedIn interactions with personalized, impactful comments at the click of a button!
        </p>
      </div>

      <div className="flex flex-col lg:flex-row w-full">
        {/* Content List */}
        <div className="flex flex-col w-full lg:w-1/2 lg:mr-20 mb-8 lg:mb-0">
          {content.map((item, index) => (
            <div
              key={index}
              onClick={() => handleContentChange(index)}
              role="button"
              tabIndex={0}
              aria-pressed={selectedIndex === index}
              onKeyPress={(e) => e.key === "Enter" && handleContentChange(index)}
              className={`p-5 rounded-lg mb-4 cursor-pointer flex items-center relative transition-all duration-300 ${
                selectedIndex === index
                  ? "bg-gray-800 transform scale-105"
                  : "bg-transparent"
              }`}
            >
              {selectedIndex === index && (
                <div className="absolute bottom-0 left-0 h-1 w-full bg-sky-500 rounded-md"></div>
              )}
              <div className="font-bold text-3xl mr-5 text-white">{`${index + 1}/`}</div>
              <div>
                <div className="font-bold text-white text-lg mb-1">
                  {item.title}
                </div>
                <div className="text-sm text-gray-300">{item.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Display */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full aspect-video">
            <img
              src={content[selectedIndex].img}
              alt={content[selectedIndex].title}
              loading="lazy"
              className={`object-contain w-full h-full transition-opacity duration-500 ${
                fadeIn ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewSlider;
