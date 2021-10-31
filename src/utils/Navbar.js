import React from "react";
import { BsHandbag } from "react-icons/bs";
export default function Navbar() {
  return (
    <div className="bg-Base mx-4">
      <div className="flex justify-between border-b border-opacity-10 py-4">
        <div className="flex items-center  ">
          <img  className="w-44" src="/assets/navlogo.svg" alt="logo" />
        </div>
        <div className="flex items-center">
          <BsHandbag size={28} color="white" />
          <button className="bg-Primary ml-4 h-12 w-12  flex items-center justify-center rounded-full">
            <div>
              <div className="w-7 h-0.5 bg-white"></div>
              <div className="w-7 h-0.5 bg-white my-1.5"></div>
              <div className="w-7 h-0.5 bg-white"></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
