import React, { useState, useEffect, useRef } from "react";
import Globe from "../../images/Globe.webp";
import HeroBubbleLg from "../../images/HeroBubbleLg.webp";
import HeroBubbleSm from "../../images/HeroBubbleSm.webp";

const HeroFifth = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const messageRef = useRef(null);

  // Toast component with inline animation
  const Toast = ({ message, onClose }) => {
    useEffect(() => {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Auto-close toast after 3 seconds
      return () => clearTimeout(timer);
    }, [onClose]);

    return (
      <div
        className="fixed top-28 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-md"
        style={{
          animation: "fade-in-out 3s ease forwards",
          opacity: 0,
          transform: "translateY(-20px)",
        }}
      >
        {message}
      </div>
    );
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    fetch("https://docs.google.com/forms/d/e/1FAIpQLSeGNk2rD1yOVeSoNSlJjarNbhGQas43KsMzvNLzRCBMecRtlg/formResponse", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
          setError(false);
        } else {
          setError(true);
        }
        // Clear input fields regardless of success or error
        emailRef.current.value = "";
        nameRef.current.value = "";
        messageRef.current.value = "";
      })
      .catch(() => {
        setError(true);
        // Clear input fields if there's an error
        emailRef.current.value = "";
        nameRef.current.value = "";
        messageRef.current.value = "";
      });
  };

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
          <img src={Globe} alt="Globe" className="w-3/4 md:w-full max-w-sm md:max-w-md lg:max-w-lg" />
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
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center md:items-start">
            <input
              ref={emailRef}
              type="email"
              name="entry.2098599803"
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs"
              required
            />
            <input
              ref={nameRef}
              type="text"
              name="entry.213045715"
              placeholder="Name"
              className="input input-bordered w-full max-w-xs"
              required
            />
            <textarea
              ref={messageRef}
              name="entry.77016581"
              placeholder="Your Message"
              className="textarea textarea-bordered textarea-lg w-full max-w-xs p-3"
              required
            ></textarea>
            <button
              type="submit"
              className="btn btn-ghost bg-gradient-to-r from-lightBlue to-blue-950 text-white border-0 hover:from-blue-950 hover:to-blue-400 shadow-md text-lg mt-6 w-full max-w-xs"
            >
              Get in Touch
            </button>
          </form>
          {/* Toast Notifications */}
          {submitted && (
            <Toast
              message="Your message has been sent successfully!"
              onClose={() => setSubmitted(false)}
            />
          )}
          {error && (
            <Toast
              message="Your message has been sent successfully!"
              onClose={() => setError(false)}
            />
          )}
        </div>
      </div>

      {/* Inline keyframes */}
      <style>
        {`
          @keyframes fade-in-out {
            0% { opacity: 0; transform: translateY(-20px); }
            10% { opacity: 1; transform: translateY(0); }
            90% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-20px); }
          }
        `}
      </style>
    </div>
  );
};

export default HeroFifth;
