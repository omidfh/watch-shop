"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

// Create the context
const FilterContext = createContext();

export function SetFilterProvider({ children }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState({});
  const path = usePathname();

  useEffect(() => {
    if (path === "/products") {
      const filterParam = searchParams.get("filters");
      if (filterParam) {
        try {
          // Try to parse the JSON from the URL
          const parsedFilters = JSON.parse(decodeURIComponent(filterParam));
          setFilters(parsedFilters);
        } catch (error) {
          console.log(error);
          // If parsing fails, set empty filters
          setFilters({});
        }
      } else {
        // If no filter param, initialize with empty filters
        const params = new URLSearchParams(searchParams.toString());
        params.set("filters", JSON.stringify({}));
        router.push(`?${params.toString()}`, { scroll: false });
      }
    }
  }, [searchParams, path, router]);

  // Function to update filters and URL query param
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters); // Update the state

    const params = new URLSearchParams(searchParams.toString());
    // Convert the filters object to a JSON string for the URL
    params.set("filters", encodeURIComponent(JSON.stringify(newFilters)));

    router.push(`?${params.toString()}`, { scroll: false }); // Update the URL
  };

  return (
    <FilterContext.Provider value={{ filters, setFilters, handleFilterChange }}>
      {children}
    </FilterContext.Provider>
  );
}

// Custom hook to use the FilterContext
export function useFilterProvider() {
  const context = useContext(FilterContext);
  if (!context)
    throw new Error("useFilterProvider must be used inside FilterProvider");
  return context;
}
