"use client";

import React, { useState } from "react";
import BreadCrumb from "../_components/products/BreadCrumb";
import CatalogTitle from "../_components/products/CatalogTitle";
import CatalogFilter from "../_components/products/CatalogFilter";
import SingleProductItem from "../_components/products/SingleProductItem";
import { dummyData } from "../dummyData";
import { LuSquareMinus, LuSquarePlus } from "react-icons/lu";
import Sort from "../_components/products/Sort";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Pagination from "../_components/Pagination";

// export const metadata = {
//   title: "Products",
//   description: "explore watches choose favorite one",
// };

export default function page() {
  const [showFilters, setShowFilters] = useState(false);

  function toggleFilter() {
    setShowFilters((filter) => !filter);
  }
  return (
    <div className="flex flex-col items-start justify-between gap-24">
      {/* //* BREADCRUMB */}
      <BreadCrumb />

      {/* //* CATALOG TITLE */}
      <CatalogTitle />

      {/* //* Products and  FILTER */}
      <div className="flex w-full  justify-center mx-auto">
        <div className="flex lg:flex-row md:flex-col sm:flex-col sm:gap-8 lg:items-start md:items-center justify-center w-full">
          {/* //*filters */}
          <div className="flex flex-col min-w-[15%] gap-4">
            <Sort />
            <div className="bg-stone-400 bg-opacity-10 ">
              <button
                onClick={() => toggleFilter()}
                className="flex w-full justify-between gap-3 items-center p-4"
              >
                <p className="text-xl my-auto">Filters</p>
                {showFilters ? <LuSquareMinus /> : <LuSquarePlus />}{" "}
              </button>
              {showFilters && <CatalogFilter isActive={showFilters} />}
            </div>
          </div>

          {/* //* products */}
          <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:gap-12 md:gap-4 sm:gap-2">
            {dummyData.map((item) => (
              <SingleProductItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.picture}
                brand={item.brand}
                material={item.material}
                strap={item.strap}
                hasDiscount={item.hasDiscount}
                discount={item.discount}
              />
            ))}
          </div>
        </div>
      </div>

      <Pagination totalPage={5} currentPage={2} />
    </div>
  );
}
