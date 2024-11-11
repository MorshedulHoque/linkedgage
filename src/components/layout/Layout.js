import React from "react";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import ScrollToTop from "../ScrollToTop";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop /> {/* This will ensure the page scrolls to top on route change */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
