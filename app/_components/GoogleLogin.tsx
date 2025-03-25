"use client";
import React from "react";
// import { googleSignInAction } from "../_lib/actions";
import { FcGoogle } from "react-icons/fc";
import { googleSignInAction } from "../_lib/actions";

export default function GoogleLogin() {
  return (
    <form>
      <button
        onClick={async () => await googleSignInAction()}
        className="tracking-wider text-stone-900 py-2 px-3 flex gap-2 items-center text-sm uppercase rounded-full bg-stone-100 bg-opacity-100 justify-center w-fit hover:bg-opacity-20 hover:text-stone-100 transition-all duration-200 ease-in-out"
      >
        sign in with
        <FcGoogle className="text-3xl" />
      </button>
    </form>
  );
}
