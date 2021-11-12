import React, { useState } from "react";
import { BsHandbag } from "react-icons/bs";
import Sidebar from "./Sidebar";
import "../components/style.css";
import { gsap } from "gsap/all";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const tl = gsap.timeline();

  const handleSidebarClose = () => {
    setIsOpen(false);
    const bar1 = document.querySelector(".nav-bar1");
    const bar2 = document.querySelector(".nav-bar2");
    const bar3 = document.querySelector(".nav-bar3");
    tl.to(
      bar1,
      {
        rotation: "0",
        transformOrigin: "50% 50% -400px",
      },
      0
    )
      .to(
        bar2,
        {
          rotation: "0",
          transformOrigin: "50% 50% -400px",
        },
        0
      )
      .to(
        bar3,
        {
          rotation: "0",
          transformOrigin: "50% 50% -400px",
        },
        0
      )
      .to(bar1, { yPercent: "" }, 0.3)
      .to(bar3, { yPercent: "" }, 0.3);
  };

  // useEffect(() => {
  //   const tl = gsap.timeline();

  // },[]);

  const handleClick = () => {
    const bar1 = document.querySelector(".nav-bar1");
    const bar2 = document.querySelector(".nav-bar2");
    const bar3 = document.querySelector(".nav-bar3");
    tl.to(bar1, { yPercent: "400" })
      .to(bar3, { yPercent: "-400" }, 0)
      .to(
        bar1,
        {
          rotation: 45,
          transformOrigin: "50% 50% -400px",
        },
        0.3
      )
      .to(
        bar2,
        {
          rotation: 45,
          transformOrigin: "50% 50% -400px",
        },
        0.3
      )
      .to(
        bar3,
        {
          rotation: 135,
          transformOrigin: "50% 50% -400px",
        },
        0.3
      );

    setIsOpen(true);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} close={handleSidebarClose} />
      <div className="bg-Base mx-4">
        <div className="flex xl:w-1/10 xl:m-auto xl:py-5 justify-between border-b border-opacity-10 py-4">
          <div
            className={`flex items-center ${isOpen ? "relative z-20" : ""} `}
          >
            <img className="w-44 " src="/assets/navlogo.svg" alt="logo" />
          </div>
          <div className="flex items-center cursor-pointer">
            <ul className=" select-none text base hidden xl:flex tracking-wider text-white ">
              <li className="mr-8 hover:text-Primary select-none transition duration-500 ease-in-out">
                HOME
              </li>
              <li className="mr-8 hover:text-Primary select-none transition duration-500 ease-in-out">
                ABOUT ME
              </li>
              <li className="mr-8 hover:text-Primary select-none transition duration-500 ease-in-out">
                PRACTICE AREAS
              </li>
              <li className="mr-8 hover:text-Primary select-none transition duration-500 ease-in-out">
                PAGES
              </li>
            </ul>
            <BsHandbag
              size={28}
              className="select-none noselect"
              color="white"
            />{" "}
            <button
              onClick={() => handleClick()}
              className={`bg-Primary lg:hidden ml-4 h-12 w-12  flex items-center justify-center rounded-full ${
                isOpen
                  ? "relative z-20 noselect  select-none "
                  : "noselect  select-none "
              }`}
            >
              <div className="noselect overflow-hidden">
                <div className="w-6 noselect h-0.5 bg-white nav-bar1"></div>
                <div className="w-6 noselect h-0.5 bg-white my-1.5 nav-bar2"></div>
                <div className="w-6 noselect h-0.5 bg-white nav-bar3"></div>
              </div>
            </button>
            <button className="text-base transition duration-500 ease-in-out transform hover:scale-95  hidden lg:block md:py-3.5 md:ml-4 px-8 lg:bg-Primary text-white">
              CONTACT ME
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
