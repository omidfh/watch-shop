import Image from "next/image";
import React from "react";

import avatar from "@/public/logo1.png";
import Link from "next/link";

export default function Avatar() {
  return (
    <Link href={"/profile"}>
      <Image
        src={avatar}
        alt="avatar"
        width={75}
        height={75}
        className="rounded-full p-0  hover:scale-110 transition-all ease-in-out duration-200"
      />
    </Link>
  );
}
