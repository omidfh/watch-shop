import React from "react";
import BreadCrumb from "../_components/products/BreadCrumb";

import ProfileImage from "../_components/profile/ProfileImage";
import { auth } from "../_lib/auth";
import { getUserFromEmail } from "../_lib/data-service";
import { updateUserAction } from "../_lib/actions";
import SubmitButton from "../_components/profile/SubmitButton";

export default async function page() {
  const session = await auth();
  const userData = await getUserFromEmail(session?.user?.email || "");

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
          <form className="flex flex-col gap-10" action={updateUserAction}>
            <ProfileImage image={userData.profileImage} />
            {/* //* name & email */}
            <div className="flex w-full justify-between">
              {/* //*name */}
              <div className="flex flex-col gap-1 w-[40%]">
                <label id="filterLabel" htmlFor="name">
                  Name
                </label>
                <input
                  name="name"
                  defaultValue={
                    userData.name || userData.email.split("@")?.[0] || ""
                  }
                  className="bg-transparent focus:outline-none border-b py-2 placeholder:text-opacity-60 placeholder:tracking-wider"
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
                  defaultValue={userData.email || ""}
                  id="email"
                  name="email"
                  className="bg-transparent focus:outline-none border-b py-2 placeholder:text-opacity-60  placeholder:tracking-wider"
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
                  name="phoneNumber"
                  defaultValue={userData.phoneNumber || ""}
                  id="phoneNumber"
                  className="bg-transparent focus:outline-none border-b py-2 placeholder:text-opacity-60  placeholder:tracking-wider"
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
                  defaultValue={userData.zipCode || ""}
                  id="zipCode"
                  name="zipCode"
                  className="bg-transparent focus:outline-none border-b py-2 placeholder:text-opacity-60  placeholder:tracking-wider"
                  type="text"
                  placeholder="A-Z 0_9"
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
                  defaultValue={userData.address || ""}
                  id="address"
                  name="address"
                  className="bg-transparent focus:outline-none border border-stone-300 placeholder:text-opacity-60  border-opacity-20 placeholder:tracking-wider w-full p-4 rounded-sm"
                />
              </div>
            </div>

            {/* //* Address*/}
            <div className="flex w-full justify-end">
              <SubmitButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
