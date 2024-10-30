import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../images/1.png";
import img2 from "../../images/2.png";
import img3 from "../../images/3.png";

const SliderComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { icon: '💡', title: 'Ideation', description: 'Never lose a great idea again.' },
    { icon: '📑', title: 'Bookmarks', description: 'Simply great bookmarking tool.' },
    { icon: '👥', title: 'Contacts', description: 'Life is all about the people you know.' }
  ];

  const images = [img1, img2, img3];

  const sliderSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px', // Adjust for your layout
    speed: 500
  };

  return (
    <div className="container">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            <span className="icon">{tab.icon}</span>
            <h2>{tab.title}</h2>
            <p>{tab.description}</p>
          </div>
        ))}
      </div>

      <div className="slider-container">
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div key={index} className="image-container">
              <img src={image} alt={`Slide ${index + 1}`} className="main-image" />
            </div>
          ))}
        </Slider>
      </div>

      {/* Add CSS here */}
      <style>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .tabs {
          display: flex;
          justify-content: space-around;
          margin-bottom: 20px;
        }

        .tab {
          cursor: pointer;
          text-align: center;
          padding: 10px;
        }

        .tab.active {
          border-bottom: 2px solid #333;
        }

        .icon {
          font-size: 24px;
        }

        .slider-container {
          position: relative;
          width: 80%;
        }

        .image-container {
          position: relative;
        }

        .main-image {
          width: 100%;
          height: auto;
        }

        .slick-center + .slick-slide img {
          filter: blur(5px); /* Adjust blur strength */
          transform: scale(0.9); /* Slightly scale down */
        }
      `}</style>
    </div>
  );
};

export default SliderComponent;
