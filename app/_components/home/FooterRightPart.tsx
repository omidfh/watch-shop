import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function FooterRightPart() {
  return (
    <div className="flex flex-col items-center justify-evenly w-[40%] md:w-[35%] lg:w-[35%]">
      <div className="flex justify-center lg:justify-evenly md:justify-evenly gap-1 md:gap-2 lg:gap-2">
        <Link
          href={"#"}
          className="rounded-full flex items-center bg-black  p-2 "
        >
          <FaInstagram className="m-auto" />
        </Link>
        <Link href={"#"} className="rounded-full bg-black p-2 ">
          <FaSquareXTwitter />{" "}
        </Link>
        <Link href={"#"} className="rounded-full bg-black p-2 ">
          <FaFacebook />{" "}
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-stone-300 uppercase text-center tracking-wider text-xs md:text-sm lg:text-md">
          copyright &copy; {new Date().getFullYear()} Omid fh
          <br />
          designed by omid fh
        </p>
      </div>
    </div>
  );
}
