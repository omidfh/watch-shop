"useClient";

import React from "react";
import SingleProductItem from "../products/SingleProductItem";

export default function SingleProductWrapper({ watches, children }) {
  console.log(watches.length);
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:gap-12 md:gap-4 sm:gap-2">
      {/* {watches?.map((item) => (
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
      ))} */}
      {children}
    </div>
  );
}
