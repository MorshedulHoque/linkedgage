import React, { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here, e.g., API call
    setSubmitted(true);
    setEmail('');
  };

  return (
    <div className="">
      <div className="relative isolate overflow-hidden bg-black px-6 py-24 shadow-2xl sm:px-24 xl:py-32">
        <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl mb-9">
          Get Ahead of the Game!
        </h2>

        <p className="mx-auto mt-2 w-3/5 text-center text-lg leading-8 text-gray-300">
          Join our insider community for the latest insights, powerful growth hacks, and essential updates across social media, tech, and business. Be the first to know and transform your strategies with expert tips delivered directly to your inbox. Don’t miss out—elevate your game today!
        </p>

        <form className="mx-auto mt-10 flex max-w-md gap-x-4" onSubmit={handleSubmit}>
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <div>
            
          </div>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
            placeholder="Enter your email"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Notify me
          </button>
        </form>

        {submitted && (
          <p className="mt-4 text-center text-white">
            Exciting insights are headed your way. Stay tuned!  
          </p>
        )}

        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
          aria-hidden="true"
        >
          <circle cx="512" cy="512" r="512" fill="url(#blue-gradient)" fillOpacity="0.7"></circle>
          <defs>
            <radialGradient
              id="blue-gradient"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(512 512) rotate(90) scale(512)"
            >
              <stop stopColor="#0ea5e9" /> {/* Light Blue */}
              <stop offset="1" stopColor="#172554" stopOpacity="0" /> {/* Blue-950 */}
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default NewsletterSignup;
