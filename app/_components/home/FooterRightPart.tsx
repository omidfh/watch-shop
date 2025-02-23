import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function FooterRightPart() {
  return (
    <div className="flex flex-col justify-evenly">
      <div className="flex justify-evenly gap-2">
        <Link href={"#"} className="rounded-full bg-black p-2 ">
          <FaInstagram />
        </Link>
        <Link href={"#"} className="rounded-full bg-black p-2 ">
          <FaSquareXTwitter />{" "}
        </Link>
        <Link href={"#"} className="rounded-full bg-black p-2 ">
          <FaFacebook />{" "}
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-stone-300 uppercase text-center tracking-wider">
          copyright &copy; {new Date().getFullYear()} Omid fh
          <br />
          designed by omid fh
        </p>
      </div>
    </div>
  );
}
