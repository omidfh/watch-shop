import BreadCrumb from "@/app/_components/products/BreadCrumb";
import CartItem from "@/app/_components/profile/CartItem";
import { dummyData } from "@/app/dummyData";
import Link from "next/link";
import React from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

export default function page() {
  return (
    <div className="flex flex-col w-full justify-between items-center gap-24">
      <BreadCrumb />

      <div className="w-full max-w-[65%] flex justify-center">
        <div className="flex flex-col w-full gap-10 bg-stone-100 bg-opacity-10 p-8">
          {/* //* CART HEADER */}
          <div className="w-full flex justify-start">
            <h3 className="text-3xl uppercase tracking-wider">Your Cart</h3>
          </div>

          {/* //* ITEMS */}
          <div className="flex flex-col ">
            {dummyData.slice(0, 3).map((item) => (
              <CartItem
                name={item.name}
                id={item.id}
                price={item.price}
                image={item.picture}
                quantity={1}
              />
            ))}
          </div>

          {/* //* Total */}
          <div className="flex w-full justify-center">
            <p className="text-xl tracking-wider">
              Total : <span className="text-yellow-400">$ 5500</span>
            </p>
          </div>

          {/* //* buttons */}
          <div className="flex w-full justify-between items-center">
            <Link
              href={"/products"}
              className="flex items-center gap-2 p-2 text-lg hover:text-blue-500 transition:color duration-200 ease-in-out"
            >
              <FaLongArrowAltLeft />
              <p>Continue Shopping</p>
            </Link>
            <button className="flex items-center gap-2 p-2 text-lg hover:text-yellow-500 transition:color duration-200 ease-in-out">
              <p>Checkout</p>
              <FaLongArrowAltRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
