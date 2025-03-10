import FilterSelection from "./FilterSelection";
import { dummyData } from "@/app/dummyData";

export default function CatalogFilter() {
  // const { show } = useToggleFilter();
  // if (!show) return;

  function getSelections(filterType: string) {
    const uniqueValues = dummyData.reduce((acc, item) => {
      const value = item[filterType as keyof (typeof dummyData)[0]];
      if (!acc.includes(value)) {
        acc.push(value);
      }
      return acc;
    }, [] as any[]);

    const data = uniqueValues.map((value) => ({
      label: String(value).charAt(0).toUpperCase() + String(value).slice(1),
      value: String(value),
    }));

    data.unshift({ label: "All", value: "all" });

    return data;
  }

  return (
    <div className="flex lg:flex-col md:flex-row sm:flex-row gap-10 rounded-md p-6  ">
      {/* //*part 1 */}
      <div className="flex w-full">
        {/* //* price */}
        <div className="flex flex-col justify-between gap-1 h-full">
          <label id="filterLabel" htmlFor="price">
            Price
          </label>
          <div className="flex flex-col justify-between gap-4 ">
            <div className="flex items-center">
              <input
                className="bg-transparent px-2 placeholder:capitalize  text-stone-200 border-b border-stone-300 border-opacity-40 focus:outline-none focus:ring-0"
                type="number"
                placeholder="from"
              />
              <p className="text-center">$</p>
            </div>
            <div className="flex items-center">
              <input
                className="bg-transparent px-2 placeholder:capitalize  text-stone-200 border-b border-stone-300 border-opacity-40 focus:outline-none focus:ring-0"
                type="number"
                placeholder="to"
              />
              <p className="text-center">$</p>
            </div>
          </div>
        </div>
      </div>

      {/* //*part 2 */}

      {/* //* Brand  */}
      {/* Brand */}
      <FilterSelection label="Brand" type="brand" />

      {/* //* Color */}
      <FilterSelection label="Color" type="color" />

      {/* //* Gender */}
      <FilterSelection label="Gender" type="gender" />

      {/* //* Material */}
      <FilterSelection label="Material" type="material" />

      {/* //* Strap Type */}
      <FilterSelection label="Strap Type" type="strap" />
    </div>
  );
  // </div>
}
