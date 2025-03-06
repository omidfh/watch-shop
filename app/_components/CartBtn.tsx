import Link from "next/link";
import React from "react";

import { PiShoppingCartDuotone } from "react-icons/pi";

export default function CartBtn() {
  return (
    <div>
      <Link
        href={"/profile/cart"}
        className="text-stone-300  hover:text-yellow-100  transition-all duration-200 ease-in-out"
      >
        <PiShoppingCartDuotone className="text-3xl" />
      </Link>
    </div>
  );
}
