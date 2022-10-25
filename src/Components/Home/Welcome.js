import React from "react";
import Union from "../../assets/Union.svg";

const Welcome = () => {
  return (
    <div className="relative">
      <div className="pl-6 md:px-16 lg:px-24 xs:pl-2">
        <div className="pt-14 xs:pt-8">
          <div className="text-3xl md:text-4xl lg:text-5xl text-white xs:text-2xl">
            <div className="flex gap-x-2 my-1">
              <h1 className="text-[#02ffdd]">Technology</h1>
              <h1>is best</h1>
            </div>
            <h1 className="my-1 text-3xl xs:text-2xl md:text-4xl lg:text-5xl">
              When it brings People
            </h1>
            <h1 className="my-1 xs:text-2xl">Together</h1>
          </div>
          <div className="my-3 lg:my-4">
            <p className="text-white text-[12px] lg:text-md ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="my-6 xs:my-3">
            <div className="w-[163px] h-[58px] xs:w-[150px] xs:h-[40] rounded-full home-buttone bg-[#1e1e1e] flex items-center justify-center">
              <button className="w-[145px] h-[40px] xs:w-[120px] xs:h-[32] border-2 border-[#02ffdd] bg-[#0b0b0b] text-[#02ffdd] rounded-full font-bold">
                Get started
              </button>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-44">
          <img src={Union} alt="union" className="h-96" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
