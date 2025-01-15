import React, { useState } from "react";
import logo from "../../images/logo.png";

export default function SubcriptionDesign() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    { value: "planA", label: "Plan A", price: "₹ 99", period: "Monthly" },
    { value: "planB", label: "Plan B", price: "₹ 319", period: "Quarterly" },
    { value: "planC", label: "Plan C", price: "₹ 529", period: "Half Yearly" },
    { value: "planD", label: "Plan D", price: "₹ 1089", period: "Yearly" },
  ];

  const handlePlanSelect = (planValue) => {
    setSelectedPlan(planValue === selectedPlan ? null : planValue);

    switch (planValue) {
      case "planA":
        console.log("Selected Monthly Plan");
        break;
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

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className="text-[#F8FAF9] text-[20px] font-medium">
              You will be billed after your free trial ends
            </h2>
          </div>
          <div className="grid justify-end">
            <button className="py-3 text-[16px] font-semibold px-4 text-[#94C11F] border-2 rounded-[12px] border-[#94C11F]">
              Next
            </button>
          </div>
        </div>

        {/* Submit button */}
      </div>
    </>
  );
}
