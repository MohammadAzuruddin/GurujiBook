import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
const Nav = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about Us",
    },
    {
      id: 4,
      link: "Services",
    },
    {
      id: 5,
      link: "Contact Us",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black ">
      <div>
        <h1 className=" text-2xl font-extrabold ml-2 font-kili hover:scale-105 duration-500 text-blue-600 hover:text-yellow-600">
          GURUJI
        </h1>
        <h2 className=" text-2xl font-extrabold ml-2 font-kili hover:scale-105 duration-500 text-red-600 hover:text-yellow-600 text-center">
          BOOK
        </h2>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4  cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-500"
          >
            <Link
              className={` bg-red-700 hover:bg-blue-900 shadow-md shadow-blue-500 text-gray-300 px-2 py-2 rounded-lg`}
              to={link}
              smooth
              duration={500}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden "
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 ">
          {links.map(({ id, link }) => (
            <li key={id}>
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Nav;
