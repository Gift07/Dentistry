import React from "react";
import Frame from "../../assets/Frame 10.png";

const Franchise = () => {
  return (
    <div className="w-full bg-white">
      <div className="w-full flex items-center justify-center">
        <p className="text-2xl">Franchise</p>
      </div>
      <div className="w-full flex flex-col items-center justify-center py-4">
        <div className="text-2xl md:text-4xl lg:text-4xl font-semibold text-[#0b0b0b] w-full flex flex-col items-center justify-center xs:text-xl">
          <h1 className="text-[#c82bd6]">Dental Franchise Clinic</h1>
          <h1>Available </h1>
          <div className="flex items-center gap-x-2">
            <h1>Starting from </h1>
            <h1 className="text-[#c82bd6]">Rs.2,50,000/-</h1>
          </div>
        </div>
        <div className="py-2 text-[#1e1e1e]">
          <h1>with Part-Payment Available</h1>
        </div>
      </div>
      <div className="w-full flex items-center justify-center py-5 relative">
        <img
          src={Frame}
          alt="frame"
          className="h-[194px] w-11/12 lg:h-96 md:h-80"
        />
        <div className="absolute right-8 lg:right-16 bottom-8 md:right-12">
          <span className="bg-[#02ffdd] w-[115px] h-[36px] flex items-center justify-center font-semibold text-lg rounded-full">
            <h2>apply now</h2>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Franchise;
