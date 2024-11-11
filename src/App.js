import React, { useEffect } from "react";
import { RouterProvider, useLocation } from "react-router-dom"; // Import useLocation inside App.js
import router from "./route/route"; // Your custom routes
import AOS from "aos";
import "aos/dist/aos.css";
import ReactGA from "react-ga4";  // Import react-ga4 for Google Analytics
import ScrollToTop from "./components/ScrollToTop";

// PageTracker component to track page views using useLocation
const PageTracker = () => {
  const location = useLocation();  // Now this is inside the Router context

  useEffect(() => {
    // Log page views when the location (route) changes
    ReactGA.send("pageview");  // Track pageview with Google Analytics
  }, [location]);  // Re-run on location change (route change)

  return null; // No UI, just the effect
};

const App = () => {
  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize("G-GFJCJPPS23");  // Your Google Analytics Measurement ID
    ReactGA.send("pageview");  // Send initial pageview when the app loads

    // Initialize AOS (Animate on Scroll)
    AOS.init({ once: true });
    AOS?.refresh();  // Refresh AOS for animations to apply
  }, []);

  return (
    <div>
      {/* The RouterProvider should wrap your entire app, including PageTracker */}
      <RouterProvider router={router}>
        <ScrollToTop />
        <PageTracker />  {/* PageTracker is now inside RouterProvider */}
      </RouterProvider>
    </div>
  );
};

export default App;
