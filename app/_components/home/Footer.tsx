import React from "react";
import FooterLeftPart from "./FooterLeftPart";
import FooterMiddlePart from "./FooterMiddlePart";
import FooterRightPart from "./FooterRightPart";

export default function Footer() {
  return (
    <div className="px-0 py-14 w-full">
      <div className="flex justify-between grow">
        <FooterLeftPart />
        <FooterMiddlePart />
        <FooterRightPart />
      </div>
    </div>
  );
}
