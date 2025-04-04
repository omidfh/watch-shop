"use client";
import React from "react";
import { IoLogOut } from "react-icons/io5";
import { signOutAction } from "../_lib/actions";
import { usePathname } from "next/navigation";

export default function LogoutBtn() {
  const pathname = usePathname();
  async function handleSignOut() {
    await signOutAction(pathname);
  }
  return (
    <form action={handleSignOut}>
      <button
        type="submit"
        className="flex  items-center text-xl lg:text-4xl nd:text-2xl text-center  hover:text-stone-500  transition-all ease-in-out duration-300"
      >
        <IoLogOut />
      </button>
    </form>
  );
}
