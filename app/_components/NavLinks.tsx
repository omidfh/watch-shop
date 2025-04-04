"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function NavLinks() {
  const pathname = usePathname();

  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
  ];
  return (
    <>
      {links.map((item) => (
        <li key={item.path}>
          <Link
            href={item.path}
            className={`p-2 text-sm md:text-md lg:text-lg relative ${
              pathname === item.path
                ? "text-yellow-100 font-semibold border-b border-yellow-100"
                : "hover:text-yellow-100 transition-colors duration-300"
            }`}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </>
  );
}
