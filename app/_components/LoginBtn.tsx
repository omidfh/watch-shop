import React from "react";
import { IoLogIn } from "react-icons/io5";

export default function LoginBtn() {
  return (
    <button className="flex gap-2 items-center text-lg border border-stone-400 px-4 py-2 rounded-sm text-center bg-stone-400 bg-opacity-10 tracking-wide hover:text-stone-900 hover:bg-stone-300 transition-all ease-in-out duration-300">
      <p>Login</p>
      <IoLogIn />
    </button>
  );
}
