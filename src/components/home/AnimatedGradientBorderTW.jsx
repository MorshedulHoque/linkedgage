import React, { useRef, useEffect } from "react";

const AnimatedGradientBorderTW = ({ children }) => {
  const boxRef = useRef(null);

  useEffect(() => {
    const boxElement = boxRef.current;

    if (!boxElement) {
      return;
    }

    const updateAnimation = () => {
      const angle =
        (parseFloat(boxElement.style.getPropertyValue("--angle")) + 0.5) % 360;
      boxElement.style.setProperty("--angle", `${angle}deg`);
      requestAnimationFrame(updateAnimation);
    };

    requestAnimationFrame(updateAnimation);
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        "--angle": "0deg",
        "--border-color": "linear-gradient(var(--angle), #070707, #0ea5e9)",
        "--bg-color": "linear-gradient(#131219, #131219)",
      }}
      className="flex h-full w-full items-center justify-center rounded-xl border-2 border-[#0000] [background:padding-box_var(--bg-color),border-box_var(--border-color)]"
    >
      {children}
    </div>
  );
};

export default AnimatedGradientBorderTW;
