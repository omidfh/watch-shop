import React from "react";
import { MdLocalShipping, MdVerified } from "react-icons/md";
import CompanyServiceItem from "./CompanyServiceItem";
import { IoMdGlobe } from "react-icons/io";
import { FaCreditCard, FaHandHoldingHeart } from "react-icons/fa";
import { PiKeyReturnFill } from "react-icons/pi";

export default function CompanyServices() {
  return (
    <div className="flex flex-col gap-14">
      {/* //* FIRST ROW */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 ">
        <CompanyServiceItem
          title={"Free Worldwide Shipping"}
          description={
            "Enjoy free shipping on all orders, no matter where you are in the world."
          }
        >
          <MdLocalShipping className="text-3xl opacity-70" />
        </CompanyServiceItem>
        {/* // */}
        <CompanyServiceItem
          title={"International Warranty"}
          description={
            "This product comes with an international warranty, ensuring support wherever you are."
          }
        >
          <IoMdGlobe className="text-3xl opacity-70" />
        </CompanyServiceItem>
        {/* // */}
        <CompanyServiceItem
          title={"High-Quality Materials"}
          description={
            "Crafted with premium stainless steel and rose gold metal for durability and style."
          }
        >
          <FaHandHoldingHeart className="text-3xl opacity-70" />
        </CompanyServiceItem>
      </div>
      {/* //* SECOND ROW */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 ">
        <CompanyServiceItem
          title={"Hassle-Free Returns"}
          description={
            "Simple and straightforward return process with prepaid return labels."
          }
        >
          <PiKeyReturnFill className="text-3xl opacity-70" />
        </CompanyServiceItem>
        {/* // */}
        <CompanyServiceItem
          title={"Multiple Payment Methods"}
          description={
            "We accept all major credit cards, PayPal, and other secure payment options."
          }
        >
          <FaCreditCard className="text-3xl opacity-70" />
        </CompanyServiceItem>
        {/* // */}
        <CompanyServiceItem
          title={"Verified Reviews"}
          description={
            "Read reviews from verified buyers to see what others are saying about this product."
          }
        >
          <MdVerified className="text-3xl opacity-70" />
        </CompanyServiceItem>
      </div>
    </div>
  );
}
