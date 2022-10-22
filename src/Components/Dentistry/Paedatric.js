import React from "react";
import { BsDot } from "react-icons/bs";
import Frame from "../../assets/Frame 6.png";

const Paedatric = () => {
  return (
    <div className="w-full bg-white">
      <div className="w-full flex items-center justify-center py-4">
        <img src={Frame} alt="frame" className="h-[194px] lg:hidden" />
        <img
          src={Frame}
          alt="frame"
          className="hidden  lg:h-96  lg:object-cover lg:rounded-tl-[4rem]"
        />
      </div>
      <div className="py-3 px-10 lg:px-80">
        <h1 className="text-3xl lg:text-4xl text-[#02ffdd]">
          Paediatric Dentistry for Specialists
        </h1>
        <div>
          <ol className="py-4 font-lightpriego">
            <li className="flex items-center gap-x-2">
              <BsDot size={17} />
              Prevention and management of caries and treatment planning basics
            </li>
            <li className="flex items-center gap-x-2">
              <BsDot size={17} />
              Emergency management of a child with dental trauma
            </li>
            <li className="flex items-center gap-x-2">
              <BsDot size={17} />
              Pain free dentistry, patient assessment and course conclusion
            </li>
            <li className="flex items-center gap-x-2">
              <BsDot size={17} /> and many more
            </li>
          </ol>
        </div>
        <div className="w-full flex items-center justify-end">
          <button className="w-[119px] h-[36px] text-lg font-medium apply-button rounded-full flex items-center justify-center ">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Paedatric;
