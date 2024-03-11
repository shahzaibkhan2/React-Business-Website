import React, { useState } from "react";
import { businessLogo } from "../assets";
import { navLinks } from "../consts";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img
        className="w-[89px] h-[90px] cursor-pointer rounded"
        src={businessLogo}
        alt="logo"
      />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            className={`font-poppins font-normal cursor-pointer text-[16.99px] text-white hover:text-blue-300 ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
            key={nav.id}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <div
          className="text-white w-11 h-8 text-[40px]"
          onClick={() => setToggle((previous) => !previous)}
        >
          {toggle ? <IoMdClose /> : <RiMenu3Fill />}
        </div>

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[139.99px] rounded-xl bottomUp`}
        >
          <ul className="list-none flex justify-end items-center flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                className={`font-poppins font-normal cursor-pointer text-[15.99px] text-white ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-10"
                }`}
                key={nav.id}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
