import React from "react";
import Frame from "../../assets/Frame 10.jpg";

const Franchise = () => {
  return (
    <div className="w-full bg-white">
      <div className="w-full flex items-center justify-center">
        <p className="text-2xl">Franchise</p>
      </div>
      <div className="w-full flex items-center justify-center py-4">
        <div className="text-2xl lg:text-4xl font-semibold text-[#0b0b0b] w-full flex flex-col items-center justify-center">
          <h1 className="text-[#c82bd6]">Dental Franchise Clinic</h1>
          <h1>Available </h1>
          <div className="flex items-center gap-x-2">
            <h1>Starting from </h1>
            <h1 className="text-[#c82bd6]">Rs.2,50,000/-</h1>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center py-5 relative">
        <img
          src={Frame}
          alt="frame"
          className="h-80 w-11/12 object-cover rounded-tl-[4rem] lg:hidden"
        />
        <img
          src={Frame}
          alt="frame"
          className="hidden  lg:h-96  lg:object-cover lg:rounded-tl-[4rem] lg:rounded-br-[4rem]"
        />
        <div className="absolute right-8 lg:right-[22rem] bottom-8">
          <button className="bg-[#02ffdd] px-6 py-2 font-semibold text-lg rounded-full">
            apply now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Franchise;
