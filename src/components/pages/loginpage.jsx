import React from "react";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="grid grid-cols-1">
        <div className="flex justify-start space-x-4 m-4 md:m-12">
          <button
            className="py-3 text-[16px] font-semibold px-4 text-[#94C11F] border-2 rounded-[12px] border-[#94C11F]"
            onClick={() => navigate("/dashboard")}
          >
            Go back
          </button>
        </div>
      </div>

      <div
        id="customDropShadow"
        className="flex flex-col rounded-[36px] items-center place-content-center justify-center w-fit  md:mx-auto px-6 py-12"
      >
        <div>
          <p className="text-[20px] text-[#F8FAF9] font-medium mb-8">
            Enter your email to login
          </p>
        </div>

        {/* Logo */}
        <div className="mb-6">
          <img
            src={logo}
            alt="logo"
            height="60px"
            width="200px"
            className="mx-auto"
          />
        </div>

        {/* Email label and input */}
        <div className="w-[516px] text-start">
          <label
            htmlFor="email"
            className="block text-[16px] text-[#F8FAF9] font-medium text-lg mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            placeholder="Please enter your email"
            name="email"
            id="email"
            className="w-full rounded-[12px] text-[#F8FAF9] px-4 py-2 border bg-transparent border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#94C11F] focus:border-transparent"
          />
        </div>

        {/* Submit button */}
        <div className="w-full  mt-6">
          <button className="w-full py-3 font-semibold px-4 text-[#94C11F] border-2 rounded-[12px] border-[#94C11F]">
            Next
          </button>
        </div>
      </div>
    </>
  );
}
