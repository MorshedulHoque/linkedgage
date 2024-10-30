import React from "react";
import "./curve.css";

const Carve = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="w-full lg:h-[600px] h-[300px] bg-gradient-to-r from-[#0EA5E9] to-[#020A4F]"></div>

      {/* Upper Curve */}
      <div className="absolute top-0 z-10 lg:h-40 h-20 bg-black w-full custom-curve"></div>

      {/* Lower Curve */}
      <div className="absolute bottom-0 z-10 lg:h-40 h-20 bg-black w-full custom-curve-down"></div>
    </div>
  );
};

export default Carve;
