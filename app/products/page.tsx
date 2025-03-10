import BreadCrumb from "../_components/products/BreadCrumb";
import CatalogTitle from "../_components/products/CatalogTitle";
import CatalogFilter from "../_components/products/CatalogFilter";
import SingleProductItem from "../_components/products/SingleProductItem";

import Sort from "../_components/products/Sort";
import { getWatches } from "../_lib/data-service";
import PaginationParent from "../_components/products/PaginationParent";
import FilterParent from "../_components/products/FilterParent";

export const metadata = {
  title: "Products",
  description: "explore watches choose favorite one",
};

export default async function page() {
  const watches: SingleWatch[] = (await getWatches()) || [];

  const totalPage = Math.ceil(watches?.length / 9);
  console.log("total page is", totalPage);

  return (
    <div className="flex flex-col items-start justify-between gap-24">
      {/* //* BREADCRUMB */}
      <BreadCrumb />

      {/* //* CATALOG TITLE */}
      <CatalogTitle />

      {/* //* Products and  FILTER */}
      <div className="flex w-full  justify-center mx-auto">
        <div className="flex lg:flex-row md:flex-col sm:flex-col sm:gap-8 lg:items-start md:items-center justify-center w-full">
          {/* //*filters */}
          <div className="flex flex-col min-w-[15%] gap-4">
            <Sort />

            <FilterParent>
              <CatalogFilter />
            </FilterParent>
          </div>

          {/* //* products */}
          <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:gap-12 md:gap-4 sm:gap-2">
            {watches?.map((item) => (
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
            ))}
          </div>
        </div>
      </div>

      <PaginationParent totalPage={totalPage} currentPage={1} />
    </div>
  );
}
