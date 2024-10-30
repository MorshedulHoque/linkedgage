import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Import icons

const Button = ({ swiperRef, isBeginning, isEnd }) => {
  return (
    <div className="absolute top-1/2 transform -translate-y-1/2 z-20 flex justify-between w-full px-4">
      <button
        onClick={() => swiperRef.current.swiper.slidePrev()}
        className={`flex items-center justify-center h-12 w-12 rounded-full bg-white text-gray-800 shadow-lg transition-all duration-300 ease-in-out hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 ${
          isBeginning ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isBeginning}
        aria-label="Previous slide"
        style={{ marginLeft: "-32px" }} // Move left button further left
      >
        <FiChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={() => swiperRef.current.swiper.slideNext()}
        className={`flex items-center justify-center h-12 w-12 rounded-full bg-white text-gray-800 shadow-lg transition-all duration-300 ease-in-out hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 ${
          isEnd ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isEnd}
        aria-label="Next slide"
        style={{ marginRight: "6px" }} // Move right button further left
      >
        <FiChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
};

export default Button;
