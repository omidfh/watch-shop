import BreadCrumb from "../_components/products/BreadCrumb";
import CatalogTitle from "../_components/products/CatalogTitle";
import CatalogFilter from "../_components/products/CatalogFilter";
import SingleProductItem from "../_components/products/SingleProductItem";

import Sort from "../_components/products/Sort";
import { getWatches } from "../_lib/data-service";
import PaginationParent from "../_components/products/PaginationParent";
import FilterParent from "../_components/products/FilterParent";

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
        <div className="flex lg:flex-row md:flex-col sm:flex-col sm:gap-8 lg:items-start md:items-center justify-center w-full">
          {/* //*filters */}
          <div className="flex flex-col w-[18%] gap-4">
            <Sort sort={sort} />

            <FilterParent searchParams={searchParams}>
              <CatalogFilter searchParams={searchParams} />
            </FilterParent>
          </div>

          {/* //* products */}
          <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:gap-12 md:gap-4 sm:gap-2 min-w-[70%]">
            {watches?.data?.map((item) => (
              <SingleProductItem
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
          </div>
        </div>
      </div>

      <PaginationParent totalPage={totalPage} currentPage={page} />
    </div>
  );
}
