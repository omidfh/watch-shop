import FilterSelection from "./FilterSelection";

export default function CatalogFilter() {
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
      <FilterSelection label="Brand" type="brand" />

      {/* //* Color */}
      <FilterSelection label="Color" type="color" />

      {/* //* Gender */}
      <FilterSelection label="Gender" type="gender" />

      {/* //* Material */}
      <FilterSelection label="Material" type="material" />

      {/* //* Strap Type */}
      <FilterSelection label="Strap Type" type="strap" />

      <button
        type="submit"
        className="bg-yellow-100 text-center  bg-opacity-90 p-3 tracking-wider font-semibold  text-black hover:text-white hover:bg-opacity-20 hover:transition-all ease-in-out duration-500"
      >
        Apply Filter
      </button>
    </div>
  );
  // </div>
}
