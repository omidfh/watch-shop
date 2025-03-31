import React from "react";
import { getSingleWatch } from "@/app/_lib/data-service";
import SingleProductImage from "./SingleProductImage";
import ProductInfo from "./ProductInfo";
import { auth } from "@/app/_lib/auth";

export default async function SingleProductWrapper({
  productId,
}: {
  productId: string | number;
}) {
  const session = await auth();

  const selectedProduct = await getSingleWatch(productId);

  if (!selectedProduct) throw Error("Watch not found!");
  return (
    <div className="flex flex-row justify-between">
      <SingleProductImage selectedProduct={selectedProduct} />
      <ProductInfo
        selectedProduct={selectedProduct}
        isLoggedIn={!!session?.user}
      />
    </div>
  );
}
