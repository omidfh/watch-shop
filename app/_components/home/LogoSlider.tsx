"use client";

import React, { useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import logo1 from "@/public/logo1.png";
import logo2 from "@/public/logo2.png";

export default function LogoSlider() {
  const [logos] = useState([
    logo1,
    logo2,
    logo1,
    logo2,
    logo1,
    logo2,
    logo1,
    logo2,
  ]);
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      align: "start",
      slidesToScroll: 1,
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })] // Autoplay every 2s, doesn't stop when dragged
  );

  return (
    <div className="overflow-hidden opacity-20 " ref={emblaRef}>
      <div className="flex">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="min-w-[20%]  flex justify-center " // 25% width = 4 slides visible
          >
            <Image
              src={logo}
              alt="logo"
              className="object-contain"
              width={128}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
