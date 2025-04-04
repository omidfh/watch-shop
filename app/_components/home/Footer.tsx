"use client";

import React, { useEffect, useState } from "react";
import FooterLeftPart from "./FooterLeftPart";
import FooterMiddlePart from "./FooterMiddlePart";
import FooterRightPart from "./FooterRightPart";

export default function Footer() {
  const [screenSize, setScreenSize] = useState("large");

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setScreenSize("small");
      } else if (width < 1024) {
        setScreenSize("medium");
      } else {
        setScreenSize("large");
      }
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return (
    <div className="px-0 py-14 w-full">
      <div className="flex justify-between grow">
        <FooterLeftPart />
        {screenSize !== "small" && <FooterMiddlePart />}
        <FooterRightPart />
      </div>
    </div>
  );
}
