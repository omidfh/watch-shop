import React from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

type Props = {
  totalPage: number | string;
  currentPage: number | string;
};

export default function Pagination({ totalPage, currentPage }: Props) {
  // Convert totalPage and currentPage to numbers
  const total = Number(totalPage);
  const current = Number(currentPage);

  // Generate an array of page numbers
  const pageNumbers = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex gap-3 items-center bg-stone-400 bg-opacity-10 text-2xl p-2 rounded">
        {/* Previous Button */}
        <button
          className="flex items-center p-1 disabled:opacity-50 "
          disabled={current === 1}
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
          >
            <span className="text-center mb-1">{page}</span>
          </button>
        ))}

        {/* Next Button */}
        <button
          className="flex items-center p-1 disabled:opacity-50"
          disabled={current === total}
        >
          <MdOutlineKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
}
