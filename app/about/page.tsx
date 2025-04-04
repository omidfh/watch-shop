import React, { Suspense } from "react";

function About() {
  return (
    <div className=" flex flex-col items-center  bg-black text-white px-6 md:px-20">
      <p className="text-lg text-gray-300 max-w-2xl text-center leading-relaxed">
        Welcome to{" "}
        <span className="text-yellow-400 font-semibold">WatchShop</span>, your
        premier destination for luxury and stylish watches. We curate an
        exclusive collection of timepieces that blend elegance with precision,
        ensuring you find the perfect watch for any occasion.
      </p>
      <div className="mt-8 border-t border-gray-600 w-40"></div>
      <p className="mt-6 text-gray-400 italic">
        Time is more than numbers; it&apos;s a statement of style.
      </p>
    </div>
  );
}

export default function AboutWrapper() {
  <Suspense>
    <About />
  </Suspense>;
}
