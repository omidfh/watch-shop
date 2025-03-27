"use client";

import Image from "next/image";
import React from "react";

// import image from "@/public/example-watch3.png";
import { LuMinus, LuPlus } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import defaultWatchPic from "@/public/watch-default.jpg";
import { deleteItemFromCart } from "@/app/_lib/actions";

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
  async function handleDeleteItem() {
    await deleteItemFromCart(id);
  }

  return (
    <div className="flex w-full  justify-between items-center border-b border-stone-400 border-opacity-40  py-6 px-8 h-26">
      {/* //* image */}
      <div className="flex rounded-md border w-19 p-1">
        <Image
          src={image || defaultWatchPic}
          alt="image-photo"
          width={65}
          height={65}
          className="m-auto object-contain max-h-13"
        />
      </div>

      {/* //* name and desc */}
      <div className="flex flex-col gap-1 w-[20%]">
        <p className="text-lg font-semibold text-stone-300">{name}</p>
        <span className="text-md text-stone-300">#{id}</span>
      </div>

      {/* //* buttons */}
      <div className="flex items-center gap-4 w-[15%]">
        <button className="p-1 hover:bg-stone-100 hover:bg-opacity-15 hover:text-stone-100 transition-all ease-in-out duration-200">
          <LuMinus />
        </button>
        <div className="px-4 border rounded-sm">
          <p className="text-md font-semibold text-stone-300">{quantity}</p>
        </div>
        <button className="p-1 hover:bg-stone-100 hover:bg-opacity-15 hover:text-stone-100 transition-all ease-in-out duration-200">
          <LuPlus />
        </button>
      </div>

      {/* //* price */}
      <div className="flex w-[10%]">
        <p className="text-stone-200 tracking-widest">${price}</p>
      </div>

      {/* //* delete item btn */}
      <button
        onClick={handleDeleteItem}
        className="flex items-center p-1 hover:bg-stone-100 rounded-sm hover:bg-opacity-15 hover:text-stone-100 transition-all ease-in-out duration-200 "
      >
        <MdDelete className="text-xl text-stone-300 " />
      </button>
    </div>
  );
}
