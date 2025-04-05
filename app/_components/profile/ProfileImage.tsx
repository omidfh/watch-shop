"use client";

import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import { uploadUserImageAction } from "@/app/_lib/actions";

const DEFAULT_PROFILE_PIC = "/profile.png";

export default function ProfileImage({
  image,
  userId,
}: {
  image?: string;
  userId?: number | string;
}) {
  const [profileImage, setProfileImage] = useState<string>(
    image || DEFAULT_PROFILE_PIC
  );
  const [isUploading, setIsUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function handleImageClick() {
    document?.getElementById("fileInput")?.click();
  }

  async function handleImageUpload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    setErrorMessage(null);

    // Add file validation
    if (!file.type.startsWith("image/")) {
      setErrorMessage("Please select an image file");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      // 5MB limit
      setErrorMessage("Image size should be less than 5MB");
      return;
    }

    try {
      setIsUploading(true);

      // Generate a unique filename
      const fileExt = file.name.split(".").pop();
      const fileName = `${userId}-${Date.now()}.${fileExt}`;
      const filePath = `profile-images/${fileName}`;

      // Convert the file to base64 string
      const fileBase64 = await convertFileToBase64(file);

      // Pass base64 string instead of File object
      const publicUrl = await uploadUserImageAction(
        filePath,
        fileBase64,
        file.type
      );

      if (publicUrl) {
        setProfileImage(publicUrl);
      } else {
        setErrorMessage("Failed to get image URL");
      }
    } catch (error) {
      console.error("Error in image upload:", error);
      setErrorMessage(error instanceof Error ? error.message : "Upload failed");
    } finally {
      setIsUploading(false);
    }
  }

  // Helper function to convert File to base64
  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <div className="flex flex-col gap-4 items-center lg:items-start md:items-start w-full max-w-xs">
      <div className="flex items-center gap-8">
        <div className="relative">
          <Image
            alt="Profile picture"
            className={`rounded-full ${
              isUploading ? "opacity-50" : "hover:opacity-70"
            } cursor-pointer transition-all ease-in-out duration-200`}
            src={profileImage}
            onClick={!isUploading ? handleImageClick : undefined}
            width={100}
            height={100}
          />
          {isUploading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin h-6 w-6 border-2 border-t-transparent border-blue-500 rounded-full"></div>
            </div>
          )}
        </div>

        <input
          type="file"
          id="fileInput"
          className="hidden"
          accept="image/*"
          onChange={handleImageUpload}
          disabled={isUploading}
        />
      </div>

      {errorMessage && (
        <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
      )}

      {isUploading ? (
        <p className="text-sm text-gray-600 text-center md:text-start lg-text-start">
          Uploading...
        </p>
      ) : (
        <p className="text-sm text-gray-600 text-center md:text-start lg-text-start">
          Click on the image to upload a new profile picture
        </p>
      )}
    </div>
  );
}
