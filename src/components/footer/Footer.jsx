import React from "react";
import Logo from "../../images/Linkedgagefull-white.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <footer className="px-4 divide-y bg-zinc-900 text-gray-50">
        <div className="container mx-auto pl-4 lg:pl-32 flex flex-col lg:flex-row lg:space-y-0 space-y-8 justify-between items-center">
          <div className="flex-1 flex flex-col lg:justify-center items-center lg:items-start mt-4 sm:mt-6 md:mt-4 lg:mt-2">
            <a href="/">
              <img src={Logo} alt="Homepage" className="w-56 mt-2 h-auto" />
            </a>
            <p className="w-11/12 lg:w-96 text-center lg:text-left text-sm lg:text-base">
              Effortlessly elevate your LinkedIn game with AI-powered,
              custom-tailored comments. Boost your engagement in real-time,
              across any language, with just one click!
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center py-10">
            <div className="space-y-3">
              <ul className="space-y-1 text-center lg:text-left text-sm lg:text-base">
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:underline"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:underline"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:underline"
                  >
                    Privacy Policy / Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="uppercase text-center lg:text-left dark:text-white mt-4 text-sm lg:text-base">
              Find us on
            </div>
            <div className="flex justify-center lg:justify-start space-x-3 mt-2">
              <ul className="flex">
                <li className="list-none">
                  <a
                    href="https://www.facebook.com/linkedgage"
                    className="w-8 h-8 md:w-8 md:h-8 bg-white rounded-md flex items-center justify-center border-4 border-white relative overflow-hidden hover:before:absolute hover:before:inset-0 hover:before:bg-blue-600 hover:before:transition-all"
                  >
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      className="text-gray-800 text-xl transition-transform duration-500 ease-in-out transform hover:rotate-360 hover:text-white"
                    />
                  </a>
                </li>
                <li className="list-none mx-4">
                  <a
                    href="https://x.com/LinkedGage"
                    className="w-8 h-8 md:w-8 md:h-8 bg-white rounded-md flex items-center justify-center border-4 border-white relative overflow-hidden hover:before:absolute hover:before:inset-0 hover:before:bg-blue-600 hover:before:transition-all"
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="text-gray-800 text-xl transition-transform duration-500 ease-in-out transform hover:rotate-360 hover:text-white"
                    />
                  </a>
                </li>
                <li className="list-none">
                  <a
                    href="https://www.linkedin.com/in/a-s-m-morshedul-hoque/"
                    className="w-8 h-8 md:w-8 md:h-8 bg-white rounded-md flex items-center justify-center border-4 border-white relative overflow-hidden hover:before:absolute hover:before:inset-0 hover:before:bg-blue-600 hover:before:transition-all"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      className="text-gray-800 text-xl transition-transform duration-500 ease-in-out transform hover:rotate-360 hover:text-white"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center pt-4 pb-6">
          <span className="text-center text-sm text-gray-400">
            &copy; 2024 Linkedgage. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
