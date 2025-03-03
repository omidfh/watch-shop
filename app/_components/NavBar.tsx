"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/logo.jpg";
import { usePathname } from "next/navigation";
import LoginBtn from "./LoginBtn";
import Avatar from "./Avatar";
import { IoMdCart } from "react-icons/io";
import CartBtn from "./CartBtn";

export default function NavBar() {
  const pathname = usePathname();

  const isLoggedIn = true;

  return (
    <div className="flex h-11 py-16 justify-between w-full items-center">
      {/* <div className=""> */}

      {/* </div> */}
      <ul className="flex flex-row list-none gap-8 bg-background items-center  text-lg text-stone-300">
        <li>
          <Link href={"/"}>
            <div className="border-yellow-100 border border-opacity-30">
              <Image
                width={"70"}
                height={"70"}
                src={logo}
                alt="logo"
                quality={100}
                className="rounded-full "
              />
            </div>
          </Link>
        </li>
        {/* Navigation Links */}
        {[
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: "About", path: "/about" },
        ].map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className={`p-2 relative ${
                pathname === item.path
                  ? "text-yellow-100 font-semibold"
                  : "hover:text-yellow-100 transition-colors duration-300"
              }`}
            >
              {item.name}
              {/* Active Border Bottom */}
              {pathname === item.path && (
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-100 transform origin-left transition-transform duration-300"></span>
              )}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex  ">
        {isLoggedIn ? (
          <div className="flex items-center gap-4">
            <CartBtn />
            <Avatar />
          </div>
        ) : (
          <LoginBtn />
        )}
      </div>
    </div>
  );
}
