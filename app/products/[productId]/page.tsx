import BreadCrumb from "@/app/_components/products/BreadCrumb";
import BackButton from "@/app/_components/SingleProduct/BackButton";
import CompanyServices from "@/app/_components/SingleProduct/CompanyServices";
import ProductInfo from "@/app/_components/SingleProduct/ProductInfo";
import SingleProductImage from "@/app/_components/SingleProduct/SingleProductImage";
import { auth } from "@/app/_lib/auth";
import { getSingleWatch } from "@/app/_lib/data-service";
import { dummyData } from "@/app/dummyData";
import Link from "next/link";
import React from "react";

export default async function page({ params }: { params: Params }) {
  const session = await auth();
  const { productId } = params;

  const selectedProduct = (await getSingleWatch(productId)) || {
    id: 0,
    name: "",
    price: 0,
    hasDiscount: false,
    discount: 0,
    material: "",
    strap: "",
    color: "",
    brand: "",
    gender: "",
    picture: "",
    description: "",
  };

  return (
    <div className="flex flex-col  justify-between gap-24 w-full items-center">
      {/* //* BREADCRUMB */}
      <BreadCrumb />
      <BackButton />
      {/* //* Product Info & Image */}
      <div className="w-full max-w-[65%] flex justify-center">
        <div className="flex flex-row justify-between">
          <SingleProductImage selectedProduct={selectedProduct} />
          <ProductInfo
            selectedProduct={selectedProduct}
            isLoggedIn={!!session?.user}
          />
        </div>
      </div>
      <div className="w-full max-w-[65%] flex justify-center">
        <div className="flex flex-col gap-8">
          <h3 className="text-4xl">Key Features at a Glance</h3>
          <CompanyServices />
        </div>
      </div>
    </div>
  );
}
