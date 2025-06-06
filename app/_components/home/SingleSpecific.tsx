import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

type Props = {
  children: React.ReactNode;
  title: string;
  description: string;
  link: string;
};

export default function SingleSpecific({
  children,
  title,
  description,
  link,
}: Props) {
  return (
    <div className="flex flex-col gap-16 justify-between bg-black w-full lg:w-[32%] md:w-[33%] p-8 hover:bg-yellow-100 hover:bg-opacity-10 transition-all">
      <div className="flex flex-col justify-between gap-8 h-full">
        <div className="flex gap-4 ">
          <div>
            <div className="p-1 bg-stone-600 bg-opacity-40 rounded-full">
              {children}
            </div>
          </div>
          <div className="flex flex-col gap-4 ">
            <p className=" text-sm md:text-md lg:text-xl uppercase ">{title}</p>
          </div>
        </div>

        <div className="flex flex-col h-full justify-end">
          <p className=" text-sm md:text-md lg:text-md text-stone-500">
            {description}
          </p>
        </div>
      </div>
      <Link
        href={link}
        className="flex justify-between items-center  group transition-all text-sm md:text-md lg:text-md"
      >
        <p className="uppercase tracking-wider ">Learn more</p>
        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
