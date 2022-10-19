import React from "react";
import { BsDot } from "react-icons/bs";
import Frame from "../../assets/Frame 7.jpg";

const Dental = () => {
  return (
    <div className="w-full bg-white">
      <div className="w-full flex items-center justify-center py-4">
        <img
          src={Frame}
          alt="frame"
          className="h-80 w-11/12 object-cover rounded-tl-[4rem] lg:hidden"
        />
        <img
          src={Frame}
          alt="frame"
          className="hidden  lg:h-96  lg:object-cover lg:rounded-tl-[4rem]"
        />
      </div>
      <div className="py-3 px-10 lg:px-80">
        <h1 className="text-3xl lg:text-4xl font-bold text-[#02ffdd]">
          Dental Photography in Practice
        </h1>
        <div>
          <ol className="py-4 font-lightpriego">
            <li className="flex items-center gap-x-2">
              <BsDot size={17} />
              Why dental Photography?
            </li>
            <li className="flex items-center gap-x-2">
              <BsDot size={17} />
              Which equipment to choose?
            </li>
            <li className="flex items-center gap-x-2">
              <BsDot size={17} />
              Taking great photographs
            </li>
            <li className="flex items-center gap-x-2">
              <BsDot size={17} /> Camera setup for clinical dental Photography
            </li>
            <li className="flex items-center gap-x-2">
              <BsDot size={17} />
              and many more
            </li>
          </ol>
        </div>
        <div className="w-full flex items-center justify-end">
          <button className="px-5 py-2 text-lg font-medium border border-[#02ffdd] rounded-full ">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dental;
