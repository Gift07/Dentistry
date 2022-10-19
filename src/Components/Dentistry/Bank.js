import React from "react";
import Building from "../../assets/Building.svg";

const Bank = () => {
  return (
    <div className="w-full bg-white">
      <div className="w-full flex flex-col items-center justify-center py-8">
        <h1 className="text-3xl font-lightpriego">Knowledge bank</h1>
        <img src={Building} alt="building" className="h-32 py-4" />
      </div>
      <div className="w-full flex flex-col items-center justify-center pb-4">
        <div className="w-11/12 md:w-8/12 lg:w-6/12 h-32 bg-[#02ffdd] flex items-center justify-center p-3 text-lg lg:text-xl rounded-tl-[3.8rem] rounded-br-[3.8rem]">
          <h1>Maulana Azad Institute of Dental Science</h1>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center pb-4">
        <div className="w-11/12 md:w-8/12 lg:w-6/12  h-32 bg-[#ea00ff] flex items-center justify-center text-xl rounded-tl-[3.8rem] rounded-br-[3.8rem]">
          <h1>King George’s Medical University</h1>
        </div>
      </div>
      <div className="py-8 w-full flex flex-col items-center text-3xl lg:text-4xl font-bold text-[#0b0b0b]">
        <div className="flex items-center gap-x-2">
          <h1 className="text-[#ea00ff]">100+</h1>
          <h1>Professionals & </h1>
        </div>
        <h1>Dental Clinics Benefited</h1>
        <h1>Immensly.</h1>
      </div>
    </div>
  );
};

export default Bank;
