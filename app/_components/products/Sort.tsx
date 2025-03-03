import React from "react";

export default function Sort() {
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
        >
          <option className="p-3" value="random">
            Random
          </option>
          <option className="p-3" value="discount-gbp-desc">
            Discount % ↓ (High to Low)
          </option>
          <option className="p-3" value="discount-percent-desc">
            Discount % ↓ (High to Low)
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
