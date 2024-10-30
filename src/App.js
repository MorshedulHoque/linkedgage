import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./route/route";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh(); // Refresh to ensure animations are applied
  }, []);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
