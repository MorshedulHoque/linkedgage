import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Button from "./Button"; // Import the Button component

const ReviewCard = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;
    swiper.on("slideChange", () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    });
  }, []);

  const reviews = [
    // Your reviews array remains unchanged
    {
      name: "John Williams",
      image: "https://randomuser.me/api/portraits/men/15.jpg",
      review:
        "This extension has completely transformed the way I engage on LinkedIn. I no longer spend hours trying to craft the perfect comment—now it's done in seconds, and the results are spot on!",
    },
    {
      name: "Emily Chen",
      image: "https://randomuser.me/api/portraits/women/15.jpg",
      review:
        "I was skeptical at first, but this tool has been a game-changer. The tone options are so accurate, and it saves me so much time. It's a must-have for anyone serious about LinkedIn engagement.",
    },
    {
      name: "David Ramirez",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
      review:
        "This extension helps me stay consistent with commenting without burning out. My engagement has improved, and I'm able to focus on other tasks while still maintaining a presence on LinkedIn.",
    },
    {
      name: "Sophia Patel",
      image: "https://randomuser.me/api/portraits/women/20.jpg",
      review:
        "I love how intuitive this tool is. It generates thoughtful comments that feel authentic to my tone, and I've seen a noticeable increase in engagement on my posts.",
    },
    {
      name: "Liam Anderson",
      image: "https://randomuser.me/api/portraits/men/25.jpg",
      review:
        "Coming up with daily comments used to be such a chore, but this extension has made it effortless. The tone selection feature is incredibly useful for keeping my comments relevant and impactful.",
    },
    {
      name: "Rachel Kim",
      image: "https://randomuser.me/api/portraits/women/30.jpg",
      review:
        "This tool has streamlined my entire LinkedIn engagement process. The AI-generated comments sound professional, and I love how I can customize the tone to suit different posts.",
    },
    {
      name: "Oliver Green",
      image: "https://randomuser.me/api/portraits/men/35.jpg",
      review:
        "It's like having a personal assistant for LinkedIn! The time I've saved using this extension is incredible, and the comments are always on point.",
    },
    {
      name: "Hannah Lewis",
      image: "https://randomuser.me/api/portraits/women/40.jpg",
      review:
        "As someone who relies on LinkedIn for networking, this extension has been a lifesaver. I can quickly engage with multiple posts without sacrificing quality. Highly recommend!",
    },
  ];

  return (
    <div className="relative">
      <section
        id="testimonials"
        aria-label="What our customers are saying"
        className="py-20 sm:py-32 z-[-2] bg-neutral-950"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mb-10">
              What Our Customers Are Saying
            </h2>
          </div>
          <Swiper
            ref={swiperRef}
            spaceBetween={30}
            slidesPerView={1} // Ensure only one slide is visible on mobile
            breakpoints={{
              640: {
                slidesPerView: 1, // For small screens
              },
              768: {
                slidesPerView: 2, // For tablets
              },
              1024: {
                slidesPerView: 3, // For larger screens
              },
            }}
            pagination={{ clickable: true }}
            navigation={false}
            style={{ padding: "0 20px" }}
          >
            {reviews.map((item, index) => (
              <SwiperSlide key={index} className="relative">
                <div className="flex flex-col items-center bg-gray-800 rounded-2xl p-6 shadow-xl h-[450px] transition-transform transform hover:scale-105 overflow-hidden">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, starIndex) => (
                      <svg
                        key={starIndex}
                        className="h-5 w-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10 15.5l-5.5 3 2.1-6.4L0 7.5h6.5L10 1l3.5 6.5H20l-6.6 5.6 2.1 6.4L10 15.5z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="flex-1 mb-6 overflow-hidden">
                    <p className="text-lg sm:text-base md:text-lg lg:text-xl tracking-tight text-white text-center">
                      {item.review}
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center justify-start mt-6 border-t border-slate-100 pt-6 w-full">
                    <img
                      alt={`Avatar of ${item.name}`}
                      className="h-14 w-14 sm:h-16 sm:w-16 rounded-full border-2 border-gray-700 object-cover mr-4"
                      src={item.image}
                    />
                    <div>
                      <div className="font-display text-lg text-white font-semibold">
                        {item.name}
                      </div>
                    </div>
                  </figcaption>
                </div>
              </SwiperSlide>
            ))}

            {/* Improved Navigation buttons */}
            <Button
              swiperRef={swiperRef}
              isBeginning={isBeginning}
              isEnd={isEnd}
            />
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default ReviewCard;
