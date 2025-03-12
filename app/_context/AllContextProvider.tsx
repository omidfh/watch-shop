import React, { ReactNode } from "react";
import { FilterProvider } from "./ShowFilterContext";
import { PaginationProvider } from "./PaginationContext";
import { SetFilterProvider } from "./FilterContextProvider";
import { SortingProvider } from "./SortContextProvider";

export default function AllContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <SortingProvider>
      <SetFilterProvider>
        <FilterProvider>
          <PaginationProvider>{children}</PaginationProvider>
        </FilterProvider>
      </SetFilterProvider>
    </SortingProvider>
  );
}
