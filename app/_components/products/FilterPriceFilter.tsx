"use client";

import { Filters, SearchParams } from "@/app/types";
import React, { useEffect, useState, useRef } from "react";

export default function FilterPriceFilter({
  parsedFilters,
  biggestPrice,
  searchParams,
}: {
  parsedFilters: Filters;
  biggestPrice: number;
  searchParams: SearchParams;
}) {
  const [minPrice, setMinPrice] = useState(
    Number(parsedFilters?.price?.min) || 0
  );
  const [maxPrice, setMaxPrice] = useState(
    Number(parsedFilters?.price?.max) || biggestPrice
  );
  const [isValid, setIsValid] = useState(true);
  const minInputRef = useRef<HTMLInputElement>(null);
  const maxInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMinPrice(Number(parsedFilters?.price?.min) || 0);
    setMaxPrice(Number(parsedFilters?.price?.max) || biggestPrice);
  }, [searchParams, biggestPrice]);

  // Update range progress on mount and when values change
  useEffect(() => {
    if (minInputRef.current) {
      const percentage = (minPrice / biggestPrice) * 100;
      minInputRef.current.style.setProperty(
        "--range-progress",
        `${percentage}%`
      );
    }
    if (maxInputRef.current) {
      const percentage = (maxPrice / biggestPrice) * 100;
      maxInputRef.current.style.setProperty(
        "--range-progress",
        `${percentage}%`
      );
    }
  }, [minPrice, maxPrice, biggestPrice]);

  useEffect(() => {
    if (minPrice > maxPrice) setIsValid(false);
    else {
      setIsValid(true);
    }
  }, [minPrice, maxPrice]);

  // Update range progress when slider is moved
  const handleRangeChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    isMin: boolean
  ) => {
    const value = Number(e.target.value);
    const percentage = (value / biggestPrice) * 100;
    e.target.style.setProperty("--range-progress", `${percentage}%`);

    if (isMin) {
      setMinPrice(value);
    } else {
      setMaxPrice(value);
    }
  };

  return (
    <div className="flex flex-col justify-between gap-1 h-full w-full">
      <label id="filterLabel" htmlFor="price" className="text-stone-200">
        Price
      </label>
      <div className="flex flex-col justify-between gap-4 w-full">
        <div className="w-full flex flex-col gap-1 ">
          <p className="text-stone-300 text-opacity-50 text-xs md:text-sm lg:text-sm">
            {minPrice.toLocaleString()} $
          </p>
          <div className="flex items-center w-full">
            <input
              id="priceInputMin"
              ref={minInputRef}
              name="priceMin"
              value={minPrice}
              className="w-full placeholder:capitalize text-stone-200 focus:outline-none focus:ring-0 py-1"
              type="range"
              placeholder="from"
              min={0}
              max={biggestPrice}
              onChange={(e) => handleRangeChange(e, true)}
            />
          </div>
        </div>
        <div className="flex items-center w-full">
          <div className="flex flex-col gap-1 w-full">
            <p className="text-stone-300 text-opacity-50 text-xs md:text-sm lg:text-sm">
              {maxPrice.toLocaleString()} $
            </p>
            <input
              id="priceInputMax"
              ref={maxInputRef}
              name="priceMax"
              value={maxPrice}
              className={`w-full placeholder:capitalize text-stone-200 focus:outline-none focus:ring-0 py-1`}
              type="range"
              placeholder="to"
              min={0}
              max={biggestPrice}
              onChange={(e) => handleRangeChange(e, false)}
            />
            {!isValid && (
              <p className="text-sm text-red-400">
                Max price amount is Invalid!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
