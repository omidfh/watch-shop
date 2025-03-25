"use client";
import React from "react";
import { IoLogOut } from "react-icons/io5";
import { signOutAction } from "../_lib/actions";

export default function LogoutBtn() {
  async function handleSignOut() {
    await signOutAction();
  }
  return (
    <form action={handleSignOut}>
      <button
        type="submit"
        className="flex  items-center text-4xl text-center  hover:text-stone-500  transition-all ease-in-out duration-300"
      >
        <IoLogOut />
      </button>
    </form>
  );
}
