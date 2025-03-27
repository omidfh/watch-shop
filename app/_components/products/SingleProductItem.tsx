"use client";

import Image from "next/image";
import React, { useTransition } from "react";
import Link from "next/link";
import { BsFillCartPlusFill } from "react-icons/bs";
import { PiGearFineFill, PiWatchFill } from "react-icons/pi";
import { HiMiniSwatch } from "react-icons/hi2";
import { MdRemoveRedEye } from "react-icons/md";
import defaultWatchPic from "@/public/watch-default.jpg";
import { addItemToCartAction } from "@/app/_lib/actions";
import Loader from "../loader/page";

export default function SingleProductItem({
  name,
  price,
  picture,
  brand,
  material,
  strap,
  hasDiscount,
  discount,
  id,
}: SingleWatch) {
  const [isPending, startTransition] = useTransition();
  async function handleAddToCart() {
    startTransition(async () => {
      await addItemToCartAction(id, 1);
    });
  }

  if (isPending) return <Loader />;

  return (
    <div className="flex flex-col justify-evenly bg-stone-400 bg-opacity-10 ">
      <div className="flex flex-col justify-between h-full">
        <div className="flex justify-between items-start px-4 py-2 lg:text-lg md:text:md sm:text-sm ">
          <p className="max-w-[50%] text-stone-300 text-md">{name}</p>

          <div className="flex flex-col items-center ">
            <p
              className={`text-md ${
                hasDiscount ? "text-red-300" : "text-yellow-100"
              } ${hasDiscount ? "line-through" : ""}`}
            >
              $ {price.toLocaleString()}
            </p>
            {hasDiscount && (
              <p className="text-green-200">
                $ {(Number(price) - Number(discount)).toLocaleString()}
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-center px-3 pb-4  ">
          <Image
            src={picture || defaultWatchPic}
            alt="watch-photo"
            width={250}
            height={200}
            className="object-contain  transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="flex flex-col justify-end px-4 py-2 ">
          <p className="uppercase flex items-center gap-2">
            <PiWatchFill className="text-yellow-300 text-opacity-80" /> {brand}
          </p>
          <p className="uppercase flex items-center gap-2">
            <PiGearFineFill className="text-yellow-300 text-opacity-80" />
            {material}
          </p>
          <p className="uppercase flex items-center gap-2">
            <HiMiniSwatch className="text-yellow-300 text-opacity-80" />
            {strap}
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <hr className="border-stone-800" />
        <div className="flex justify-between  h-full">
          <button
            onClick={handleAddToCart}
            className="uppercase px-2 py-5 flex justify-center gap-2 items-center h-[100%] w-[50%] tracking-wide text-center   hover:text-stone-900 hover:bg-stone-300 transition-all ease-in-out duration-300"
          >
            <BsFillCartPlusFill className="text-2xl" />
          </button>
          <Link
            href={`/products/${id}`}
            className=" uppercase p-2 flex justify-center gap-2 items-center h-full w-[50%] tracking-wide text-center hover:text-stone-900 hover:bg-stone-300 transition-all ease-in-out duration-300"
          >
            <MdRemoveRedEye className="text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}
