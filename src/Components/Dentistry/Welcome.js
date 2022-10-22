import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Welcome = () => {
  return (
    <div className="w-screen relative flex flex-col justify-center bg-[#1e1e1e]">
      <div className="flex items-center  gap-x-3  pt-16 pl-6 md:pl-16 lg:px-24">
        <div className="w-12 h-12 home-button  flex items-center justify-center">
          <div className="border-2 border-[#02ffdd] h-8 w-8 rounded-full text-[#02ffdd] flex items-center justify-center">
            <AiOutlineArrowLeft />
          </div>
        </div>
        <div>
          <h1 className="text-white">Home</h1>
        </div>
      </div>
      <div className="w-full flex justify-center absolute -top-28">
        <div className="image-shadow" />
      </div>
      <div className="pl-6 md:px-16 lg:px-24 mt-16 mb-3">
        <div>
          <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold text-white">
            Empowering the
          </h1>
          <div className=" flex items-center gap-x-2 my-1">
            <h1 className="text-white font-bold text-3xl md:text-3xl lg:text-5xl ">
              World's next{" "}
            </h1>
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold text-[#02ffdd]">
              Leaders
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-x-2 text-white font-bold text-3xl md:text-3xl lg:text-5xl   my-1">
          <h1>and</h1>
          <h1 className="text-[#02ffdd]">Team Players</h1>
        </div>
      </div>
      <div className="pl-6 md:pl-16 lg:px-24">
        <p className="text-white text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="my-4 pl-6 md:pl-16  lg:px-24">
        <div className="my-6">
          <div className="w-[114px] h-[56px] rounded-full home-buttone flex items-center justify-center ">
            <div className="w-[96px] h-[38px] border-2 border-[#02ffdd] bg-[#0b0b0b] text-[#02ffdd] rounded-full font-bold flex items-center justify-center">
              Apply
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
