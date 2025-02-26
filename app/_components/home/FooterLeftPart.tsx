import { IoIosCall, IoMdMail } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.jpg";

export default function FooterLeftPart() {
  return (
    <div className="flex flex-col gap-6 w-[35%]">
      <div>
        {" "}
        <Image width={"50"} height={"50"} src={logo} alt="logo" quality={100} />
      </div>
      <div className="flex flex-col justify-evenly gap-3 text-sm tracking-wider opacity-85">
        <div className="flex items-center gap-2 ">
          <IoIosCall className="text-stone-300" />
          <Link href="tel:+11233456789" className="text-stone-300 ">
            +1 123-345-67 89
          </Link>{" "}
        </div>
        <hr className="border-opacity-50 border-stone-300" />
        <div className="flex items-center gap-2 text-sm ">
          <IoMdMail className="text-stone-300" />
          <Link href="mailto:Example@Example.com" className="text-stone-300">
            Example@Example.com
          </Link>{" "}
        </div>
        <hr className="border-opacity-50 border-stone-300" />
        <div className="flex items-center gap-2 text-sm ">
          <TbWorld className="text-stone-300" />
          <Link
            href="https://www.example.com"
            className="text-stone-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.example.com
          </Link>
        </div>
      </div>
    </div>
  );
}
