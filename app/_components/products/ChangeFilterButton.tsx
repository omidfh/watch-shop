"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function ChangeFilterButton({ existingFilters = {} }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const hasActiveFilters = Object.keys(existingFilters).length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get form data from the event
    const formData = new FormData(e.target.form);

    // Convert to object format
    const filters: FormDataEntryValue = {
      ...existingFilters, // Start with existing filters
      price: {
        min: formData.get("priceMin") || null,
        max: formData.get("priceMax") || null,
      },
      brand: formData.get("brand") || null,
      color: formData.get("color") || null,
      gender: formData.get("gender") || null,
      material: formData.get("material") || null,
      strap: formData.get("strap") || null,
    };

    // Filter out null values and empty strings
    Object.keys(filters).forEach((key) => {
      if (filters[key] === null || filters[key] === "") {
        delete filters[key];
      } else if (typeof filters[key] === "object") {
        // Handle nested objects like price
        if (Object.values(filters[key]).every((v) => v === null || v === "")) {
          delete filters[key];
        } else {
          // Remove null/empty values within the nested object
          Object.keys(filters[key]).forEach((nestedKey) => {
            if (
              filters[key][nestedKey] === null ||
              filters[key][nestedKey] === ""
            ) {
              delete filters[key][nestedKey];
            }
          });
        }
      }
    });

    // Create new URLSearchParams
    const params = new URLSearchParams(searchParams.toString());

    // Update the filters parameter
    params.set("filters", encodeURIComponent(JSON.stringify(filters)));

    // Navigate to the new URL
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handleReset = () => {
    // Create new URLSearchParams without the filters
    const params = new URLSearchParams(searchParams.toString());

    // Remove the filters parameter or set it to empty object
    params.set("filters", encodeURIComponent(JSON.stringify({})));

    // Navigate to the new URL
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="w-full flex justify-between gap-1">
      <button
        onClick={handleSubmit}
        type="button"
        className={`${
          !hasActiveFilters && "w-full"
        } bg-yellow-100  text-center bg-opacity-90 p-3 tracking-wider font-semibold text-black hover:text-white hover:bg-opacity-20 hover:transition-all ease-in-out duration-500`}
      >
        Apply Filters
      </button>
      {hasActiveFilters && (
        <button
          onClick={handleReset}
          type="button"
          className="bg-yellow-100 text-center text-stone-300 bg-opacity-10 p-3 tracking-wider font-semibold  hover:text-black hover:bg-opacity-90 hover:transition-all ease-in-out duration-500"
        >
          Reset Filters
        </button>
      )}
    </div>
  );
}
