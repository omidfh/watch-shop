"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useTransition } from "react";
import { useFormStatus } from "react-dom";
import Loader from "../loader/page";

interface Filters {
  price?: {
    min?: string | number;
    max?: string | number;
  };
  brand?: string;
  color?: string;
  gender?: string;
  material?: string;
  strap?: string;
}

interface ChangeFilterButtonProps {
  existingFilters?: Filters;
}

export default function ChangeFilterButton({
  existingFilters = {},
}: ChangeFilterButtonProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const hasActiveFilters = Object.keys(existingFilters).length > 0;
  const [isPending, startTransition] = useTransition();

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    startTransition(() => {
      e.preventDefault();

      const formElement = e.currentTarget.closest("form");
      if (!formElement) return;

      // Get form data from the event
      const formData = new FormData(formElement);

      // Convert to object format
      const filters: Filters = {
        price: {
          min: formData.get("priceMin") as string | number,
          max: formData.get("priceMax") as string | number,
        },
        brand: (formData.get("brand") as string) || undefined,
        color: (formData.get("color") as string) || undefined,
        gender: (formData.get("gender") as string) || undefined,
        material: (formData.get("material") as string) || undefined,
        strap: (formData.get("strap") as string) || undefined,
      };

      // Filter out null values and empty strings
      Object.keys(filters).forEach((key) => {
        const value = filters[key as keyof Filters];

        if (value === null || value === undefined || value === "") {
          delete filters[key as keyof Filters];
        } else if (key === "price" && typeof value === "object") {
          // Handle the price object specifically
          const price = value as {
            min?: string | number;
            max?: string | number;
          };
          if (!price.min) delete price.min;
          if (!price.max) delete price.max;
          if (Object.keys(price).length === 0) {
            delete filters.price;
          }
        }
      });

      // Create new URLSearchParams
      const params = new URLSearchParams(searchParams.toString());

      // Update the filters parameter
      params.set("filters", encodeURIComponent(JSON.stringify(filters)));

      // Navigate to the new URL
      router.push(`?${params.toString()}`, { scroll: false });
      window.scrollTo({
        top: 300,
        behavior: "smooth",
      });
    });
  }

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    startTransition(() => {
      // Create new URLSearchParams without the filters
      const params = new URLSearchParams(searchParams.toString());

      // Remove the filters parameter or set it to an empty object
      params.set("filters", encodeURIComponent(JSON.stringify({})));

      // Navigate to the new URL
      router.push(`?${params.toString()}`, { scroll: false });

      // Find the closest form element and reset it
      const formElement = e.currentTarget.closest("form");
      if (formElement) {
        formElement.reset(); // This will reset all input fields inside the form
      }
      window.scrollTo({
        top: 300,
        behavior: "smooth",
      });
    });
  };

  if (isPending) return <Loader />;

  return (
    <div className="w-full flex justify-between gap-1">
      <button
        onClick={handleSubmit}
        type="submit"
        className={`${
          !hasActiveFilters && "w-full"
        } bg-yellow-100  text-center bg-opacity-90 px-2 py-4 tracking-wider font-semibold text-black hover:text-white hover:bg-opacity-20 hover:transition-all ease-in-out duration-500`}
      >
        Apply Filters
      </button>
      {hasActiveFilters && (
        <button
          onClick={handleReset}
          type="reset"
          className="bg-yellow-100 text-center text-stone-300 bg-opacity-10 px-2 py-4 tracking-wider font-semibold  hover:text-black hover:bg-opacity-90 hover:transition-all ease-in-out duration-500"
        >
          Reset Filters
        </button>
      )}
    </div>
  );
}
