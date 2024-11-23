import React, { useEffect, useState } from "react";
import heroImg from "../assets/images/heroLogo1.png";
import bigBooky1 from "../assets/booky/booky1.jpg";
import bigBooky2 from "../assets/booky/booky2.jpg";
import bigBooky3 from "../assets/booky/booky3.jpg";
import bigBooky4 from "../assets/booky/booky4.jpg";
import bigBooky5 from "../assets/booky/booky5.jpg";
import bigBooky6 from "../assets/booky/booky6.jpg";
import bigBooky7 from "../assets/booky/booky7.jpg";
import { MdContactPhone } from "react-icons/md";
import { FaInstagramSquare, FaTelegram } from "react-icons/fa";
import ConfettiExplosion from "react-confetti-explosion";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isExploding, setIsExploding] = useState(false);

  const slideImages = [
    bigBooky1,
    bigBooky2,
    bigBooky3,
    bigBooky4,
    bigBooky5,
    bigBooky6,
    bigBooky7,
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slideImages.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-slate-700 to-orange-950 via-gray-900 text-white-400 ">
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full font-palanquin">
          <div className="md:w-1/2 flex flex-col items-center justify-center md:mt-0 min-h-screen relative">
            <div className="relative">
              {/* Image with hover effect */}
              <img
                src={heroImg}
                alt="hero/images"
                className="w-48 h-48 object-cover hover:rotate-180 hover:scale-105 duration-500 relative z-10"
                onMouseEnter={() => setIsExploding(true)}
                onMouseLeave={() => setIsExploding(false)}
              />

              {/* Confetti explosion effect */}
              {isExploding && (
                <div className="absolute inset-0 flex justify-center items-center z-0">
                  <ConfettiExplosion
                    force={0.6}
                    duration={4000} // Adjust the duration if needed
                    particleCount={150}
                    width={300}
                  />
                </div>
              )}
            </div>

            {/* Hero content */}
            <p className="text-3xl font-semibold font-kili text-gray-400 px-10">
              Play with
            </p>
            <h1 className="text-4xl sm:text-6xl font-semibold ml-8 font-kili text-blue-600 hover:text-yellow-600 ">
              GURUJI
              <span className="text-red-800 hover:text-blue-600"> BOOK</span>
            </h1>
            <p className=" font-palanquin text-gray-400 text-lg leading-8 mt-2 mb-2 sm:max-w-sm text-center">
              Your Trusted Destination for Fun and Fair Play!
            </p>
            <p className=" font-montserrat text-slate-gray text-lg leading-8 mb-8 sm:max-w-sm text-center">
              Enjoy a secure, seamless experience with every visit—no worries,
              just winning moments!
            </p>
          </div>

          <div className="md:w-1/2 flex flex-col items-center justify-center md:mt-0">
            <div className="relative">
              <img
                src={slideImages[currentSlide]}
                alt="carousel-image"
                className="w-72 h-72 rounded-lg object-cover shadow-lg shadow-gray-400"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white-400 text-center p-2">
                {currentSlide + 1} / {slideImages.length}
              </div>
            </div>

            {/* Links section */}
            <div className="flex flex-wrap justify-center gap-2 items-center px-2 mb-4 mt-4 w-full">
              <a
                href="https://wa.link/m8yvsb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-gradient-to-br from-green-500 to-green-700 via-green-900 text-white w-28 sm:w-32 md:w-36 lg:w-40 px-2 py-2 rounded-l-xl sm:rounded-t-xl md:rounded-r-xl lg:rounded-b-xl xl:rounded-none text-center shadow-md hover:shadow-green-800 transition-all hover:scale-105 duration-300 focus:outline-none"
              >
                <MdContactPhone
                  className="mr-2 text-slate-900 hover:rotate-180 scale-105 duration-300 hover:text-yellow-400"
                  size={30}
                />{" "}
                Get Id
              </a>
              <a
                href="https://t.me/gurujibook2016"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-gradient-to-br from-cyan-600 to-cyan-700 via-blue-600 text-white w-28 sm:w-32 md:w-36 lg:w-40 px-2 py-2 rounded-none sm:rounded-r-xl md:rounded-l-xl lg:rounded-t-xl xl:rounded-b-xl text-center shadow-md hover:shadow-blue-900 transition-all hover:scale-105 duration-300 focus:outline-none"
              >
                <FaTelegram
                  className="mr-2 text-slate-900 hover:rotate-180 scale-105 duration-300 hover:text-white-400"
                  size={30}
                />{" "}
                Telegram
              </a>
              <a
                href="https://www.instagram.com/guruji_book_offcl?igsh=ZjJxcnNhc2JlZGZ4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-gradient-to-b from-rose-900 to-red-800 via-rose-800 text-white w-28 sm:w-32 md:w-36 lg:w-40 px-2 py-2 rounded-r-xl sm:rounded-l-xl md:rounded-t-xl lg:rounded-none xl:rounded-b-xl text-center shadow-md hover:shadow-rose-900 transition-all hover:scale-105 duration-300 focus:outline-none"
              >
                <FaInstagramSquare
                  className="mr-2 text-slate-900 hover:rotate-180 scale-105 duration-300 hover:text-white-400"
                  size={30}
                />{" "}
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
