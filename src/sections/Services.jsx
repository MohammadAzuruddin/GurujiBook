import React from "react";
import { additionalInfo, services } from "../constants";

const Services = () => {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-700 to-orange-950 via-gray-900 text-slate-800 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center lg:items-center justify-center mt-4">
            <h1 className="text-4xl sm:text-6xl font-bold text-center ml-8">
              <span className="text-blue-600 hover:text-yellow-600">Why </span>
              <span className="text-white-400">Guruji </span>
              <span className="text-red-800 hover:text-yellow-600">Book</span>
              <span className="text-white-400">?</span>
            </h1>
            <h6 className="font-montserrat text-gray-400 text-lg leading-8 mb-8 sm:max-w-sm text-center">
              we are committed to providing a safe and secure environment
            </h6>
          </div>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white-400 p-4 sm:p-6 rounded-lg shadow-lg shadow-blue-500 flex flex-col items-center text-center"
              >
                <div className="text-coral-red text-3xl sm:text-4xl mb-3 sm:mb-4">
                  {service.icon}
                </div>
                <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-700 text-sm sm:text-base">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Insights Section */}
      <section className=" py-12  sm:py-16 bg-gradient-to-br from-slate-700 to-orange-950 via-gray-900 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center lg:items-center justify-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-center ml-8">
              <span className="text-blue-600 hover:text-yellow-600">
                Additional{" "}
              </span>
              <span className="text-red-800 hover:text-yellow-600">
                Insights
              </span>
            </h1>
          </div>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 mt-4 sm:mt-6 ">
            {additionalInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white-400 p-4 sm:p-6 rounded-lg shadow-xl shadow-slate-600 flex flex-col items-center text-center hover:rotate-6 scale-105 duration-300 hover:shadow-blue-500"
              >
                <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                  {info.title}
                </h2>
                <p className="text-gray-700 text-sm sm:text-base">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
