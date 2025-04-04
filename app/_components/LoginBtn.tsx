"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoLogIn } from "react-icons/io5";

export default function LoginBtn() {
  const pathname = usePathname();
  return (
    <Link
      href={`/login?callbackUrl=${encodeURIComponent(pathname)}`}
      className="flex gap-2 items-center text-xs md:text-md lg:text-lg border border-stone-400 px-2 py-1 lg:px-4 lg:py-2 md:px-4 md:py-2  rounded-sm text-center bg-stone-400 bg-opacity-10 tracking-wide hover:text-stone-900 hover:bg-stone-300 transition-all ease-in-out duration-300"
    >
      <p>Login</p>
      <IoLogIn />
    </Link>
  );
}
