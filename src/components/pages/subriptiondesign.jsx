import React from "react";
import logo from "../../images/logo.png";

export default function SubcriptionDesign() {
  return (
    <>
      <div className="grid grid-cols-1">
        <div className="flex justify-start space-x-4 m-12">
          <button className="py-3 text-[16px] font-semibold px-4 text-[#94C11F] border-2 rounded-[12px] border-[#94C11F]">
            Go back
          </button>
        </div>
      </div>

      <div
        id="customDropShadow"
        className="flex mb-8 flex-col rounded-[36px] mx-5 md:mx-12 p-8"
      >
        {/* Logo */}
        <div className="mb-6">
          <img
            src={logo}
            alt="logo"
            height="60px"
            width="200px"
            className="mx-auto py-6"
          />
        </div>
        <div>
          <h2 className="text-[#F8FAF9] font-medium text-[20px]">
            Choose the plan, that is right for you
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12 ">
          <div className="border rounded-[12px] p-4 font-normal text-[#94C11F] border-[#94C11F]">
            <ul className="">
              <li>Monthly</li>
              <div className="flex justify-between">
                <li className="font-semibold text-[24px]">₹ 99</li>
                <li>
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-5 h-5 border border-gray-300 rounded-2xl focus:ring-blue-300 bg-transparent dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required
                  />
                </li>
              </div>
              <li className=" text-[14px]">Cancel anytime</li>
            </ul>
          </div>
          <div className="border rounded-[12px] p-4   font-normal text-white border-[#F8FAF9]">
            <ul className="">
              <li>Quarterly</li>
              <div className="flex justify-between">
                <li className="font-semibold text-[24px]">₹ 319</li>
                <li>
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-5 h-5  border border-gray-300 rounded-2xl focus:ring-blue-300 bg-transparent dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required
                  />
                </li>
              </div>
              <li className="text-[14px]">Cancel anytime</li>
            </ul>
          </div>
          <div className="border rounded-[12px] p-4   font-normal text-white border-[#F8FAF9]">
            <ul className="">
              <li>Half Yearly</li>
              <div className="flex justify-between ">
                <li className="font-semibold text-[24px]">₹ 529</li>
                <li>
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-5 h-5  border border-gray-300 rounded-2xl focus:ring-blue-300 bg-transparent dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required
                  />
                </li>
              </div>
              <li className="text-[14px]">Cancel anytime</li>
            </ul>
          </div>
          <div className="border rounded-[12px] p-4   font-normal text-white border-[#F8FAF9]">
            <ul className="">
              <li>Yearly</li>
              <div className="flex justify-between ">
                <li className="font-semibold text-[24px]">₹ 1089</li>
                <li>
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-5 h-5  border border-gray-300 rounded-2xl focus:ring-blue-300 bg-transparent dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required
                  />
                </li>
              </div>
              <li className="text-[14px]">Cancel anytime</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-[#F8FAF9] font-medium text-[20px]">
            You will be billed after your free trial ends
          </h2>
        </div>

        {/* Email label and input */}
        {/* <div className="w-[516px] text-start">
          <label
            htmlFor="email"
            className="block text-[16px] text-[#F8FAF9] font-medium text-lg mb-2"
          >
            Enter OTP to verify email:
          </label>
          <input
            type="password"
            placeholder="Please enter your password"
            name="password"
            id="email"
            className="w-full font-normal text-[16px] rounded-[12px] text-[#F8FAF9] px-4 py-2 border bg-transparent border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#94C11F] focus:border-transparent"
          />
        </div> */}

        {/* Submit button */}
        <div className="w-full mt-12 ">
          <button className="w-full py-3 font-semibold px-4 text-[#94C11F] border-2 rounded-[12px] border-[#94C11F]">
            Next
          </button>
        </div>
      </div>
    </>
  );
}
