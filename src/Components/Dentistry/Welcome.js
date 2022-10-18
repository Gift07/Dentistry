import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Ecclipse from "../../assets/Ellipse 8 (1).svg";

const Welcome = () => {
  return (
    <div className="w-screen relative">
      <div className="flex items-center  gap-x-3  pt-16 px-10 md:px-16 lg:px-24">
        <div className="w-12 h-12 shadow-2xl shadow-[#02ffdd] rounded-full bg-[#0b0b0b] flex items-center justify-center">
          <div className="border-2 border-[#02ffdd] h-8 w-8 rounded-full text-[#02ffdd] flex items-center justify-center">
            <AiOutlineArrowLeft />
          </div>
        </div>
        <div>
          <h1 className="text-white">Home</h1>
        </div>
      </div>
      <div className="w-full absolute top-0">
        <img
          src={Ecclipse}
          alt="eclipse"
          className="h-36 w-full object-cover"
        />
      </div>
      <div className="px-10 md:px-16 lg:px-24 my-8">
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white">
            Empowering the
          </h1>
          <div className=" flex items-center gap-x-2 my-2">
            <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-5xl ">
              World's next{" "}
            </h1>
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#02ffdd]">
              Leaders
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-x-2 text-white font-bold text-2xl md:text-3xl lg:text-5xl   my-2">
          <h1>and</h1>
          <h1 className="text-[#02ffdd]">Team Players</h1>
        </div>
      </div>
      <div className="px-10 md:px-16 lg:px-24">
        <p className="text-white font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="my-4 px-10 md:px-16  lg:px-24">
        <div className="py-2 w-36 rounded-full flex items-center justify-center shadow-2xl shadow-[#0b0b0b]">
          <button className="px-5 py-1 border-2 border-[#02ffdd] text-[#02ffdd] rounded-full font-bold text-xl">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
