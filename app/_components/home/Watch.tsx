"use client";

import React from "react";
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
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      className="flex items-center"
    >
      <Image
        width={750}
        src={watch1}
        alt="luxury watch"
        quality={100}
        className="object-cover"
      />
    </motion.div>
  );
}
