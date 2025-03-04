import React, { ReactElement } from "react";

interface Props {
  title: string;
  description: string;
  children: ReactElement;
}

export default function CompanyServiceItem({
  title,
  description,
  children,
}: Props) {
  return (
    <div className="flex justify-between items-start gap-4 w-[1/3]  p-1 hover:text-yellow-200  transition-colors ease-in-out duration-300">
      <div className="p-2 bg-stone-400 bg-opacity-20 rounded-full">
        {children}
      </div>
      <div className="flex flex-col justify-between gap-3">
        <h3 className="text-xl text-stone-300 tracking-wider">{title}</h3>
        <p className="text-stone-300 text-opacity-65 text-sm">{description}</p>
      </div>
    </div>
  );
}
