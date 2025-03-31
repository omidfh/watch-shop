"use client";

import React from "react";
import { FaHeadphones } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import SingleSpecific from "./SingleSpecific";
import { IoBag } from "react-icons/io5";
import { motion } from "framer-motion";

const variants = {
  offscreen: {
    y: 100,
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

export default function Specifics() {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={variants}
      className="flex justify-between  py-28"
    >
      <SingleSpecific
        title={"Authentic Timepieces Guaranteed"}
        description={
          "Ipsum pellentesque urna ac fringilla montes sit diam malesuada ipsum."
        }
        link="#"
      >
        <IoIosTimer className="text-xl text-yellow-400 opacity-80" />
      </SingleSpecific>

      <SingleSpecific
        title={"Seamless Shopping Experience"}
        description={
          "Ipsum pellentesque urna ac fringilla montes sit diam malesuada ipsum."
        }
        link="#"
      >
        <IoBag className="text-xl text-yellow-400 opacity-80" />
      </SingleSpecific>

      <SingleSpecific
        title={"Customer-Centric Support"}
        description={
          "Ipsum pellentesque urna ac fringilla montes sit diam malesuada ipsum."
        }
        link="#"
      >
        <FaHeadphones className="text-xl text-yellow-400 opacity-80" />
      </SingleSpecific>
    </motion.div>
  );
}
