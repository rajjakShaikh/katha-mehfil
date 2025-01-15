import React, { useState } from "react";
import logo from "../../images/logo.png";
import homeImg from "../../images/Home Sceen.png";
import home2img from "../../images/homescreen2.png";
import home3img from "../../images/homescreen3.png";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(null);
  const navigate = useNavigate();

  const handleAccordionClick = (id) => {
    setIsOpen(isOpen === id ? null : id);
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
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
            <button className="py-3  font-semibold px-4 text-[#94C11F] border-2 rounded-[12px] border-[#94C11F]">
              Login
            </button>
          </div>
        </div>
      </div>
      {/* main heading  start */}

      <div
        id="customDropShadow"
        className="grid grid-cols-1 place-items-center gap-4 my-4 sm:my-12 mx-4 sm:mx-12 border  border-[#2D2D2D] rounded-3xl"
      >
        {/* Heading above images */}
        <div className="col-span-1 py-12 rounded-3xl">
          <h3 className="text-[#F8FAF9]  font-semibold text-center text-[16px] sm:text-[20px] md:text-[20px] leading-relaxed">
            There’s a lot you can hear by listening
          </h3>
        </div>

        {/* Images container */}
        <div className="grid grid-cols-3 px-3 gap-4 w-full place-items-center">
          <div className="flex justify-center">
            <img
              src={homeImg}
              alt="home-img"
              height="480px"
              width="234px"
              className="rounded-md"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={home2img}
              alt="home-img"
              height="480px"
              width="234px"
              className="rounded-md"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={home3img}
              alt="home-img"
              height="480px"
              width="234px"
              className="rounded-md"
            />
          </div>
        </div>

        {/* Text content below images */}
        <div className="col-span-1 mx-4 sm:mx-2  text-center text-white  text-[14px] sm:text-[16px] font-medium mt-8">
          <h3>
            Thousands of multi lingual stories curated and told to give a
            personalized experience. The right listening choice for not just
            children but the family.
          </h3>
        </div>

        {/* Button section */}
        <div className="col-span-1 mx-4 sm:mx-2 text-center text-white  text-[14px] sm:text-[16px] font-semibold mt-4">
          <h3>This, is Katha Mehfil, Join the Mehfil, One Story at a Time</h3>
          <div>
            <button
              className="py-3 px-4 text-[#94C11F] font-semibold text-[16px] border-2 rounded-[12px] my-12 border-[#94C11F]"
              onClick={() => navigate("/signup")}
            >
              Start Your 7 Day Free Trial
            </button>
          </div>
        </div>
      </div>

      {/* accordian start */}
      <div
        id="customDropShadow"
        className="space-y-4  mx-3 sm:mx-12 mt-8 border border-[#2D2D2D] rounded-xl "
      >
        <div className="rounded-xl shadow-custom bg-[#1E1E1E]">
          <div
            onClick={() => handleAccordionClick("accordian1")}
            className="flex items-center rounded-t-lg justify-between px-0 py-6 mx-8 cursor-pointer"
          >
            <h2 className="text-[#F8FAF9] text-[20px]">
              Why should I join Katha Mehfil? 
            </h2>
            <svg
              className={` text-white font-medium w-6 h-3 shrink-0 transition-transform duration-500 ${
                isOpen === "accordian1" ? "rotate-180" : ""
              }`}
              viewBox="0 0 28 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2L12.8686 12.8686C13.2646 13.2646 13.4627 13.4627 13.691 13.5368C13.8918 13.6021 14.1082 13.6021 14.309 13.5368C14.5373 13.4627 14.7354 13.2646 15.1314 12.8686L26 2"
                stroke="#F8FAF9"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Animated content section */}
          <div
            className={`overflow-hidden border-t mx-8 border-[#2D2D2D] transition-all duration-500  ease-in-out ${
              isOpen === "accordian1"
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-0 py-6 rounded-xl">
              <p className="text-[#F8FAF9] text-[16px] rounded-xl">
                This is no ordinary Audiostory book App. Here, stories have been
                curated and told in a personalized setting to create an
                interactive listening environment. 
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        id="customDropShadow"
        className="space-y-4 mx-3 sm:mx-12 mt-8 border border-[#2D2D2D] rounded-xl "
      >
        <div className="rounded-xl shadow-custom bg-[#1E1E1E]">
          <div
            onClick={() => handleAccordionClick("accordian2")}
            className="flex items-center rounded-t-xl mx-3 justify-between p-6  cursor-pointer"
          >
            <h2 className="text-[#F8FAF9] text-[20px]">
              What kind of stories will I find here?
            </h2>
            <svg
              className={` text-white font-medium w-6 h-3 shrink-0 transition-transform duration-500 ${
                isOpen === "accordian2" ? "rotate-180" : ""
              }`}
              viewBox="0 0 28 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2L12.8686 12.8686C13.2646 13.2646 13.4627 13.4627 13.691 13.5368C13.8918 13.6021 14.1082 13.6021 14.309 13.5368C14.5373 13.4627 14.7354 13.2646 15.1314 12.8686L26 2"
                stroke="#F8FAF9"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Animated content section */}
          <div
            className={`overflow-hidden border-t mx-8 border-[#2D2D2D] transition-all duration-500  ease-in-out ${
              isOpen === "accordian2"
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-0  py-6 rounded-xl">
              <p className="text-[#F8FAF9] text-[16px] rounded-xl">
                Katha Mehfil has stories catering to all ages and genres ranging
                from fairytale, fantasy, history, food, mythology, mystery,
                science, nature and enviorment.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="customDropShadow"
        className="space-y-4 mx-3 sm:mx-12 mt-8 border border-[#2D2D2D] rounded-xl "
      >
        <div className="rounded-xl shadow-custom bg-[#1E1E1E]">
          <div
            onClick={() => handleAccordionClick("accordian3")}
            className="flex items-center rounded-t-xl mx-3 justify-between p-6  cursor-pointer"
          >
            <h2 className="text-[#F8FAF9] text-[20px]">
              What languages are available in Katha Mehfil? 
            </h2>
            <svg
              className={` text-white font-medium w-6 h-3 shrink-0 transition-transform duration-500 ${
                isOpen === "accordian3" ? "rotate-180" : ""
              }`}
              viewBox="0 0 28 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2L12.8686 12.8686C13.2646 13.2646 13.4627 13.4627 13.691 13.5368C13.8918 13.6021 14.1082 13.6021 14.309 13.5368C14.5373 13.4627 14.7354 13.2646 15.1314 12.8686L26 2"
                stroke="#F8FAF9"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Animated content section */}
          <div
            className={`overflow-hidden mx-8 border-t border-[#2D2D2D] transition-all duration-500  ease-in-out ${
              isOpen == "accordian3"
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-0 py-6  rounded-xl">
              <p className="text-[#F8FAF9] text-[16px] rounded-xl">
                Katha Mehfil offers the luxury of listening to the same story in
                multiple languages; Marathi, English, Hindi, Tamil, Kannada,
                Gujrati, Odiya and may more, in time to come. 
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="customDropShadow"
        className="space-y-4 mx-3 sm:mx-12 mt-8 border border-[#2D2D2D] rounded-xl "
      >
        <div className="rounded-xl shadow-custom bg-[#1E1E1E]">
          <div
            onClick={() => handleAccordionClick("accordian4")}
            className="flex items-center rounded-t-xl mx-3 justify-between p-6  cursor-pointer"
          >
            <h2 className="text-[#F8FAF9] text-[20px]">
              How is Katha Mehfil interactive?
            </h2>
            <svg
              className={` text-white font-medium w-6 h-3 shrink-0 transition-transform duration-500 ${
                isOpen == "accordian4" ? "rotate-180" : ""
              }`}
              viewBox="0 0 28 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2L12.8686 12.8686C13.2646 13.2646 13.4627 13.4627 13.691 13.5368C13.8918 13.6021 14.1082 13.6021 14.309 13.5368C14.5373 13.4627 14.7354 13.2646 15.1314 12.8686L26 2"
                stroke="#F8FAF9"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Animated content section */}
          <div
            className={`overflow-hidden mx-8 border-t border-[#2D2D2D] transition-all duration-500 ease-in-out ${
              isOpen == "accordian4"
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-0 py-6  rounded-xl">
              <p className="text-[#F8FAF9] text-[16px] rounded-xl">
                As we pose questions and post activities to children, we
                encourage them to send their entries to the official website
                where they will be looked at and responded to. It all depends on
                how much you wish to make it interactive. 
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="customDropShadow"
        className="space-y-4 mx-3 sm:mx-12 mt-8 border border-[#2D2D2D] rounded-xl "
      >
        <div className="rounded-xl shadow-custom bg-[#1E1E1E]">
          <div
            onClick={() => handleAccordionClick("accordian5")}
            className="flex items-center rounded-t-xl mx-3 justify-between p-6  cursor-pointer"
          >
            <h2 className="text-[#F8FAF9] text-[20px]">
              How does Katha Mehfil for schools work? 
            </h2>
            <svg
              className={` text-white font-medium w-6 h-3 shrink-0 transition-transform duration-500 ${
                isOpen == "accordian5" ? "rotate-180" : ""
              }`}
              viewBox="0 0 28 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2L12.8686 12.8686C13.2646 13.2646 13.4627 13.4627 13.691 13.5368C13.8918 13.6021 14.1082 13.6021 14.309 13.5368C14.5373 13.4627 14.7354 13.2646 15.1314 12.8686L26 2"
                stroke="#F8FAF9"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Animated content section */}
          <div
            className={`overflow-hidden mx-8 border-t border-[#2D2D2D] transition-all duration-500 rounded-xl ease-in-out ${
              isOpen == "accordian5"
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-0 py-6 rounded-xl">
              <p className="text-[#F8FAF9] text-[16px] rounded-xl">
                For educational institutes and schools, Katha Mehfil runs an
                annual listening, reflections and presentation program in
                coordination with the faculty at school. 
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="customDropShadow"
        className="space-y-4 mx-3 sm:mx-12 mt-8 border border-[#2D2D2D] rounded-xl "
      >
        <div className="rounded-xl shadow-custom bg-[#1E1E1E]">
          <div
            onClick={() => handleAccordionClick("accordian6")}
            className="flex items-center rounded-t-xl mx-3 justify-between p-6  cursor-pointer"
          >
            <h2 className="text-[#F8FAF9] text-[20px]">
              How are stories curated for schools? 
            </h2>
            <svg
              className={` text-white font-medium w-6 h-3 shrink-0 transition-transform duration-500 ${
                isOpen == "accordian6" ? "rotate-180" : ""
              }`}
              viewBox="0 0 28 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2L12.8686 12.8686C13.2646 13.2646 13.4627 13.4627 13.691 13.5368C13.8918 13.6021 14.1082 13.6021 14.309 13.5368C14.5373 13.4627 14.7354 13.2646 15.1314 12.8686L26 2"
                stroke="#F8FAF9"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Animated content section */}
          <div
            className={`overflow-hidden mx-8 border-t border-[#2D2D2D] transition-all duration-500  ease-in-out ${
              isOpen == "accordian6"
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-0 py-6 rounded-xl">
              <p className="text-[#F8FAF9] text-[16px] rounded-xl">
                Depending on the grades that subscribe, the education board
                [ICSE, CBSE, SSC etc] and the background provided by schools,
                the stories are specially curated and designed to suit each
                institution. 
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="customDropShadow"
        className="space-y-4 mb-12 mx-3 sm:mx-12 mt-8 border border-[#2D2D2D] rounded-xl "
      >
        <div className="rounded-xl shadow-custom bg-[#1E1E1E]">
          <div
            onClick={() => handleAccordionClick("accordian7")}
            className="flex items-center rounded-t-xl mx-3 justify-between p-6  cursor-pointer"
          >
            <h2 className="text-[#F8FAF9] text-[20px]">
              How can school subscribe to Katha Mehfil? 
            </h2>
            <svg
              className={` text-white font-medium w-6 h-3 shrink-0 transition-transform duration-500 ${
                isOpen == "accordian7" ? "rotate-180" : ""
              }`}
              viewBox="0 0 28 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2L12.8686 12.8686C13.2646 13.2646 13.4627 13.4627 13.691 13.5368C13.8918 13.6021 14.1082 13.6021 14.309 13.5368C14.5373 13.4627 14.7354 13.2646 15.1314 12.8686L26 2"
                stroke="#F8FAF9"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Animated content section */}
          <div
            className={`overflow-hidden  mx-8 border-t border-[#2D2D2D] transition-all duration-500  ease-in-out ${
              isOpen == "accordian7"
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-0 py-6 rounded-xl">
              <p className="text-[#F8FAF9] text-[16px] rounded-xl">
                After requesting a call from the Katha Mehfil office, our
                representative will visit the school with a proposal and demo on
                how to use the Application. 
              </p>
            </div>
          </div>
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

export default Dashboard;
