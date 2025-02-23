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
    <div className="flex flex-col gap-16 justify-between bg-black w-[32%] p-8 hover:bg-yellow-100 hover:bg-opacity-10 transition-all">
      <div className="flex flex-col gap-8">
        <div className="flex gap-4">
          <div>
            <div className="p-1 bg-stone-100 bg-opacity-60 rounded-full">
              {children}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-lg uppercase">{title}</p>
          </div>
        </div>

        <p className="text-xs text-stone-500">{description}</p>
      </div>
      <Link
        href={link}
        className="flex justify-between items-center text-xs group transition-all"
      >
        <p className="uppercase tracking-wider">Learn more</p>
        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
