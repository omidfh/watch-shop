"use client";

import Image from "next/image";
import React from "react";

import profilePic from "@/public/profile.png";

export default function ProfileImage() {
  function handleImageClick() {
    document?.getElementById("fileInput")?.click();
  }
  return (
    <div className="flex gap-4 items-center w-[40%] justify-start">
      <div className="flex items-center gap-8">
        <Image
          alt="profilePicture"
          className="rounded-full hover:opacity-50 cursor-pointer transition-all ease-in-out duration-200"
          src={profilePic}
          onClick={handleImageClick}
          width={100}
        />

        <input
          type="file"
          id="fileInput"
          className="bg-transparent file-selectorbutton"
          accept="image/*"
        />
      </div>
    </div>
  );
}
