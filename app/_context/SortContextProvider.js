"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

// Create the context
const SortingContext = createContext();

export function SortingProvider({ children }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [sort, setSort] = useState("");
  const path = usePathname();

  useEffect(() => {
    if (path === "/products") {
      const page = searchParams.get("sort");
      if (page) {
        setSort(sort);
      }
      if (!page || sort === "random") {
        const params = new URLSearchParams(searchParams.toString());
        params.set("sort", "random");
        router.push(`?${params.toString()}`, { scroll: false });
      }
    }
  }, [searchParams, path]);

  // Function to update the page number and URL query param
  const handleChangeSort = (sort) => {
    setSort(sort); // Update the state
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", sort); // Update the "page" query param
    router.push(`?${params.toString()}`, { scroll: false }); // Update the URL
  };

  return (
    <SortingContext.Provider value={{ sort, setSort, handleChangeSort }}>
      {children}
    </SortingContext.Provider>
  );
}

// Custom hook to use the SortingContext
export function useSortingProvider() {
  const context = useContext(SortingContext);
  if (!context)
    throw new Error("useSortingProvider must be used inside SortingProvider");
  return context;
}
