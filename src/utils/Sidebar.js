import React, { Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import "../components/style.css";
export default function Sidebar({ isOpen, close }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed lg:hidden inset-0 z-10 overflow-y-auto"
        onClose={close}
      >
        <Dialog.Overlay className="fixed inset-0 " />
        <div className="min-h-screen  text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          {/* <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span> */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full  p-6 pt-28 overflow-hidden text-left transition-all transform bg-Base shadow-xl ">
              <div className=" select-none noselect">
                <button className="bg-Primary w-full p-5 text-white">
                  CONTACT ME
                </button>
                <ul className="text-xl  noselect inline-block text-white tracking-widest  ">
                  <li
                    // onClick={() => close()}
                    className="my-7  noselect hover:text-Primary select-none cursor-pointer  transition duration-500 ease-in-out  "
                  >
                    <a href="#div"> HOME </a>
                  </li>
                  <li className="my-7  noselect hover:text-Primary  select-none  cursor-pointer  transition duration-500 ease-in-out">
                    <a href="#div"> ABOUT ME </a>
                  </li>
                  <li className="my-7 noselect hover:text-Primary select-none cursor-pointer   transition duration-500 ease-in-out">
                    <a href="#div"> PRACTICE AREAS </a>
                  </li>
                  <li className="my-7 noselect hover:text-Primary select-none    transition duration-500 ease-in-out">
                    <a href="#div"> PAGES</a>
                  </li>
                </ul>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
