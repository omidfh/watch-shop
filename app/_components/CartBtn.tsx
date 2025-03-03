import Link from "next/link";
import React from "react";
import { IoMdCart } from "react-icons/io";

export default function CartBtn() {
  return (
    <div>
      <Link
        href={"/cart"}
        className="text-stone-300  hover:text-yellow-100  transition-all duration-200 ease-in-out"
      >
        <IoMdCart className="text-4xl" />
      </Link>
    </div>
  );
}
