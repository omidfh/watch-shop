"use client";

import React from "react";
import { motion } from "framer-motion";

const variants = {
  offscreen: {
    y: -100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export default function HomeProductListHeader() {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={variants}
      className="flex flex-col uppercase"
    >
      <p className="text-xs md:text-sm lg:text-sm text-yellow-300 text-opacity-60">
        Timeless Creations
      </p>
      <p className="  text-lg md:text-2xl lg:text-4xl text-stone-100">
        Discover Watches That Speak Your Style
      </p>
    </motion.div>
  );
}
