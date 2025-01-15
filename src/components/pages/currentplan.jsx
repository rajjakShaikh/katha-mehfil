import React, { useState } from "react";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";

function CurrentPlan() {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    { value: "planB", label: "Plan B", price: "₹ 319", period: "Quarterly" },
    {
      value: "planC",
      label: "Plan C",
      price: "₹ 529",
      period: "Half Yearly",
    },
    { value: "planD", label: "Plan D", price: "₹ 1089", period: "Yearly" },
  ];

  const handlePlanSelect = (planValue) => {
    setSelectedPlan(planValue === selectedPlan ? null : planValue);

    switch (planValue) {
      case "planB":
        console.log("Selected Quarterly Plan");
        break;
      case "planC":
        console.log("Selected Half Yearly Plan");
        break;
      case "planD":
        console.log("Selected Yearly Plan");
        break;
      default:
        console.log("No plan selected");
    }
  };

  return (
    <>
      {/* header start */}
      <div>
        <div
          id="customDropShadow"
          className="grid grid-cols-1 md:grid-cols-2 items-center border-2 mx-3 sm:mx-12 border-[#2D2D2D] mt-3 sm:mt-12 rounded-[24px]"
        >
          {/* Left Side: Logo */}
          <div className="rounded-[24px]">
            <img
              src={logo}
              alt="logo"
              height="60px"
              width="200px"
              className="mx-12 py-6 md:ml-[48px] ml-[83px]"
            />
          </div>

          {/* Right Side: Buttons */}
          <div className="flex justify-center md:justify-end space-x-4 mx-12 py-3">
            <button
              className="py-3 font-semibold px-4 text-[#94C11F] border-2 rounded-[12px] border-[#94C11F]"
              onClick={() => navigate("/dashboard")}
            >
              Go home
            </button>
          </div>
        </div>
      </div>

      <div
        id="customDropShadow"
        className="grid grid-cols-1 mt-12 px-6 w-64 rounded-[24px] mx-12 border-[#2D2D2D]"
      >
        <div>
          <p className="text-[#F8FAF9] font-medium py-6 text-[20px]">
            Current Plan
          </p>
        </div>
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
          </ul>
        </div>

        <button className="w-full py-3 my-6 font-semibold px-4 text-[#94C11F] border-2 rounded-[12px] border-[#94C11F]">
          Cancel Subscription
        </button>
      </div>

      {/* 2nd tab */}
      <div id="customDropShadow" className="p-6 mx-12 rounded-[24px] mt-6">
        <div>
          <p className="text-[#F8FAF9] font-medium pb-6 text-[20px]">
            Change your plan
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.value}
              className={`border rounded-[12px] p-4 font-normal ${
                plan.value === selectedPlan
                  ? "text-[#94C11F] border-[#94C11F]"
                  : "text-white border-[#F8FAF9]"
              }`}
            >
              <ul>
                <li>{plan.period}</li>
                <div className="flex justify-between">
                  <li className="font-semibold text-[24px]">{plan.price}</li>
                  <li>
                    <input
                      type="checkbox"
                      value={plan.value}
                      checked={selectedPlan === plan.value}
                      className="w-5 h-5 border border-gray-300 rounded-2xl focus:ring-blue-300 bg-transparent dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      onChange={() => handlePlanSelect(plan.value)}
                    />
                  </li>
                </div>
                <li className="text-[14px]">Cancel anytime</li>
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* footer start */}
      <div
        id="customDropShadow"
        className="grid  mb-12 grid-cols-1 sm:grid-cols-3 place-content-center items-center border-2 mx-3 sm:mx-12 border-[#2D2D2D] mt-3 sm:mt-12 rounded-[24px]"
      >
        {/* Left Side: Logo */}
        <div className="rounded-[24px]">
          <img
            src={logo}
            alt="logo"
            height="60px"
            width="200px"
            className="mx-12 py-6 md:ml-[48px] ml-[83px]"
          />
        </div>

        {/* Right Side: Buttons */}
        <div className="grid justify-center text-center">
          <h2 className="text-[#F8FAF9] text-[20px] font-semibold">
            © 2024 Katha Mehfil
          </h2>
        </div>
        <div className="grid rounded-[24px] justify-center sm:justify-end">
          <ul className="text-[#F8FAF9] text-left px-12 text-[16px] font-semibold">
            <li>Privacy Policy</li>
            <li>Terms of Services</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default CurrentPlan;
