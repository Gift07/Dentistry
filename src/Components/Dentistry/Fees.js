import React from "react";
import { AiOutlineMinus } from "react-icons/ai";

const Fees = () => {
  return (
    <div className="w-screen bg-white">
      <div className="w-full flex items-center justify-center pt-8  md:pt-12 lg:pt-16">
        <div className="text-2xl md:text-3xl lg:text-5xl  font-bold w-full flex flex-col items-center justify-center text-[#313131] xs:text-xl">
          <h1 className="text-[#c82bd6] flex items-center">₹3000-₹4000</h1>
          <h1>Monthly fees and enhance</h1>
          <h1>to Professional Dental Care</h1>
        </div>
      </div>
      <div className="pt-12 w-full flex items-center justify-center">
        <hr className="h-3 w-[200px] lg:w-[472px] bg-[#02ffdd] opacity-30 rounded-full" />
      </div>
    </div>
  );
};

export default Fees;
