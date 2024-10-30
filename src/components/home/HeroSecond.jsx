import React from "react";
import first from "../../images/first.png";
import second from "../../images/second.png";
import third from "../../images/third.png";

const HeroSecond = () => {
  return (
    <section className="py-6 bg-black sm:py-12 lg:py-16">
      <style>
        {`
          .card {
            overflow: hidden;
            background-color: #1f2937; /* bg-gray-800 */
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* shadow-md */
            border-radius: 0.75rem; /* rounded-xl */
            height: 100%;
            border: 1px solid #4b5563; /* border-gray-600 */
            transition: box-shadow 0.3s ease-in-out;
          }

          .card:hover {
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); /* hover:shadow-lg */
          }

          .icon-container {
            padding: 1rem; /* p-4 */
            border-radius: 1rem; /* rounded-2xl */
            background-color: #4b5563; /* bg-gray-700 */
            transition: transform 0.3s ease-in-out, background-image 1s ease-in-out; /* transition effects */
          }

          .card:hover .icon-container {
            background-image: linear-gradient(to right, #0ea5e9, #172554); /* hover:from-purple-500 hover:to-blue-500 */
            transform: scale(1.05); /* hover:scale-105 */
          }

          .heading {
            color: #e5e7eb; /* text-gray-50 */
            margin-top: 1.5rem; /* mt-6 */
            font-size: 1.5rem; /* text-2xl */
            font-weight: bold; /* font-bold */
          }

          .paragraph {
            color: #e5e7eb; /* text-gray-50 */
            margin-top: 1.5rem; /* mt-6 */
            font-size: 1rem; /* text-base */
          }
        `}
      </style>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">
            Why LinkedIn™ Engagement Feels Like a Hassle
          </h2>
          <p className="mb-4 text-gray-50 text-lg sm:text-xl">
            Engaging consistently on LinkedIn is more challenging than it seems.
            From writing thoughtful comments to maintaining an active presence,
            it often feels like a time-consuming burden.
          </p>
        </div>
        <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-8 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
          {/* First Box */}
          <div className="relative" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
            <div className="card">
              <div className="absolute top-0 flex w-full justify-center">
                <div className="left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000" />
              </div>
              <div className="p-4 sm:p-9 text-center">
                <div className="flex justify-center">
                  <div className="icon-container">
                    <img src={first} alt="" className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="heading text-lg sm:text-xl">
                  Engaging with LinkedIn™ posts can feel overwhelming
                </h3>
                <p className="paragraph text-sm sm:text-base">
                  Spending hours trying to craft the perfect comment every day
                  is exhausting and impractical.
                </p>
              </div>
            </div>
          </div>

          {/* Second Box */}
          <div className="relative" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1500">
            <div className="card">
              <div className="absolute top-0 flex w-full justify-center">
                <div className="left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000" />
              </div>
              <div className="p-4 sm:p-9 text-center">
                <div className="flex justify-center">
                  <div className="icon-container">
                    <img src={second} alt="" className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="heading text-lg sm:text-xl">
                  Finding the right words for each comment takes time
                </h3>
                <p className="paragraph text-sm sm:text-base">
                  Coming up with unique, thoughtful responses that stand out
                  isn't easy, especially when you're trying to comment on
                  multiple posts.
                </p>
              </div>
            </div>
          </div>

          {/* Third Box */}
          <div className="relative" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="2000">
            <div className="card">
              <div className="absolute top-0 flex w-full justify-center">
                <div className="left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000" />
              </div>
              <div className="p-4 sm:p-9 text-center">
                <div className="flex justify-center">
                  <div className="icon-container">
                    <img src={third} alt="" className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="heading text-lg sm:text-xl">
                  Quickly writing impactful comments feels nearly impossible
                </h3>
                <p className="paragraph text-sm sm:text-base">
                  It’s tough to deliver valuable comments in just a few minutes
                  without sacrificing quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSecond;
