"use client";

import { usePathname } from "next/navigation";
import React from "react";

export default function BreadCrumb() {
  const path = usePathname().split("/")?.[1];
  console.log(path);

  return (
    <div className="w-[100%] flex flex-col  gap-10">
      <hr className="border-stone-400 border-opacity-30" />
      <div className="flex justify-center">
        <h3 className="uppercase text-stone-300 text-opacity-70 text-sm">
          {path}
        </h3>
      </div>
      <hr className="border-stone-400 border-opacity-30" />
    </div>
  );
}
