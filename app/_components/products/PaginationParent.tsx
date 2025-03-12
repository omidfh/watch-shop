"use client";

import React from "react";
import Pagination from "../Pagination";
import { usePaginationProvider } from "@/app/_context/PaginationContext";

type Props = {
  totalPage: number | string;
  currentPage: number | string;
};

export default function PaginationParent({ totalPage, currentPage }: Props) {
  const { handleChangePage } = usePaginationProvider();

  return (
    <Pagination
      totalPage={totalPage}
      currentPage={currentPage}
      handleChange={handleChangePage}
    />
  );
}
