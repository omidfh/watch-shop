// This can be a server component
import FilterSelection from "./FilterSelection";
import ChangeFilterButton from "./ChangeFilterButton";
import FilterPriceFilter from "./FilterPriceFilter";
import { getWatchElement } from "@/app/_lib/data-service";
import { Filters, SearchParams, WatchElement } from "@/app/types";

export default async function CatalogFilter({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  // Parse the filters from the URL
  let parsedFilters: Filters = {};

  try {
    if (searchParams?.filters) {
      parsedFilters = JSON.parse(decodeURIComponent(searchParams.filters));
    }
  } catch (error) {
    console.error("Error parsing filters:", error);
  }

  const prices = await getWatchElement("price");
  const biggestPrice = Math.max(
    ...prices.map((item: WatchElement) => item.price ?? 0)
  );

  return (
    <form className=" flex w-full flex-col  gap-10 rounded-md p-6 ">
      {/* //*part 1 */}

      <div className="flex w-full ">
        {/* //* price */}
        {/* <div className="flex flex-col justify-between gap-1 h-full w-full">
          <label id="filterLabel" htmlFor="price">
            Price
          </label>
          <div className="flex flex-col justify-between gap-4 w-full">
            <div className="flex items-center w-full">
              <input
                name="priceMin"
                defaultValue={parsedFilters?.price?.min || ""}
                className=" w-full bg-transparent px-2 placeholder:capitalize text-stone-200 border-b border-stone-300 border-opacity-40 focus:outline-none focus:ring-0"
                type="number"
                placeholder="from"
              />
              <p className="text-center text-stone-300 text-opacity-50">$</p>
            </div>
            <div className="flex items-center">
              <input
                name="priceMax"
                defaultValue={parsedFilters?.price?.max || ""}
                className="w-full bg-transparent px-2 placeholder:capitalize text-stone-200 border-b border-stone-300 border-opacity-40 focus:outline-none focus:ring-0"
                type="number"
                placeholder="to"
              />
              <p className="text-center text-stone-300 text-opacity-50">$</p>
            </div>
          </div>
        </div> */}
        <FilterPriceFilter
          searchParams={searchParams}
          parsedFilters={parsedFilters}
          biggestPrice={biggestPrice}
        />
      </div>

      {/* //*part 2 */}
      <FilterSelection
        label="Brand"
        type="brand"
        defaultValue={parsedFilters?.brand || ""}
      />
      <FilterSelection
        label="Color"
        type="color"
        defaultValue={parsedFilters?.color || ""}
      />
      <FilterSelection
        label="Gender"
        type="gender"
        defaultValue={parsedFilters?.gender || ""}
      />
      <FilterSelection
        label="Material"
        type="material"
        defaultValue={parsedFilters?.material || ""}
      />
      <FilterSelection
        label="Strap Type"
        type="strap"
        defaultValue={parsedFilters?.strap || ""}
      />

      <ChangeFilterButton existingFilters={parsedFilters} />
    </form>
  );
}
