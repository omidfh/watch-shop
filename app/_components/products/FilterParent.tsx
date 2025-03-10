"use client";

import React, { ReactElement, useState } from "react";
import { LuSquareMinus, LuSquarePlus } from "react-icons/lu";
import { useToggleFilter } from "../../_context/ShowFilterContext";

export default function FilterParent({ children }: { children: ReactElement }) {
  const { show, toggleShow } = useToggleFilter();

  return (
    <div className="bg-stone-400 bg-opacity-10 ">
      <button
        onClick={toggleShow}
        className="flex w-full justify-between gap-3 items-center p-4"
      >
        <p className="text-xl my-auto">Filters</p>
        {show ? <LuSquareMinus /> : <LuSquarePlus />}{" "}
      </button>
      <div className={`flex ${show ? "activeFilter" : "inactiveFilter"}`}>
        {children}
      </div>
    </div>
  );
}
