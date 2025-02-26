import React from "react";

export default function CatalogFilter() {
  return (
    <div className="flex justify-center w-[100%]">
      {/* Sort-Brand-gender-color-price-material-strap type-has Discount */}
      <div className="flex justify-between gap-6  ">
        {/* //*FILTERS */}
        <div className="flex flex-col gap-10 w-[60%] border-stone-300 border-opacity-20 border p-6">
          <p>Filters</p>
          {/* //*part 1 */}
          <div>
            {/* //* price */}
            <div className="flex flex-col justify-between gap-1 h-full">
              <label id="filterLabel" htmlFor="price">
                Price
              </label>
              <div className="flex justify-between gap-4">
                <input
                  className="bg-transparent p-2 w-[50%] text-stone-200 border-b border-stone-300 border-opacity-40 focus:outline-none focus:ring-0"
                  type="number"
                  placeholder="from"
                />

                <input
                  className="bg-transparent p-2 w-[50%] text-stone-200 border-b border-stone-300 border-opacity-40 focus:outline-none focus:ring-0"
                  type="number"
                  placeholder="to"
                />
              </div>
            </div>
          </div>

          {/* //*part 2 */}

          <div className="flex justify-between">
            {/* //* Brand  */}
            <div className="flex flex-col justify-between gap-1 h-full">
              <label id="filterLabel" htmlFor="brand">
                Brand
              </label>
              <div className="flex">
                <select className="bg-transparent" id="brand" name="brand">
                  <option value="all">All Brands</option>
                  <option value="brand1">Brand 1</option>
                  <option value="brand2">Brand 2</option>
                  <option value="brand3">Brand 3</option>
                </select>
              </div>
            </div>

            {/* //* Color */}
            <div className="flex flex-col justify-between gap-1 h-full">
              <label id="filterLabel" htmlFor="color">
                Color
              </label>
              <div>
                <select className="bg-transparent" id="color" name="color">
                  <option value="all">All Colors</option>
                  <option value="red">Red</option>
                  <option value="blue">Blue</option>
                </select>
              </div>
            </div>
          </div>

          {/* //*part 3 */}

          <div className="flex  justify-between">
            {/* //* Gender */}
            <div className="flex flex-col justify-between gap-1 h-full">
              <label id="filterLabel" htmlFor="gender">
                Gender
              </label>
              <div>
                <select className="bg-transparent" id="gender" name="gender">
                  <option value="all">All</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            {/* //* Material */}
            <div className="flex flex-col justify-between gap-1 h-full">
              <label id="filterLabel" htmlFor="material">
                Material
              </label>
              <div>
                <select
                  className="bg-transparent"
                  id="material"
                  name="material"
                >
                  <option value="all">All Materials</option>
                  <option value="leather">Leather</option>
                  <option value="metal">Metal</option>
                  <option value="plastic">Plastic</option>
                  <option value="fabric">Fabric</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex  justify-between">
            {/* //* Strap Type */}
            <div className="flex flex-col justify-between gap-1 h-full">
              <label id="filterLabel" htmlFor="strap-type">
                Strap Type
              </label>
              <div>
                <select
                  className="bg-transparent"
                  id="strap-type"
                  name="strap-type"
                >
                  <option value="all">All Types</option>
                  <option value="metal">Metal</option>
                  <option value="leather">Leather</option>
                  <option value="nylon">Nylon</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* //* sort */}
          <div className="flex flex-col  items-center h-full">
            <label htmlFor="sort">Sort</label>
            <div>
              <select className="bg-transparent" id="sort" name="sort">
                <option value="price-asc">Price from top</option>
                <option value="price-desc">Price from down</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
