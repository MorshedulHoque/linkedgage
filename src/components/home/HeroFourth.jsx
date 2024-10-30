import React from "react";
import Earth from "../../images/Earth_Print.png";

const HeroFourth = () => {
  return (
    <div className="min-h-fit bg-zinc-900 flex flex-col items-center justify-center py-10 md:py-20">
      {/* Main Gradient Section */}
      <div className="bg-gradient-to-r from-lightBlue to-blue-900 w-11/12 md:w-4/6 h-auto md:h-96 rounded-3xl flex flex-col md:flex-row justify-between items-center p-6 md:p-12 shadow-lg">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left mb-6 md:mb-0">
          <div className="p-4 md:p-8">
            <p className="mb-2 text-gray-100 text-sm md:text-base">
              Love Our Tool?
            </p>
            <h2 className="text-2xl md:text-4xl font-bold leading-tight text-gray-50 mb-6">
              Join Thousands of Professionals Today!
            </h2>
            <button className="btn btn-neutral bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-2 rounded-full hover:scale-105 transition-transform duration-300">
              Download
            </button>
          </div>
        </div>
        {/* Image Content */}
        <div className="flex-1 flex justify-center md:justify-end mb-6 md:mb-0">
          <img
            src={Earth}
            alt="Earth"
            className="w-2/3 h-auto max-w-xs md:max-w-sm lg:max-w-md animate-float"
          />
        </div>
      </div>

      {/* Statistics Section */}
      <div className="max-w-6xl mx-auto text-center py-10 md:py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-50 mb-6">
          By the Numbers
        </h2>
        <p className="text-gray-300 mb-4 md:mb-6">
          See how our LinkedIn extension is transforming conversations globally.
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 items-center">
          {[
            { label: "Total Users", value: "Over 10,000" },
            { label: "Total Comments Generated", value: "1 million+" },
            { label: "Global Reach", value: "50+ countries" },
            { label: "User Satisfaction", value: "95%" },
            { label: "Average Response Time", value: "Under 5 seconds" },
            { label: "Active Sessions", value: "20,000+" }, // Added new statistic
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded-xl shadow-md text-center w-28 h-28 md:w-32 md:h-32 flex flex-col justify-center items-center transition-transform transform hover:scale-105 duration-300"
            >
              <p className="text-gray-400 text-xs md:text-sm mb-1">
                {stat.label}
              </p>
              <p className="text-gray-50 text-lg font-semibold">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroFourth;
