"use client";

import { addItemToCartAction } from "@/app/_lib/actions";
import React, { useTransition } from "react";
import Loader from "../loader/page";

interface SingleProductInfoProps {
  selectedProduct: SingleWatch;
}

export default function ProductInfo({
  selectedProduct,
}: SingleProductInfoProps) {
  const [isPending, startTransition] = useTransition();
  async function handleAddToCart() {
    startTransition(async () => {
      await addItemToCartAction(selectedProduct?.id, 1);
    });
  }

  if (isPending) return <Loader />;

  return (
    <div className="flex py-6  px-10 w-[50%] ">
      <div className="flex flex-col justify-center gap-4">
        {/* //* Name */}
        <h3 className="lg:text-5xl md:text-3xl text-stone-200 tracking-wider ">
          {selectedProduct?.name}
        </h3>
        {/* //* Price */}

        <div className="flex items-center gap-4">
          <p
            className={`text-lg ${
              selectedProduct.hasDiscount ? "text-red-300" : "text-yellow-100"
            } ${selectedProduct.hasDiscount ? "line-through" : ""}`}
          >
            $ {selectedProduct.price.toLocaleString()}
          </p>
          {selectedProduct.hasDiscount && (
            <p className="text-green-200 text-lg">
              ${" "}
              {(
                Number(selectedProduct.price) - Number(selectedProduct.discount)
              ).toLocaleString()}
            </p>
          )}
        </div>

        {/* //* Description */}
        <p className="text-sm text-stone-300 text-opacity-80 tracking-wider">
          {selectedProduct?.description}
        </p>

        {/* //* Specifics */}
        <div className="flex flex-col gap-1">
          {/* //*brand */}
          <span className="text-stone-300 text-opacity-70 list-disc text-lg items-center tracking-wider">
            Brand :{" "}
            <span className="capitalize text-stone-300 text-opacity-100">
              {selectedProduct?.brand}
            </span>
          </span>
          {/* //* material */}
          <span className="text-stone-300 text-opacity-70 list-disc text-lg items-center tracking-wider">
            Material :{" "}
            <span className="capitalize text-stone-300 text-opacity-100 ">
              {selectedProduct?.material}
            </span>
          </span>
          {/* //* color */}
          <span className="text-stone-300 text-opacity-70 list-disc text-md items-center tracking-wider">
            Color :{" "}
            <span className="capitalize text-stone-300 text-opacity-100">
              {selectedProduct?.color}
            </span>
          </span>
          {/* //* strap */}
          <span className="text-stone-300 text-opacity-70 list-disc text-md items-center tracking-wider">
            Strap :{" "}
            <span className="capitalize text-stone-300 text-opacity-100">
              {selectedProduct?.strap}
            </span>
          </span>
          {/* //* gender */}
          <span className="text-stone-300 text-opacity-70 list-disc text-md items-center tracking-wider">
            Gender :{" "}
            <span className="capitalize text-stone-300 text-opacity-100">
              {selectedProduct?.gender}
            </span>
          </span>
        </div>
        <button
          onClick={handleAddToCart}
          className="bg-yellow-100 text-lg text-center bg-opacity-90 p-4  text-black hover:text-white hover:bg-opacity-20 hover:transition-all ease-in-out duration-500"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
