import React from "react";
import Globe from "../../images/Globe.webp";
import HeroBubbleLg from "../../images/HeroBubbleLg.webp";
import HeroBubbleSm from "../../images/HeroBubbleSm.webp";

const HeroFifth = () => {
  return (
    <div className="min-h-fit bg-black pt-32 md:pt-20 pb-20 px-4">
      <div className="flex flex-col md:flex-row gap-12 md:gap-28 items-center relative">
        {/* Bubble */}
        <div className="absolute -top-16 left-1/4 md:left-[10%]">
          <img src={HeroBubbleSm} alt="" className="w-1/2 md:w-auto" />
        </div>
        <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 md:top-[80%] md:left-[45%]">
          <img src={HeroBubbleLg} alt="" className="w-1/3 md:w-auto" />
        </div>
        {/* Bubble End */}
        <div className="flex-1 flex justify-center mb-8 md:mb-0">
          <img
            src={Globe}
            alt="Globe"
            className="w-3/4 md:w-full max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-gray-50 mb-6">
            Get In Touch
          </h2>
          <p className="mb-4 text-gray-50 text-base md:text-lg">
            A good design is not only aesthetically pleasing, but{" "}
            <br className="hidden md:inline" /> also functional. It should be
            able to solve the problem.
          </p>
          <form
            action=""
            className="flex flex-col gap-4 items-center md:items-start"
          >
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full max-w-xs"
            />
            <textarea
              placeholder="Bio"
              className="textarea textarea-bordered textarea-lg w-full max-w-xs"
            ></textarea>
            <button className="btn btn-ghost bg-gradient-to-r from-lightBlue to-blue-950 text-white border-0 hover:from-blue-950 hover:to-blue-400 shadow-md text-lg mt-6 w-full max-w-xs">
              Get in Touch
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroFifth;
