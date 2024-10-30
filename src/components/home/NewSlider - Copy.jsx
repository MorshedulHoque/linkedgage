import React, { useState, useEffect } from 'react';

// Import images as specified
import img1 from '../../images/1.png';
import img2 from '../../images/2.png';
import img3 from '../../images/4.png';


const content = [
  {
    title: "Click to Spark Conversations!",
    description:
      "Tired of crafting comments from scratch? Just click the LinkedGage icon attached to every post's comment section, and you're ready to roll.",
    img: img1,
  },
  {
    title: "Tone It Up",
    description:
      "Choose the right tone for any post—whether you want to sound professional, supportive, or enthusiastic, LinkedGage's popup offers various emotions for perfectly tailored responses.",
    img: img2,
  },
  {
    title: "Your Comment, Your Way",
    description:
      "Once your comment is generated, it's placed directly in the comment box. Feel free to edit it or simply hit 'Comment' to share it instantly.",
    img: img3,
  },
];

export default function NewSlider() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true); // Initial fade-in set to true

  useEffect(() => {
    const timer = setInterval(() => {
      setFadeIn(false); // Start fading out
      setTimeout(() => {
        setSelectedIndex((prevIndex) => (prevIndex + 1) % content.length);
        setFadeIn(true); // Start fading in after image has changed
      }, 300); // Wait for fade-out duration before changing image
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleContentChange = (index) => {
    if (index !== selectedIndex) {
      setFadeIn(false); // Start fading out
      setTimeout(() => {
        setSelectedIndex(index); // Change the image
        setFadeIn(true); // Start fading in
      }, 300); // Wait for fade-out duration before fading in new image
    }
  };

  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Engage in a Snap: Click, Engage, Done!
          </h2>
          <p className="text-xl text-gray-300">
            Transform your LinkedIn interactions with personalized, impactful
            comments at the click of a button!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 space-y-4">
            {content.map((item, index) => (
              <div
                key={index}
                className={`cursor-pointer transition-all duration-300 p-6 rounded-lg ${
                  selectedIndex === index
                    ? "bg-blue-600 text-white"
                    : "bg-white hover:bg-blue-100"
                }`}
                onClick={() => handleContentChange(index)}
                onKeyDown={(e) =>
                  e.key === "Enter" && handleContentChange(index)
                }
                tabIndex={0}
                role="button"
                aria-pressed={selectedIndex === index}
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl font-bold">{index + 1}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative aspect-video">
              <img
                src={content[selectedIndex].img}
                alt={content[selectedIndex].title}
                className={`object-contain w-full h-full transition-opacity duration-500 ${
                  fadeIn ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
