import { X } from "lucide-react";
import React, { useState } from "react";
import { NavbarItemList } from "./NavbarItem";

const MobileNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <div className="w-full bg-white absolute top-0 z-50 p-6 shadow-md">
        {/* <ThemeButton /> */}
        <nav className="w-full flex justify-between items-center">
          <div className="flex justify-center items-center gap-3">
            <div
              className="lg:hidden cursor-pointer flex flex-col justify-center items-center"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <div className="block mb-2 h-0.5 w-8 bg-gray-600 dark:bg-secondary"></div>
              <div className="block mb-2 h-0.5 w-8 bg-gray-600 dark:bg-secondary"></div>
              <div className="block h-0.5 w-8 bg-gray-600 dark:bg-secondary"></div>
            </div>

            <img
              src="https://printify.com/pfh/media/logo-old-B5JY5YNQ.svg"
              alt="Logo"
              className="h-8"
            />
          </div>

          <div className="flex justify-center items-center">
            <button className="inline-flex items-center text-black border py-1 px-3 mr-3 focus:outline-none hover:text-green-500 rounded text-base md:mt-0">
              Log in
            </button>
            <button className="inline-flex items-center text-white font-semibold bg-green-500 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base md:mt-0">
              Sign up
            </button>
          </div>
        </nav>
      </div>
      {isNavOpen && (
        <div
          className={`relative z-50 w-66 bg-white h-full inset-0 flex flex-col items-center shadow-xl justify-center ${isNavOpen ? "animate-slideInLeft" : ""}`}
        >
          <div className="flex justify-end items-center gap-10 w-full border-b">
            <p className="text-black text-2xl font-bold">Menu</p>
            <button
              className="py-8 px-6 text-gray-500 z-50"
              onClick={() => setIsNavOpen(false)}
            >
              <X />
            </button>
          </div>

          <div className="h-screen">
            <NavbarItemList />
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
