import Image from "next/image";
import React from "react";
import FooterLeftPart from "./FooterLeftPart";
import FooterMiddlePart from "./FooterMiddlePart";
import FooterRightPart from "./FooterRightPart";

export default function Footer() {
  return (
    <div className="specialPadding py-14">
      <div className="flex justify-between">
        <FooterLeftPart />
        <FooterMiddlePart />
        <FooterRightPart />
      </div>
    </div>
  );
}
