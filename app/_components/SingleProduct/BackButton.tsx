"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export default function BackButton() {
  const router = useRouter();

  return (
    <div className="w-full max-w-[65%] items-center justify-start">
      <button
        className="flex items-center gap-2 text-stone-300 border-b p-2 justify-center hover:text-yellow-200 hover:text-opacity-80 hover:border-yellow-100 hover:border-opacity-20 transition-all duration-200 linear group"
        onClick={() => router.back()}
      >
        <FaArrowLeft className="group-hover:-translate-x-2 transition-transform duration-200" />
        <p className="text-lg uppercase">Products</p>
      </button>
    </div>
  );
}
