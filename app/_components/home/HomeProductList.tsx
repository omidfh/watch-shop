import Link from "next/link";
import React from "react";
import SingleProduct from "./SingleProduct";

import { getThreeWatches } from "@/app/_lib/data-service";
import HomeProductListHeader from "./HomeProductListHeader";

export default async function HomeProductList() {
  const watches = await getThreeWatches();

  return (
    <div className="flex flex-col w-[100%] gap-24">
      <div className="flex justify-between items-center w-full">
        <HomeProductListHeader />
        <div>
          <Link
            className="bg-stone-300 bg-opacity-90 text-center text-black p-4 w-32 uppercase  hover:bg-opacity-10 hover:text-stone-100 hover:transition-all ease-in-out duration-500"
            href={"/products"}
          >
            shop all products
          </Link>
        </div>
      </div>
      {/* //*Products */}

      <div className="grid grid-cols-3 gap-4">
        {watches?.map((watch) => (
          <SingleProduct
            key={watch.id}
            id={watch.id}
            name={watch.name}
            price={watch.price - watch.discount}
            picture={watch.picture}
            hasDiscount={watch.hasDiscount}
            discount={watch.discount}
          />
        ))}
      </div>
    </div>
  );
}
