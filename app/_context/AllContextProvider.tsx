import React, { ReactNode } from "react";
import { FilterProvider } from "./ShowFilterContext";
import { PaginationProvider } from "./PaginationContext";
import { SetFilterProvider } from "./FilterContextProvider";

export default function AllContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <SetFilterProvider>
      <FilterProvider>
        <PaginationProvider>{children}</PaginationProvider>
      </FilterProvider>
    </SetFilterProvider>
  );
}
