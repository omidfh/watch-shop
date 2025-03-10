import React, { ReactElement, ReactNode } from "react";
import { FilterProvider } from "./ShowFilterContext";
import { PaginationProvider } from "./PaginationContext";

export default function AllContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <FilterProvider>
      <PaginationProvider>{children}</PaginationProvider>
    </FilterProvider>
  );
}
