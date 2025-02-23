import Link from "next/link";
import React from "react";
import SingleProduct from "./SingleProduct";
import exampleWatch from "@/public/example-watch.png";
import exampleWatch2 from "@/public/example-watch2.png";
import exampleWatch3 from "@/public/example-watch3.png";

export default function HomeProductList() {
  return (
    <div className="flex flex-col w-[100%] gap-24">
      <div className="flex justify-between items-center">
        <div className="flex flex-col uppercase">
          <p className="text-sm text-yellow-300 text-opacity-60">
            Timeless Creations
          </p>
          <p className="text-4xl text-stone-100">
            Discover Watches That Speak Your Style
          </p>
        </div>
        <div>
          <Link
            className="bg-stone-300 bg-opacity-90 text-center text-black p-4 w-32 uppercase  hover:bg-opacity-10 hover:text-stone-100 hover:transition-all ease-in-out duration-500"
            href={"/products"}
          >
            shop all products
          </Link>
        </div>
      </div>
      {/* //*Products */}

      <div className="grid grid-cols-3 gap-4">
        <SingleProduct
          id={"1"}
          name={"Classic Chrono Metal"}
          price={"250.000"}
          image={exampleWatch}
        />
        <SingleProduct
          id={"2"}
          name={"Elegant Gold Brown Leather"}
          price={"150.000"}
          image={exampleWatch2}
        />
        <SingleProduct
          id={"3"}
          name={"Classic Chrono Black Leather"}
          price={"197.000"}
          image={exampleWatch3}
        />
      </div>
    </div>
  );
}
