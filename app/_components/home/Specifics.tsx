import React from "react";
import { FaHeadphones } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import SingleSpecific from "./SingleSpecific";
import { IoBag } from "react-icons/io5";

export default function Specifics() {
  return (
    <div className="flex justify-between  py-28">
      <SingleSpecific
        title={"Authentic Timepieces Guaranteed"}
        description={
          "Ipsum pellentesque urna ac fringilla montes sit diam malesuada ipsum."
        }
        link="#"
      >
        <IoIosTimer className="text-xl text-yellow-400 opacity-80" />
      </SingleSpecific>

      <SingleSpecific
        title={"Seamless Shopping Experience"}
        description={
          "Ipsum pellentesque urna ac fringilla montes sit diam malesuada ipsum."
        }
        link="#"
      >
        <IoBag className="text-xl text-yellow-400 opacity-80" />
      </SingleSpecific>

      <SingleSpecific
        title={"Customer-Centric Support"}
        description={
          "Ipsum pellentesque urna ac fringilla montes sit diam malesuada ipsum."
        }
        link="#"
      >
        <FaHeadphones className="text-xl text-yellow-400 opacity-80" />
      </SingleSpecific>
    </div>
  );
}
