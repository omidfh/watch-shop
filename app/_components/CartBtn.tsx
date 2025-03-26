import Link from "next/link";
import React from "react";

import { PiShoppingCartDuotone } from "react-icons/pi";
import { getCartItems } from "../_lib/data-service";

export default async function CartBtn({ userId }: { userId: number }) {
  const cartItems = await getCartItems(userId);
  return (
    <div>
      <Link
        href={"/profile/cart"}
        className="flex relative text-stone-300 items-center  hover:text-yellow-100  transition-all duration-200 ease-in-out"
      >
        <PiShoppingCartDuotone className="text-3xl" />
        {userId && cartItems?.products.length > 0 && (
          <span className="px-1.5 absolute top-4 left-6  text-xs text-stone-900 bg-yellow-200 rounded-full m-auto ">
            {cartItems?.products.length}
          </span>
        )}
      </Link>
    </div>
  );
}
