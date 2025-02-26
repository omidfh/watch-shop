import React from "react";
import BreadCrumb from "../_components/products/BreadCrumb";
import CatalogTitle from "../_components/products/CatalogTitle";
import CatalogFilter from "../_components/products/CatalogFilter";

export default function page() {
  return (
    <div className="flex flex-col items-start justify-between gap-24">
      {/* //* BREADCRUMB */}
      <BreadCrumb />

      {/* //* CATALOG TITLE */}
      <CatalogTitle />

      {/* //* CATALOG FILTER */}
      <CatalogFilter />
    </div>
  );
}
