"use client";

import BreadCrumb from "@/app/_components/products/BreadCrumb";
import CompanyServices from "@/app/_components/SingleProduct/CompanyServices";
import ProductInfo from "@/app/_components/SingleProduct/ProductInfo";
import SingleProductImage from "@/app/_components/SingleProduct/SingleProductImage";
import { dummyData } from "@/app/dummyData";
import { useParams } from "next/navigation";
import React from "react";

export default function page() {
  const { productId } = useParams();

  const selectedProduct: SingleWatch = dummyData.find(
    (item) => item.id === Number(productId)
  ) || {
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

      {/* //* Product Info & Image */}
      <div className="w-full max-w-[65%] flex justify-center">
        <div className="flex flex-row justify-between">
          <SingleProductImage selectedProduct={selectedProduct} />
          <ProductInfo selectedProduct={selectedProduct} />
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
