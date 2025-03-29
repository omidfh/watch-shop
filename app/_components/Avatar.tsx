import Image from "next/image";
import React from "react";

import avatar from "@/public/profile.png";
import Link from "next/link";

export default function Avatar({ pic }: { pic: string }) {
  return (
    <Link href={"/profile"}>
      <Image
        src={pic || avatar}
        alt="avatar"
        width={70}
        height={70}
        className="rounded-full p-0  hover:scale-110 transition-all ease-in-out duration-200"
      />
    </Link>
  );
}
