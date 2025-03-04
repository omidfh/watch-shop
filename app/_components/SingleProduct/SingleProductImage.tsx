import Image from "next/image";
import React from "react";

interface SingleProductImageProps {
  selectedProduct: SingleWatch;
}

export default function SingleProductImage({
  selectedProduct,
}: SingleProductImageProps) {
  return (
    <div className="flex justify-end p-10 bg-stone-400 bg-opacity-10 ">
      <Image
        src={selectedProduct?.picture}
        alt={selectedProduct?.name}
        width={350}
        height={200}
        quality={100}
        className="object-contain"
      />
    </div>
  );
}
