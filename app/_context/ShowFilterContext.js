"use client";

import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [show, setShow] = useState(false);
  function toggleShow() {
    setShow((show) => !show);
  }

  return (
    <FilterContext.Provider value={{ show, setShow, toggleShow }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useToggleFilter() {
  const context = useContext(FilterContext);
  if (!context)
    throw new Error("useToggleFilter must be used inside FilterProvider");
  return context;
}
