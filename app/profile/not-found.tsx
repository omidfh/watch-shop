import Link from "next/link";
import { Suspense } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";

function NotFound() {
  return (
    <main className="text-center flex w-full justify-center flex-col space-y-6 mt-4">
      <h1 className="text-3xl font-semibold">
        This page could not be found :(
      </h1>
      <Link
        href="/profile"
        className="flex items-center w-full justify-center gap-2 p-2 text-lg hover:text-blue-500 transition:color duration-200 ease-in-out"
      >
        <FaLongArrowAltLeft />
        <p>Go back to profile</p>
      </Link>
    </main>
  );
}

export default function NotFoundWrapper() {
  return (
    <Suspense>
      <NotFound />
    </Suspense>
  );
}
