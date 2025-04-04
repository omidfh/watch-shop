"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

import avatar from "@/public/profile.png";
import Link from "next/link";

export default function Avatar({ pic }: { pic: string }) {
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
    if (screenSize === "large") return 70;
    if (screenSize === "medium") return 60;
    if (screenSize === "small") return 40;
    return 65; // Default fallback
  }
  return (
    <Link href={"/profile"}>
      <Image
        src={pic || avatar}
        alt="avatar"
        width={imageSizeConverter()}
        height={imageSizeConverter()}
        className="rounded-full p-0  hover:scale-110 transition-all ease-in-out duration-200"
      />
    </Link>
  );
}
