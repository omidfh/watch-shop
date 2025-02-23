import React from "react";
import Image from "next/image";
import watch1 from "@/public/watch1.png";
import watch2 from "@/public/watch2.jpg";

export default function Watch() {
  return (
    <div className="flex flex-row">
      <div className="flex items-center">
        <Image
          width={750}
          src={watch1}
          alt="luxury watch"
          quality={100}
          className="object-contain  "
        />
      </div>
      <div className="flex flex-col gap-10 pt-12 justify-start items-center ">
        <Image src={watch2} alt="luxury watch 2" width={250} />
        <p className="max-w-[60%] text-center text-stone-100 text-opacity-60 uppercase">
          Luxury Watches
          <br /> for Every <br /> Occasion
        </p>
      </div>
    </div>
  );
}
