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

  // Close the sidebar if clicked outside of the sidebar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false); // Close the sidebar when clicked outside
      }
    };

    // Attach the event listener to handle clicks on the entire document
    document.addEventListener("mousedown", handleClickOutside); // For desktop click
    document.addEventListener("touchstart", handleClickOutside); // For mobile tap

    // Cleanup the event listeners when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []); // Only run once on mount

  return (
    <div
      className="sticky top-0 z-50"
      style={{
        backgroundColor: `rgba(0, 0, 0, ${opacity})`,
        boxShadow: `0 2px 4px rgba(135, 206, 250, 0.3), 0 2px 12px rgba(135, 206, 250, 0.4)`,
        borderBottom: `0.5px solid #ccc`, // Set opacity on the border
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
          <button
            onClick={toggleSidebar}
            className="text-2xl focus:outline-none focus:ring-none"
          >
            <HiOutlineMenuAlt3 /> {/* Hamburger icon */}
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
          {/* Close Button for Sidebar */}
          <button
            className="absolute top-4 right-4 text-2xl text-white z-50 focus:outline-none focus:ring-none"
            onClick={() => setIsSidebarOpen(false)} // Close on click of the close button
          >
            <IoClose /> {/* Close icon inside the sidebar */}
          </button>

          <button
            className="btn btn-ghost text-lg text-white border-none focus:outline-none focus:ring-none"
            onClick={() => setIsSidebarOpen(false)} // Close when tapping on the menu item
          >
            Home
          </button>
          <button
            className="btn btn-ghost bg-gradient-to-r from-lightBlue to-blue-950 text-white border-none focus:outline-none focus:ring-none hover:from-blue-950 hover:to-blue-400 shadow-md text-lg"
            onClick={() => setIsSidebarOpen(false)} // Close when tapping on the menu item
          >
            Download Extension
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
