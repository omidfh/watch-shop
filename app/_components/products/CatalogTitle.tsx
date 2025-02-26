import React from "react";

export default function CatalogTitle() {
  return (
    <div className="flex flex-col justify-center items-center text-center w-full">
      <div className="flex flex-col justify-between items-center gap-4">
        <p className="text-sm text-yellow-300 text-opacity-50 uppercase ">
          Top Picks for You
        </p>
        <p className="md:text-4xl sm:text-2xl text-stone-200 uppercase ">
          Curated Favorites to Match Your Style
        </p>
      </div>
    </div>
  );
}
