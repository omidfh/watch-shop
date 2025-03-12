"use client";

import React, { ReactElement, useEffect } from "react";
import { LuSquareMinus, LuSquarePlus } from "react-icons/lu";
import { useToggleFilter } from "../../_context/ShowFilterContext";

export default function FilterParent({
  children,
  searchParams,
}: {
  children: ReactElement;
  searchParams: any;
}) {
  const { show, toggleShow, setShow } = useToggleFilter();

  // Parse filters from URL
  let parsedFilters = {};
  let hasActiveFilters = false;

  try {
    if (searchParams?.filters) {
      parsedFilters = JSON.parse(decodeURIComponent(searchParams.filters));
      // Check if there are any active filters (object is not empty)
      hasActiveFilters = Object.keys(parsedFilters).length > 0;
    }
  } catch (error) {
    console.error("Error parsing filters:", error);
  }

  // Auto-open filter section if active filters exist
  useEffect(() => {
    if (hasActiveFilters) {
      setShow(true);
    }
  }, [hasActiveFilters, setShow]);

  return (
    <div className="bg-stone-400 bg-opacity-10">
      <button
        onClick={toggleShow}
        className="flex w-full justify-between gap-3 items-center p-4"
      >
        <div className="flex items-center  gap-2">
          <p className="text-xl my-auto">Filters</p>
        </div>
        {show ? <LuSquareMinus size={20} /> : <LuSquarePlus size={20} />}
      </button>
      <div className={`flex ${show ? "activeFilter" : "inactiveFilter"}`}>
        {children}
      </div>
    </div>
  );
}
