import BreadCrumb from "@/app/_components/products/BreadCrumb";
import CartItem from "@/app/_components/profile/CartItem";
import { auth } from "@/app/_lib/auth";
import { getCartItems, getWatchesByIds } from "@/app/_lib/data-service";
import Link from "next/link";
import React from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

export default async function page() {
  const session = await auth();

  const cartItems = await getCartItems(session?.user?.id || "");

  const Ids = cartItems?.products?.map((obj: {}) => Object.keys(obj)[0]) || [];

  const watchesData = await getWatchesByIds(Ids);

  function findQuantity(
    products: Record<string, number>[],
    watchId: number | string
  ) {
    if (!products || !watchId) return;

    const productObj = products.find(
      (obj: Record<string, number>) => Object.keys(obj)[0] === String(watchId)
    );
    return productObj ? Number(Object.values(productObj)[0]) : 0;
  }

  const totalPrice = watchesData.reduce(
    (acc, cur) =>
      acc +
      findQuantity(cartItems?.products!, cur.id)! * (cur.price - cur.discount),
    0
  );

  return (
    <div className="flex flex-col w-full justify-between items-center gap-24">
      <BreadCrumb />

      <div className="w-full max-w-[65%] flex justify-center">
        {!watchesData.length ? (
          <div className="flex justify-between items-center w-full gap-10 bg-stone-100 bg-opacity-10 p-8">
            <h2 className="uppercase tracking-wider text-xl">
              Nothing Here Yet
            </h2>
            <Link
              href={"/products"}
              className="flex items-center gap-2 p-2 text-lg hover:text-blue-500 transition:color duration-200 ease-in-out"
            >
              <p>Find Your Perfect Watch</p>
              <FaLongArrowAltRight />
            </Link>
          </div>
        ) : (
          <div className="flex flex-col w-full gap-10 bg-stone-100 bg-opacity-10 p-8">
            {/* //* CART HEADER */}
            <div className="w-full flex justify-start">
              <h3 className="text-3xl uppercase tracking-wider">Your Cart</h3>
            </div>

            {/* //* ITEMS */}
            <div className="flex flex-col ">
              {watchesData?.map((item) => (
                <CartItem
                  name={item.name}
                  id={item.id}
                  key={item.id}
                  price={item.price - item.discount}
                  image={item.picture}
                  quantity={findQuantity(cartItems?.products!, item.id) || 1}
                />
              ))}
            </div>

            {/* //* Total */}
            <div className="flex w-full justify-center">
              <p className="text-xl tracking-wider">
                Total :{" "}
                <span className="text-yellow-400">
                  $ {totalPrice.toLocaleString()}
                </span>
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
        )}
      </div>
    </div>
  );
}
