"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

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
    </>
  );
}
