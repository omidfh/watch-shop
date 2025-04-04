import Link from "next/link";
import React from "react";

export default function FooterMiddlePart() {
  return (
    <div className="flex flex-col gap-4 justify-evenly">
      <div>
        <p className="text-stone-300 text-sm md:text-md lg:text-lg uppercase">
          Quick Links
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <Link
          href={"/"}
          className="text-stone-300 text-xs md:text-sm lg:text-md uppercase"
        >
          home
        </Link>
        <Link
          href={"/products"}
          className="text-stone-300 text-xs md:text-sm lg:text-md uppercase"
        >
          products
        </Link>
        <Link
          href={"/about"}
          className="text-stone-300 text-xs md:text-sm lg:text-md uppercase"
        >
          about us
        </Link>
      </div>
    </div>
  );
}
