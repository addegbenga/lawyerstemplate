import React from "react";
import { BsHandbag } from "react-icons/bs";
export default function Navbar() {
  return (
    <div className="bg-Base mx-4">
      <div className="flex xl:w-1/10 xl:m-auto xl:py-5 justify-between border-b border-opacity-10 py-4">
        <div className="flex items-center  ">
          <img className="w-44" src="/assets/navlogo.svg" alt="logo" />
        </div>
        <div className="flex items-center">
          <ul className=" text base hidden xl:flex tracking-wider text-white ">
            <li className="mr-8">HOME</li>
            <li className="mr-8">ABOUT ME</li>
            <li className="mr-8">PRACTICE AREAS</li>
            <li className="mr-8">PAGES</li>
          </ul>
          <BsHandbag size={28} color="white" />
          <button className="bg-Primary lg:hidden ml-4 h-12 w-12  flex items-center justify-center rounded-full">
            <div>
              <div className="w-7 h-0.5 bg-white"></div>
              <div className="w-7 h-0.5 bg-white my-1.5"></div>
              <div className="w-7 h-0.5 bg-white"></div>
            </div>
          </button>
          <button className="text-base hidden lg:block md:py-3.5 md:ml-4 px-8 lg:bg-Primary text-white">
            CONTACT ME
          </button>
        </div>
      </div>
    </div>
  );
}
