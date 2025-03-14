"use client";
import React, { useTransition } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { usePaginationProvider } from "../_context/PaginationContext";
import Loader from "./loader/page";

type Props = {
  totalPage: number | string;
  currentPage: number | string;
  handleChange: () => void;
};

export default function Pagination({ totalPage, currentPage }: Props) {
  // Convert totalPage and currentPage to numbers
  const total = Number(totalPage);
  const current = Number(currentPage);
  const { handleChangePage } = usePaginationProvider();
  const [isPending, startTransition] = useTransition();

  function handleChange(number: number | string) {
    startTransition(() => {
      handleChangePage(number);
    });
  }

  // Generate an array of page numbers
  const pageNumbers = Array.from({ length: total }, (_, i) => i + 1);

  if (isPending) return <Loader />;
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex gap-3 items-center bg-stone-400 bg-opacity-10 text-xl p-2 rounded">
        {/* Previous Button */}
        <button
          className="flex items-center p-1 disabled:opacity-20 "
          disabled={current === 1}
          onClick={() => handleChange(Number(current) - 1)}
        >
          <MdOutlineKeyboardArrowLeft />
        </button>

        {/* Page Numbers */}
        {pageNumbers.map((page) => (
          <button
            key={page}
            className={`flex items-center justify-center w-8 h-8 rounded-sm b-1 ${
              page === current
                ? "bg-stone-600 text-white"
                : "hover:bg-stone-300 hover:bg-opacity-10"
            }`}
            onClick={() => handleChange(Number(page))}
          >
            <span className="text-center mb-1">{page}</span>
          </button>
        ))}

        {/* Next Button */}
        <button
          className="flex items-center p-1 disabled:opacity-20"
          disabled={current === total}
          onClick={() => handleChange(Number(current) + 1)}
        >
          <MdOutlineKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
}
