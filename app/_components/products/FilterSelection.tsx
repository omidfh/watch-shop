import { getWatchElement } from "@/app/_lib/data-service";
import { WatchElement } from "@/app/types";
import React from "react";

type Props = {
  label: string;
  type: keyof WatchElement;
  defaultValue?: string;
};

type Option = {
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
    new Set(
      selectionData
        ?.map((item) => {
          // Type assertion to handle potentially undefined values
          const value = item[type];
          return value !== undefined ? String(value) : "";
        })
        .filter(Boolean) // Remove empty values
    )
  );

  const optionsData: Option[] = [
    { label: "All", value: "" }, // Add "All" option
    ...uniqueValues.map((value) => ({
      label: value.charAt(0).toUpperCase() + value.slice(1),
      value,
    })),
  ];

  return (
    <div className="flex w-full flex-col justify-between gap-1 h-full">
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
