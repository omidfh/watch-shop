import CartSpinner from "@/app/_components/CartSpinner";
import LittleLoader from "@/app/_components/loader/LittleLoader";
import Loader from "@/app/_components/loader/page";
import BreadCrumb from "@/app/_components/products/BreadCrumb";
import BackButton from "@/app/_components/SingleProduct/BackButton";
import CompanyServices from "@/app/_components/SingleProduct/CompanyServices";

import SingleProductWrapper from "@/app/_components/SingleProduct/SingleProductWrapper";

import React, { Suspense } from "react";

export default async function page({ params }: { params: Params }) {
  const { productId } = params;

  return (
    <div className="flex flex-col  justify-between gap-24 w-full items-center">
      {/* //* BREADCRUMB */}
      <BreadCrumb />
      <BackButton />
      {/* //* Product Info & Image */}
      <div className="w-full max-w-[65%] flex justify-center">
        <Suspense fallback={<LittleLoader />}>
          <SingleProductWrapper productId={productId} />
        </Suspense>
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
