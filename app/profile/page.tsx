import React from "react";
import BreadCrumb from "../_components/products/BreadCrumb";

import ProfileImage from "../_components/profile/ProfileImage";

export default function page() {
  return (
    <div className="flex flex-col w-full justify-between items-center gap-24">
      <BreadCrumb />

      <div className="w-full max-w-[65%] flex justify-center">
        <div className="flex flex-col w-full gap-10 bg-stone-100 bg-opacity-10 p-8">
          {/* //* PROFILE HEADER */}
          <div className="w-full flex justify-start">
            <h3 className="text-3xl uppercase tracking-wider">
              Profile Information
            </h3>
          </div>

          {/* //* PROFILE INPUTS */}
          <form className="flex flex-col gap-10">
            <ProfileImage />
            {/* //* name & email */}
            <div className="flex w-full justify-between">
              {/* //*name */}
              <div className="flex flex-col gap-1 w-[40%]">
                <label id="filterLabel" htmlFor="name">
                  Name
                </label>
                <input
                  className="bg-transparent focus:outline-none border-b py-2 placeholder:tracking-wider"
                  type="text"
                  placeholder="ex John Doe"
                />
              </div>

              {/* //* email */}
              <div className="flex flex-col gap-1 w-[40%]">
                <label id="filterLabel" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  className="bg-transparent focus:outline-none border-b py-2 placeholder:tracking-wider"
                  type="email"
                  placeholder="example@example.com"
                />
              </div>
            </div>
            {/* //* phone number and zip Code*/}
            <div className="flex w-full justify-between">
              {/* //*phone number */}
              <div className="flex flex-col gap-1 w-[40%]">
                <label id="filterLabel" htmlFor="phoneNumber">
                  Phone Number
                </label>
                <input
                  id="phoneNumber"
                  className="bg-transparent focus:outline-none border-b py-2 placeholder:tracking-wider"
                  type="number"
                  placeholder="+0-123-456 78 90"
                />
              </div>

              {/* //* zip Code */}
              <div className="flex flex-col gap-1 w-[40%]">
                <label id="filterLabel" htmlFor="zipCode">
                  Zip Code
                </label>
                <input
                  id="zipCode"
                  name="zipCode"
                  className="bg-transparent focus:outline-none border-b py-2 placeholder:tracking-wider"
                  type="number"
                  placeholder="0123456789"
                />
              </div>
            </div>

            {/* //* Address*/}
            <div className="flex w-full">
              <div className="flex flex-col gap-1 w-full">
                <label id="filterLabel" htmlFor="address">
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  minLength={15}
                  className="bg-transparent focus:outline-none border border-stone-300 border-opacity-20 placeholder:tracking-wider w-full p-4 rounded-sm"
                  //   placeholder="0123456789"
                />
              </div>
            </div>

            {/* //* Address*/}
            <div className="flex w-full justify-end">
              <button
                type="submit"
                className="text-lg bg-yellow-100 text-center bg-opacity-90 py-2 w-28 text-black hover:text-white hover:bg-opacity-20 hover:transition-all ease-in-out duration-500"
              >
                Save & Exit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
