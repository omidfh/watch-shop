import BreadCrumb from "../_components/products/BreadCrumb";
import CatalogTitle from "../_components/products/CatalogTitle";
import CatalogFilter from "../_components/products/CatalogFilter";
import SingleProductItem from "../_components/products/SingleProductItem";

import Sort from "../_components/products/Sort";
import { getWatches } from "../_lib/data-service";
import PaginationParent from "../_components/products/PaginationParent";
import FilterParent from "../_components/products/FilterParent";
import { Fragment, Suspense } from "react";
import { auth } from "../_lib/auth";
import { Filters, SearchParams, WatchesDataType } from "../types";

const ITEMS_PER_PAGE = 9;

export const metadata = {
  title: "Products",
  description: "explore watches choose favorite one",
};

export default async function page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { page, sort } = searchParams;
  const session = await auth();

  let parsedFilters: Filters = {};
  try {
    if (searchParams?.filters) {
      parsedFilters = JSON.parse(decodeURIComponent(searchParams.filters));
    }
  } catch (error) {
    console.error("Error parsing filters:", error);
  }

  const watches: WatchesDataType =
    (await getWatches(
      page,
      searchParams.sort,
      ITEMS_PER_PAGE,
      parsedFilters
    )) || [];

  const totalPage = Math.ceil(Number(watches?.totalPages) / 9);

  return (
    <div className="flex flex-col items-start justify-between gap-24">
      {/* //* BREADCRUMB */}
      <BreadCrumb />

      {/* //* CATALOG TITLE */}
      <CatalogTitle />

      {/* //* Products and  FILTER */}
      <div className="flex w-full  justify-center mx-auto">
        <div className="flex gap-2 lg:flex-row md:flex-row flex-col sm:gap-8  lg:items-start md:items-start justify-center w-full px-4 lg:px-0 ">
          {/* //*filters */}
          <div className="flex flex-col lg:w-[19%]  gap-4">
            <Sort sort={sort} />

            <FilterParent searchParams={searchParams}>
              <Suspense>
                <CatalogFilter searchParams={searchParams} />
              </Suspense>
            </FilterParent>
          </div>

          {/* //* products */}

          <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 lg:gap-12 md:gap-4 gap-2 lg:min-w-[70%]">
            {watches.data.length === 0 ? (
              <div className="flex w-full justify-center  p-4 bg-stone-300 bg-opacity-10">
                <h3 className="uppercase tracking-wider text-xl">
                  There is no watch to show
                </h3>
              </div>
            ) : (
              <Fragment>
                {watches?.data?.map((item) => (
                  <SingleProductItem
                    isLoggedIn={!!session?.user}
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    picture={item.picture}
                    brand={item.brand}
                    material={item.material}
                    strap={item.strap}
                    hasDiscount={item.hasDiscount}
                    discount={item.discount}
                  />
                ))}
              </Fragment>
            )}
          </div>
        </div>
      </div>
      {watches.data.length !== 0 && (
        <PaginationParent totalPage={totalPage} currentPage={page} />
      )}
    </div>
  );
}
