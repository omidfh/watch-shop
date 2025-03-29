import React from "react";
import { FaUser, FaPencilAlt } from "react-icons/fa";

const FullPageProfileLoader = () => {
  return (
    // <div className="flex justify-center items-center w-full">
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-50/10 backdrop-blur-sm ">
      <div className="text-center flex flex-col items-center justify-center bg-stone-300 bg-opacity-70 p-4 rounded-xl">
        <FaUser className="text-gray-600 mb-6" size={100} />

        <div className="relative h-24 w-64">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-1 bg-gray-300 rounded-full"></div>
          </div>

          <div className="relative">
            <FaPencilAlt
              className="
              text-gray-700 
              absolute 
              animate-write
              origin-bottom-left
              "
              size={50}
            />
          </div>
        </div>

        <p className="mt-6 text-xl text-gray-600">
          Updating Profile Information
        </p>
      </div>
    </div>
    // </div>
  );
};

export default FullPageProfileLoader;
