import { useState } from "react";
import { navbarItems } from "../lib/static-data";
import { ChevronDown } from "lucide-react";

interface NavbarItemProps {
  item: {
    name: String;
    children?: String[];
  };
}

const NavbarItem = ({ item }: NavbarItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <button className="w-full flex justify-between items-center gap-20 md:gap-2 ">
        <p className="text-black hover:text-green-500 text-lg font-bold whitespace-nowrap md:text-sm md:font-medium flex justify-center items-center">
          {item.name}
        </p>
        {item.children && (
          <ChevronDown
            className={`w-6 h-6 md:w-4 md:h-4 text-gray-500 transition-transform duration-300 ${
              isHovered ? "rotate-180" : ""
            }`}
          />
        )}
      </button>

      {/* Display children only on hover */}
      {isHovered && item.children && (
        <ul className="lg:absolute lg:border top-8 flex flex-col items-start text-lg justify-center gap-2 w-36 mt-4  bg-white">
          {item.children.map((child, index) => (
            <li
              key={index}
              className="p-2 w-full text-black cursor-pointer hover:text-green-500"
            >
              <a href="#">{child}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const NavbarItemList = () => {
  return (
    <ul className="flex flex-col gap-6 items-start justify-start p-2 px-6 md:flex-row w-full">
      {navbarItems.map((item) => (
        <NavbarItem item={item} />
      ))}
    </ul>
  );
};

export { NavbarItem, NavbarItemList };
