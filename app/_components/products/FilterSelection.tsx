import { getWatchElement } from "@/app/_lib/data-service";
import React from "react";

type Props = {
  label: string;
  type: string;
  defaultValue?: string;
};

type options = {
  label: string;
  value: string;
};

export default async function FilterSelection({
  label,
  type,
  defaultValue = "",
}: Props) {
  const selectionData = await getWatchElement(type);

  const uniqueValues = Array.from(
    new Set(selectionData?.map((item: any) => item[type].toLowerCase()))
  );

  const optionsData: options[] = [
    { label: "All", value: "" }, // Add "All" option
    ...uniqueValues.map((value) => ({
      label: value.charAt(0).toUpperCase() + value.slice(1),
      value: value,
    })),
  ];

  return (
    <div className="flex flex-col justify-between gap-1 h-full">
      <label id="filterLabel" htmlFor={type}>
        {label}
      </label>
      <div>
        <select
          className="bg-transparent w-full focus:outline-none"
          id={type}
          name={type}
          defaultValue={defaultValue}
        >
          {optionsData.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
