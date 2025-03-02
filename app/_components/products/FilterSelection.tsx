import React from "react";

type Props = {
  label: string;
  type: string;
  options: {
    label: string;
    value: string;
  }[];
};

export default function FilterSelection({ label, type, options }: Props) {
  console.log(options);
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
        >
          {options.map((option) => (
            <option value={option?.value}>{option.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
