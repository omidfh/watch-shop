import Image, { StaticImageData } from "next/image";
import React from "react";
import Link from "next/link";

type Props = {
  name: string;
  price: string | number;
  id: string | number;
  image: StaticImageData;
};

export default function SingleProductItem({ name, price, image }: Props) {
  return (
    <div className="flex flex-col justify-between bg-stone-400 bg-opacity-10 ">
      <div className="flex flex-col">
        <div className="flex justify-between items-center px-4 py-2">
          <p className="max-w-[50%] text-stone-300 text-md">{name}</p>
          <p className="text-md text-yellow-100">$ {price}</p>
        </div>

        <div className="flex justify-center px-3 pb-4">
          <Image
            src={image}
            alt="watch-photo"
            className="object-contain"
            width={300}
          />
        </div>
        <div className="flex flex-col">
          <p>test</p>
          <p>test</p>
          <p>test</p>
        </div>
      </div>
      <div className="flex flex-col">
        <hr className="border-stone-800" />
        <Link
          href={"/products"}
          className="uppercase p-4 tracking-wide text-center hover:text-stone-900 hover:bg-stone-300 transition-all ease-in-out duration-300"
        >
          Add to cart
        </Link>
      </div>
    </div>
  );
}
