"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

// Create the context
const PaginationContext = createContext();

export function PaginationProvider({ children }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [pageNumber, setPageNumber] = useState(1);
  const path = usePathname();

  console.log(path);

  useEffect(() => {
    if (path === "/products") {
      const page = searchParams.get("page");
      if (page) {
        setPageNumber(Number(page));
      }
      if (!page || Number(page) === 1) {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", 1);
        router.push(`?${params.toString()}`, { scroll: false });
      }
    }
  }, [searchParams, path]);

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
