import React from "react";
import { FaBox, FaShoppingCart } from "react-icons/fa";
import { PiShoppingCartDuotone } from "react-icons/pi";

const CartSpinner = ({ size = "md" }) => {
  // Size and styling variations
  const sizeVariants: Record<string, string> = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return (
    <div className="relative flex items-center justify-center py-6 px-8 h-26">
      <div className="absolute inset-0 rounded-md"></div>

      <div
        className={`
        ${sizeVariants[size]} 
        relative z-10 
        
        
        flex items-center 
        justify-center 
       
        
        group 
        transition-all 
        duration-300 
        transform 
        hover:scale-110
      `}
      >
        <div className="relative ">
          <PiShoppingCartDuotone
            className="text-stone-300 animate-bounce"
            size="80%"
          />
          {/* <FaBox
            className="
              absolute 
              top-1/2 
              left-1/2 
              transform 
              -translate-x-1/2 
              -translate-y-1/2 
              text-stone-300-500 
              animate-spin-slow
              opacity-50
            "
            size="40%"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default CartSpinner;
