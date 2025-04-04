"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import watch1 from "@/public/watch1.png";
import { motion } from "framer-motion";

const variants = {
  initial: {
    y: 0,
    opacity: 1,
  },
  animate: {
    y: [0, -15, 0], // This creates a smooth up and down motion
    opacity: 1,
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "loop",
      },
    },
  },
};

export default function Watch() {
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

    updateScreenSize(); // Set initial size
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  function imageSizeConverter() {
    if (screenSize === "large") return 750;
    if (screenSize === "medium") return 550;
    if (screenSize === "small") return 250;
    return 500; // Default fallback
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      className="flex items-center justify-end w-full "
    >
      <Image
        width={imageSizeConverter()}
        src={watch1}
        alt="luxury watch"
        quality={100}
        className="object-fit"
      />
    </motion.div>
  );
}
