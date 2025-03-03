import React from "react";
import Image from "next/image";
import watch1 from "@/public/watch1.png";

export default function Watch() {
  return (
    <div className="flex items-center ">
      <Image
        width={750}
        src={watch1}
        alt="luxury watch"
        quality={100}
        className="object-cover"
      />
    </div>
  );
}
