import React from "react";
import { BsDot } from "react-icons/bs";
import Frame from "../../assets/Frame 6.png";

const Paedatric = () => {
  return (
    <div className="w-full flex items-center justify-center ">
      <div className="w-11/12 dentistry-box">
        <div className="w-full flex items-center justify-center">
          <img
            src={Frame}
            alt="frame"
            className="h-[194px] w-full lg:h-96 xs:h-[140px] md:h-80"
          />
        </div>
        <div className="py-3 px-10 lg:px-24 xs:px-5 md:py-3">
          <h1 className="text-3xl lg:text-4xl text-[#02ffdd] xs:text-xl">
            Paediatric Dentistry for Specialists
          </h1>
          <div>
            <ol className="py-4 font-lightpriego">
              <li className="flex items-center gap-x-2">
                <BsDot size={17} />
                Prevention and management of caries and treatment planning
                basics
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
            <span className="w-[119px] h-[36px] md:h-[42px] text-lg font-medium apply-button rounded-full flex items-center justify-center">
              <h2 className="font-black">Apply</h2>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paedatric;
