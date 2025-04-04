"use client";

import { IoIosCall, IoMdMail } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.jpg";
import { useEffect, useState } from "react";

export default function FooterLeftPart() {
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
    if (screenSize === "large") return 50;
    if (screenSize === "medium") return 50;
    if (screenSize === "small") return 35;
    return 50; // Default fallback
  }

  return (
    <div className="flex flex-col gap-6 w-[50%] md:w-[35%] lg:w-[35%]">
      <div>
        {" "}
        <Image
          width={imageSizeConverter()}
          height={imageSizeConverter()}
          src={logo}
          alt="logo"
          quality={100}
        />
      </div>
      <div className="flex flex-col justify-evenly gap-3 text-sm tracking-wider opacity-85">
        <div className="flex items-center gap-2 text-xs md:text-sm lg:text-md">
          <IoIosCall className="text-stone-300" />
          <Link href="tel:+11233456789" className="text-stone-300 ">
            +1 123-345-67 89
          </Link>{" "}
        </div>
        <hr className="border-opacity-50 border-stone-300" />
        <div className="flex items-center gap-2 text-xs md:text-sm lg:text-md">
          <IoMdMail className="text-stone-300 " />
          <Link href="mailto:Example@Example.com" className="text-stone-300">
            Example@example.com
          </Link>{" "}
        </div>
        <hr className="border-opacity-50 border-stone-300" />
        <div className="flex items-center gap-2 text-xs md:text-sm lg:text-md ">
          <TbWorld className="text-stone-300 " />
          <Link
            href="https://www.example.com"
            className="text-stone-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.example.com
          </Link>
        </div>
      </div>
    </div>
  );
}
