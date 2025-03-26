"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import Loader from "../loader/page";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  if (pending) return <Loader />;
  return (
    <button
      disabled={pending}
      type="submit"
      className="text-lg bg-yellow-100 text-center bg-opacity-90 py-2 w-28 text-black hover:text-white hover:bg-opacity-20 hover:transition-all ease-in-out duration-500"
    >
      {pending ? "Updating" : "Save & Exit"}
    </button>
  );
}
