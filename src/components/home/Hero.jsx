import React from "react";
import BubbleLg from "../../images/bubble_big.png";
import BubbleMd from "../../images/bubble_medium.png";
import BubbleSm from "../../images/bubble_small.png";
import MiddleLight from "../../images/Ellipse 5.png";
import demo from "../../images/1.png";
import demo2 from "../../images/Hero template-croped.jpg";
import Carve from "./Carve/Carve";

const Hero = () => {
  return (
    <div className="relative min-h-fit bg-black">
      {/* Hero Card */}
      <div className="absolute top-[43%] sm:top-[38%] md:top-[35%] lg:top-[35%] left-[54%] sm:left-[40%] md:left-[35%] lg:left-[50%] flex justify-center transform -translate-x-[54%] sm:-translate-x-[40%] md:-translate-x-[35%] lg:-translate-x-[50%] -translate-y-1/2 z-20 px-4 w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl">
        <div className="absolute w-[80%] sm:w-1/2 md:w-1/3 lg:w-full h-auto border-8 rounded-2xl shadow-2xl border-gray-200/25">
          <img
            src={demo2}
            alt=""
            className="w-full h-auto object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* Bubbles */}
      <div className="absolute top-10 left-5 sm:top-20 sm:left-10 md:top-40 md:left-60 z-20">
        <img src={BubbleLg} alt="" className="w-10 sm:w-20 md:w-36 lg:w-48" />
      </div>
      <div className="absolute top-5 right-5 sm:top-10 sm:right-10 md:top-20 md:right-40 z-10">
        <img src={BubbleMd} alt="" className="w-8 sm:w-16 md:w-28 lg:w-32" />
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-[20%] sm:-translate-y-[18%] md:-translate-y-[15%] lg:-translate-y-[10%] z-10">
        <img
          src={MiddleLight}
          alt="Middle Light"
          className="w-6 sm:w-10 md:w-16 lg:w-auto"
        />
      </div>

      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10 md:-top-10">
        <img src={BubbleSm} alt="" className="w-6 sm:w-10 md:w-20 lg:w-24" />
      </div>

      {/* Hero Text Section */}
      <div
        className="relative z-10 px-4 py-4 sm:py-6 text-center flex flex-col justify-center items-center gap-2"
        data-aos="zoom-out"
        data-aos-duration="2000"
      >
        <h1 className="text-xl sm:text-2xl md:text-5xl lg:text-6xl font-bold text-gray-50">
          Elevate Your LinkedIn <br /> <span>Conversations</span>
        </h1>
        <p className="text-xs sm:text-sm md:text-lg lg:text-xl mb-2 md:mb-4 w-[70%] lg:w-full text-gray-200">
          Generate engaging comments tailored to your tone and content!
        </p>
        <button className="btn btn-ghost slow-glow-button bg-gradient-to-r from-lightBlue to-blue-950 text-white border-0 hover:from-blue-950 hover:to-blue-400 shadow-md text-sm sm:text-base md:text-lg transition-all duration-800 ease-in-out justify-center">
          <div className="indicator">Download Extension</div>
        </button>
      </div>

      {/* Curve background */}
      <div>
        <Carve />
      </div>

      {/* Glow Button Styles */}
      <style jsx>{`
        @keyframes glowRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .slow-glow-button {
          position: relative;
          overflow: hidden;
          padding: 8px 16px;
        }

        .slow-glow-button::before {
          content: "";
          position: absolute;
          top: -150%;
          left: -150%;
          height: 400%;
          width: 400%;
          background: conic-gradient(
            transparent,
            transparent,
            transparent,
            #ffffff
          );
          animation: glowRotate 4s linear infinite;
        }

        .slow-glow-button::after {
          content: "";
          position: absolute;
          inset: 2px;
          background: inherit;
          z-index: 1;
          border-radius: inherit;
        }

        .slow-glow-button:hover::before {
          animation-duration: 2s;
        }

        .slow-glow-button > * {
          position: relative;
          z-index: 2;
        }
      `}</style>
    </div>
  );
};

export default Hero;