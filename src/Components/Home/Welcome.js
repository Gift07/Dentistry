import React from "react";
import Union from "../../assets/Union.svg";

const Welcome = () => {
  return (
    <div className="relative">
      <div className="pl-6 md:px-16 lg:px-24">
        <div className="pt-14 ">
          <div className="text-3xl md:text-4xl lg:text-5xl text-white">
            <div className="flex gap-x-2 my-1">
              <h1 className="text-[#02ffdd]">Technology</h1>
              <h1>is best</h1>
            </div>
            <h1 className="my-1">When it brings People</h1>
            <h1 className="my-1">Together</h1>
          </div>
          <div className="my-3 lg:my-4">
            <p className="text-white text-[12px] lg:text-md ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="my-6">
            <div className="w-[163px] h-[58px] rounded-full home-button bg-[#1e1e1e] flex items-center justify-center">
              <button className="w-[145px] h-[40px] border-2 border-[#02ffdd] bg-[#0b0b0b] text-[#02ffdd] rounded-full font-bold">
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
