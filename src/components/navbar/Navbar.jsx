import React, { useState, useEffect, useRef } from "react";
import Logo from "../../images/Linkedgagefull-white.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi"; // Hamburger icon
import { IoClose } from "react-icons/io5"; // Close icon

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    const maxScroll = 200; // Maximum scroll value at which the navbar is fully transparent
    const newOpacity = Math.max(0.4, 1 - offset / maxScroll);
    setOpacity(newOpacity);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close sidebar if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="sticky top-0 z-50"
      style={{
        backgroundColor: `rgba(0, 0, 0, ${opacity})`,
        borderBottom: "1px solid #ccc",
      }}
    >
      <div className="navbar text-white py-2 px-4 md:px-8 text-base flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex-1 flex justify-center items-center">
          <a href="/">
            <img src={Logo} alt="Homepage" className="w-32 h-auto md:w-56" />
          </a>
        </div>

        <div className="flex-1"></div>

        {/* Hamburger Menu for Mobile */}
        <div className="flex md:hidden">
          <button onClick={toggleSidebar} className="text-2xl">
            {isSidebarOpen ? <IoClose /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>

        {/* Button Section for Desktop */}
        <div className="hidden md:flex flex-row gap-4 flex-1 justify-center">
          <button className="btn btn-ghost text-lg">Home</button>
          <button className="btn btn-ghost bg-gradient-to-r from-lightBlue to-blue-950 text-white border-0 hover:from-blue-950 hover:to-blue-400 shadow-md text-lg">
            Download Extension
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      {isSidebarOpen && (
        <div
          ref={sidebarRef}
          className="fixed inset-0 bg-black bg-opacity-80 z-40 flex flex-col items-center pt-24 space-y-4 md:hidden"
        >
          {/* Sidebar Links */}
          <button
            className="absolute top-4 right-4 text-2xl text-white"
            onClick={() => setIsSidebarOpen(false)}
          >
            <IoClose />
          </button>

          <button
            className="btn btn-ghost text-lg text-white"
            onClick={() => setIsSidebarOpen(false)}
          >
            Home
          </button>
          <button
            className="btn btn-ghost bg-gradient-to-r from-lightBlue to-blue-950 text-white border-0 hover:from-blue-950 hover:to-blue-400 shadow-md text-lg"
            onClick={() => setIsSidebarOpen(false)}
          >
            Download Extension
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
