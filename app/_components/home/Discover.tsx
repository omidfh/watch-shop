import Link from "next/link";
import React from "react";

export default function Discover() {
  return (
    <div className="flex flex-col items-start justify-start   gap-14 w-[30%]">
      <div className="flex flex-col justify-evenly items-start gap-4 uppercase tracking-wide">
        <p className="text-yellow-200 text-xs text-opacity-70 tracking-wider">
          Timeless Elegance
        </p>
        <h3 className=" text-6xl">Discover Watches That Define Your Style</h3>
      </div>

      <div className="flex gap-4">
        <Link
          href={"/products"}
          className="bg-yellow-100 text-center bg-opacity-90 p-4 w-32 text-black hover:text-white hover:bg-opacity-20 hover:transition-all ease-in-out duration-500"
        >
          Shop Now
        </Link>
        <Link
          href={"#"}
          className="bg-stone-300 text-center bg-opacity-20 p-4 w-32 hover:bg-blue-200 hover:text-black hover:transition-all ease-in-out duration-500"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
