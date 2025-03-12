"use client";

import { useSortingProvider } from "@/app/_context/SortContextProvider";
import React, { EventHandler, ReactEventHandler, useTransition } from "react";
import Loader from "../loader/page";

export default function Sort() {
  const { sort, handleChangeSort } = useSortingProvider();
  const [isPending, startTransition] = useTransition();

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    startTransition(() => {
      console.log(e.target.value);
      handleChangeSort(e.target.value);
    });
  }

  if (isPending) return <Loader />;

  return (
    <div className="flex flex-col justify-end gap-10 p-4 bg-stone-400 bg-opacity-10">
      <div className="">
        <label id="filterLabel" htmlFor="sort" className="block mb-1">
          Sort
        </label>
        <select
          className="bg-transparent w-full py-2 border-gray-300 bg-stone-900 rounded focus:outline-none"
          id="sort"
          name="sort"
          defaultValue={sort}
          onChange={handleChange}
        >
          <option className="p-3" value="random">
            Random
          </option>
          <option className="p-3" value="discount-percent-asc">
            Discount % ↓ (High to Low)
          </option>
          <option className="p-3" value="discount-percent-desc">
            Discount % ↑ (Low to High)
          </option>
          <option className="p-3" value="price-asc">
            Price ↑ (Low to High)
          </option>
          <option className="p-3" value="price-desc">
            Price ↓ (High to Low)
          </option>
          <option className="p-3" value="brand-asc">
            Brand ↑ (A to Z)
          </option>
          <option className="p-3" value="brand-desc">
            Brand ↓ (Z to A)
          </option>
        </select>
      </div>
    </div>
  );
}
