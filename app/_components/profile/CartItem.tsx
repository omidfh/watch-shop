"use client";

import Image from "next/image";
import React, { useEffect, useState, useTransition } from "react";

// import image from "@/public/example-watch3.png";
import { LuMinus, LuPlus } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import defaultWatchPic from "@/public/watch-default.jpg";
import {
  addItemToCartAction,
  decreaseItemFromCart,
  deleteItemFromCart,
} from "@/app/_lib/actions";
import CartSpinner from "../CartSpinner";

interface Props {
  price: string | number;
  name: string;
  id: string | number;
  quantity: number;
  image: string;
}

export default function CartItem({
  price,
  name,
  id,
  quantity = 1,
  image,
}: Props) {
  const [isPending, startTransition] = useTransition();
  const [screenSize, setScreenSize] = useState("large");

  async function handleSideButtons(quantity: number, action: string) {
    startTransition(async () => {
      if (action === "delete") {
        await deleteItemFromCart(id);
      }
      if (quantity > 1 && action === "decrease") {
        await decreaseItemFromCart(id, 1);
      }
      if (quantity === 1 && action === "decrease") {
        await deleteItemFromCart(id);
      }
      if (action === "increase") {
        await addItemToCartAction(id, 1);
      }
    });
  }

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setScreenSize("small");
      } else if (width < 1024) {
        setScreenSize("medium");
      } else {
        setScreenSize("large");
      }
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  if (isPending) return <CartSpinner />;
  // return <CartSpinner />;

  return (
    <div className="flex flex-col items-start lg:flex-row  lg:justify-between lg:items-center border-b border-stone-400 border-opacity-40 w-full py-6 px-0 md:px-2 lg:px-8 h-26">
      {/* //*   */}
      {/* //* Screen is Large */}
      {/* //*   */}
      {screenSize === "large" && (
        <>
          {/* //* image */}
          <div className="flex justify-start  md:w-19 lg:w-19 p-1">
            <Image
              src={image || defaultWatchPic}
              alt="image-photo"
              width={65}
              height={65}
              className=" object-contain rounded-md max-h-13 border"
            />
          </div>

          {/* //* name and desc */}
          <div className="flex flex-col gap-1  lg:w-[20%] ">
            <p className="text-lg font-semibold text-stone-300">{name}</p>
            <span className="text-md text-stone-300">#{id}</span>
          </div>

          {/* //* buttons */}
          <div className="flex items-center gap-4 w-[15%]">
            <button
              onClick={() => handleSideButtons(quantity, "decrease")}
              className="p-1 hover:bg-stone-100 hover:bg-opacity-15 hover:text-stone-100 transition-all ease-in-out duration-200"
            >
              <LuMinus />
            </button>
            <div className="px-4 border rounded-sm">
              <p className="text-md font-semibold text-stone-300">{quantity}</p>
            </div>
            <button
              onClick={() => handleSideButtons(quantity, "increase")}
              className="p-1 hover:bg-stone-100 hover:bg-opacity-15 hover:text-stone-100 transition-all ease-in-out duration-200"
            >
              <LuPlus />
            </button>
          </div>

          {/* //* price */}
          <div className="flex w-[10%]">
            <p className="text-stone-200 tracking-widest">${price}</p>
          </div>

          {/* //* delete item btn */}
          <button
            onClick={() => handleSideButtons(quantity, "delete")}
            className="flex items-center p-1 hover:bg-stone-100 rounded-sm hover:bg-opacity-15 hover:text-stone-100 transition-all ease-in-out duration-200 "
          >
            <MdDelete className="text-xl text-stone-300 " />
          </button>
        </>
      )}
      {/* //*   */}
      {/* //* Screen is Medium */}
      {/* //*   */}
      {screenSize === "medium" && (
        <>
          {/* //* image */}
          <div className="flex justify-start p-1">
            <Image
              src={image || defaultWatchPic}
              alt="image-photo"
              width={65}
              height={65}
              className=" object-contain rounded-md max-h-13 border"
            />
          </div>
          <div className="flex w-full items-center justify-between">
            {/* //* name and desc */}
            <div className="flex flex-col gap-1 ">
              <p className="text-lg font-semibold text-stone-300">{name}</p>
              <span className="text-md text-stone-300">#{id}</span>
            </div>

            {/* //* buttons */}
            <div className="flex items-center gap-1 ">
              <button
                onClick={() => handleSideButtons(quantity, "decrease")}
                className="p-1 hover:bg-stone-100 hover:bg-opacity-15 hover:text-stone-100 transition-all ease-in-out duration-200"
              >
                <LuMinus />
              </button>
              <div className="px-4 border rounded-sm">
                <p className="text-md font-semibold text-stone-300">
                  {quantity}
                </p>
              </div>
              <button
                onClick={() => handleSideButtons(quantity, "increase")}
                className="p-1 hover:bg-stone-100 hover:bg-opacity-15 hover:text-stone-100 transition-all ease-in-out duration-200"
              >
                <LuPlus />
              </button>
            </div>

            {/* //* price */}
            <div className="flex w-[10%] text-center">
              <p className="text-stone-200 tracking-widest">${price}</p>
            </div>

            {/* //* delete item btn */}
            <button
              onClick={() => handleSideButtons(quantity, "delete")}
              className="flex items-center p-1 hover:bg-stone-100 rounded-sm hover:bg-opacity-15 hover:text-stone-100 transition-all ease-in-out duration-200 "
            >
              <MdDelete className="text-xl text-stone-300 " />
            </button>
          </div>
        </>
      )}
      {/* //*   */}
      {/* //* Screen is SMALL */}
      {/* //* */}
      {screenSize === "small" && (
        <>
          {/* //* image */}
          <div className="flex justify-center w-full p-1">
            <Image
              src={image || defaultWatchPic}
              alt="image-photo"
              width={80}
              height={80}
              className=" object-contain rounded-md max-h-13 border mb-2"
            />
          </div>
          <div className="flex flex-col w-full items-center justify-between gap-4">
            {/* //* name and desc */}
            <div className="flex flex-col items-center gap-1 justify-center w-full">
              <p className="text-md font-semibold text-stone-300">{name}</p>
              <span className="text-md text-stone-300">#{id}</span>
            </div>

            {/* //* buttons */}
            <div className="flex items-center justify-center gap-1 w-full">
              <button
                onClick={() => handleSideButtons(quantity, "decrease")}
                className="p-1 hover:bg-stone-100 hover:bg-opacity-15 text-lg hover:text-stone-100 transition-all ease-in-out duration-200"
              >
                <LuMinus />
              </button>
              <div className="px-4 border rounded-sm">
                <p className="text-lg font-semibold text-stone-300">
                  {quantity}
                </p>
              </div>
              <button
                onClick={() => handleSideButtons(quantity, "increase")}
                className="p-1 hover:bg-stone-100 hover:bg-opacity-15 text-lg hover:text-stone-100 transition-all ease-in-out duration-200"
              >
                <LuPlus />
              </button>
            </div>

            {/* //* price */}
            <div className="flex w-full justify-center text-center">
              <p className="text-stone-200 text-lg tracking-widest">${price}</p>
            </div>

            {/* //* delete item btn */}
            <button
              onClick={() => handleSideButtons(quantity, "delete")}
              className="flex items-center p-1 hover:bg-stone-100 rounded-sm hover:bg-opacity-15 hover:text-stone-100 transition-all ease-in-out duration-200 "
            >
              <MdDelete className="text-xl text-stone-300 " />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
