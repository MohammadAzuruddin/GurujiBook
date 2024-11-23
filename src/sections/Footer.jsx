import React from "react";
import { footerAPI } from "../constants";
import { FaYoutube, FaWhatsapp, FaInstagram,FaTelegram } from "react-icons/fa"; // Import icons

const Footer = () => {
  const { titles, links } = footerAPI;

  return (
    <>
      <footer className="bg-slate-950 pt-7 pb-5">
        <div className="text-slate-200">
          {/* Footer Titles and Links */}
          <div className="grid items-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-5">
            {titles.map((val, i) => (
              <div key={i} className="grid items-center justify-center hover:text-red-500">
                <h1 className="text-lg lg:text-base md:text-sm uppercase font-semibold">
                  {val.title}
                </h1>
              </div>
            ))}
            {links.map((list, i) => (
              <ul key={i} className="grid items-center justify-center gap-1 ">
                {list.map((link, i) => (
                  <li key={i} className="text-sm sm:text-xs hover:text-blue-500">
                    {link.link}
                  </li>
                ))}
              </ul>
            ))}
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-5 mt-5">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
              <FaYoutube size={24} />
            </a>
            <a href="https://wa.link/m8yvsb" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
              <FaWhatsapp size={24} />
            </a>
            <a href="https://www.instagram.com/guruji_book_offcl?igsh=ZjJxcnNhc2JlZGZ4" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram size={24} />
            </a>
            <a href="https://t.me/gurujibook2016" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaTelegram size={24} />
            </a>
          </div>

          {/* Copyright Information */}
          <div className="mt-5 text-center">
            <p className="text-sm md:text-center">
              Copyright<sup className="text-base font-bold">&copy;</sup>All
              Reserved Rights 2023-24
              <span className="font-semibold"> AJSTACK DEVELOPERS</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
