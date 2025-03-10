"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

// Create the context
const PaginationContext = createContext();

export function PaginationProvider({ children }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [pageNumber, setPageNumber] = useState(1);

  // Sync pageNumber with the URL query param on initial load
  useEffect(() => {
    const page = searchParams.get("page");
    if (page) {
      setPageNumber(Number(page)); // Set the pageNumber from the URL
    }
    if (!page || Number(page) === 1) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", 1); // Update the "page" query param
      router.push(`?${params.toString()}`, { scroll: false }); // Update the URL
    }
  }, [searchParams]);

  // Function to update the page number and URL query param
  const handleChangePage = (number) => {
    setPageNumber(number); // Update the state
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", number.toString()); // Update the "page" query param
    router.push(`?${params.toString()}`, { scroll: false }); // Update the URL
  };

  return (
    <PaginationContext.Provider
      value={{ pageNumber, setPageNumber, handleChangePage }}
    >
      {children}
    </PaginationContext.Provider>
  );
}

// Custom hook to use the PaginationContext
export function usePaginationProvider() {
  const context = useContext(PaginationContext);
  if (!context)
    throw new Error(
      "usePaginationProvider must be used inside PaginationProvider"
    );
  return context;
}
