import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom"; // RouterProvider is sufficient for routing
import router from "./route/route"; // Your router configuration
import AOS from "aos";
import "aos/dist/aos.css";
import ReactGA from "react-ga";

const App = () => {
  return (
    <div>
      <RouterProvider router={router} /> {/* Ensure RouterProvider is here */}
      <PageTracker /> {/* PageTracker should be used within Router context */}
    </div>
  );
};

const PageTracker = () => {
  useEffect(() => {
    // Initialize AOS for animations
    AOS.init({ once: true });
    AOS?.refresh(); // Refresh to ensure animations are applied

    // Initialize Google Analytics with your Tracking ID
    ReactGA.initialize("G-GFJCJPPS23"); // Replace with your actual Google Analytics tracking ID

    // Track the initial page load
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return null; // No UI, just the tracking logic
};

export default App;
