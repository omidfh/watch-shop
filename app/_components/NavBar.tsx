import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/logo.jpg";
import LoginBtn from "./LoginBtn";
import Avatar from "./Avatar";
import CartBtn from "./CartBtn";
import NavLinks from "./NavLinks";
import { auth } from "../_lib/auth";
import LogoutBtn from "./LogoutBtn";

export default async function NavBar() {
  const session = await auth();
  const isLoggedIn = !!session?.user;

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
        <NavLinks />
      </ul>

      <div className="flex  ">
        {isLoggedIn ? (
          <div className="flex items-center gap-4">
            <CartBtn userId={Number(session?.user?.id)} />
            <Avatar pic={session?.user?.image || ""} />
            <LogoutBtn />
          </div>
        ) : (
          <LoginBtn />
        )}
      </div>
    </div>
  );
}
