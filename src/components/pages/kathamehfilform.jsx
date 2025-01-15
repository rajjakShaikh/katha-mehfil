import React from "react";
import logo from "../../images/logo.png";

export default function KathaMehfilForm() {
  return (
    <>
      <div className="grid grid-cols-1">
        <div className="flex justify-start space-x-4 m-4 md:m-12">
          <button className="py-3 text-[16px] font-semibold px-4 text-[#94C11F] border-2 rounded-[12px] border-[#94C11F]">
            Go back
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mb-12">
        <form id="customDropShadow" className="mx-4 md:mx-12 rounded-[36px]">
          <div className="rounded-[36px] ">
            <div className="mb-6 rounded-[36px]">
              <img
                src={logo}
                alt="logo"
                height="60px"
                width="200px"
                className="mx-auto pt-8"
              />
            </div>
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-2 mx-8">
            <div>
              <label
                for="Fullname"
                className="block mb-2 text-md font-normal text-[#F8FAF9] dark:text-white"
              >
                Fullname:
              </label>
              <input
                type="text"
                className="bg-transparent border border-[#F8FAF9] rounded-[12px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                for="Email address"
                className="block mb-2 text-md font-normal text-[#F8FAF9] dark:text-white"
              >
                Email address
              </label>
              <input
                type="text"
                className="bg-transparent border border-[#F8FAF9] rounded-[12px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label
                for="  Mobile number"
                className="block mb-2 text-md font-normal text-[#F8FAF9] dark:text-white"
              >
                Mobile number
              </label>
              <input
                type="text"
                className="bg-transparent border border-[#F8FAF9] rounded-[12px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                for="phone"
                className="block mb-2 text-md font-normal text-[#F8FAF9] dark:text-white"
              >
                Age Group
              </label>
              <input
                type="tel"
                id="phone"
                className="bg-transparent border border-[#F8FAF9] rounded-[12px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                for="Preferred languages"
                className="block mb-2 text-md font-normal text-[#F8FAF9] dark:text-white"
              >
                Preferred languages:
              </label>
              <input
                type="tel"
                className="bg-transparent border border-[#F8FAF9] rounded-[12px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div className="flex items-start mb-6 text mx-8">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded focus:ring-blue-300 bg-transparent dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <label
              for="remember"
              className="ms-2 text-sm font-medium text-white dark:text-gray-300"
            >
              I agree to Katha Mehfil
              <a
                href="#"
                className="text-white hover:underline ml-1 dark:text-blue-500"
              >
                Privacy Policy and Terms of Service
              </a>
              .
            </label>
          </div>
          <div className="grid justify-end mx-12 pb-8">
            <button className="py-3  text-[16px] font-semibold px-4 text-[#94C11F] border-2 rounded-[12px] border-[#94C11F]">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
