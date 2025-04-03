"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import Link from "next/link";
import defaultWatchPic from "@/public/watch-default.jpg";
import { FaSearch } from "react-icons/fa";

import { motion } from "framer-motion";

const variants = {
  offscreen: {
    y: 200,
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

export default function SingleProduct({
  id,
  name,
  price,
  hasDiscount,
  discount,
  picture,
}: Partial<SingleWatch>) {
  return (
    <motion.div className="flex flex-col justify-evenly bg-stone-400 bg-opacity-10 ">
      <div className="flex flex-col justify-between h-full">
        <div className="flex justify-between items-start px-4 py-2 lg:text-lg md:text:md sm:text-sm ">
          <p className="max-w-[50%] text-stone-300 text-md">{name}</p>
          <div className="flex flex-col items-center ">
            <p
              className={`text-md ${
                hasDiscount ? "text-red-300" : "text-yellow-100"
              } ${hasDiscount ? "line-through" : ""}`}
            >
              $ {price?.toLocaleString()}
            </p>
            {hasDiscount && (
              <p className="text-green-200">
                $ {(Number(price) - Number(discount)).toLocaleString()}
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-center px-3 pb-4">
          <Image
            src={picture || defaultWatchPic}
            alt="watch-photo"
            width={250}
            height={200}
            className="object-contain  transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <hr className="border-stone-800" />
        <Link
          href={`/products/${id}`}
          className="flex items-center gap-3 justify-center uppercase p-4 tracking-wide text-center hover:text-stone-900 hover:bg-stone-300 transition-all ease-in-out duration-300"
        >
          <FaSearch />
          Explore Details
        </Link>
      </div>
    </motion.div>
  );
}
