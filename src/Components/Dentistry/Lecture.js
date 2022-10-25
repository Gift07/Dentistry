import React from "react";
import Figure1 from "../../assets/g10.svg";
import Figure2 from "../../assets/g11.svg";
import Figure3 from "../../assets/path2684.svg";

const Lecture = () => {
  return (
    <div className="w-full bg-white">
      <div className="w-full flex items-center justify-center">
        <p className="text-2xl">Guest Lecture by</p>
      </div>
      <div className="relative px-6 lg:px-96 xs:px-2 md:px-16">
        <div className="w-[290px] flex items-center justify-start pt-3 xs:w-[240px] md:w-[28rem] lg:w-96">
          <div className="w-full flex items-center justify-end py-3">
            <div className="h-[98px] lg:h-32 xs:h-[70px] w-full lg:w-96 gap-x-3 md:w-[28rem] md:h-[120px] flex items-center p-4  bg-[#02ffdd] rounded-full">
              <div className="h-[76px] lg:h-28 flex items-center justify-center bg-white rounded-full w-[76px] xs:h-[60px] xs:w-[60px] md:w-24 md:h-24">
                <img
                  src={Figure2}
                  alt="figure"
                  className="h-[49px] lg:h-20 w-[39px] lg:w-20 rounded-full object-cover transform-pic xs:h-[35px] md:w-20 md:h-20"
                />
              </div>
              <div>
                <h1 className="text-md font-semibold text-[#313131] md:text-lg lg:text-lg">
                  Computence University
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-end py-3">
          <div className="h-[98px] lg:h-32 w-[290px] lg:w-96 md:w-[28rem] md:h-28 gap-x-3 flex items-center p-4  bg-[#ea00ff] rounded-full xs:w-[240px] xs:h-[70px]">
            <div className="h-[76px] lg:h-28 md:h-24 md:w-24 flex items-center justify-center bg-white rounded-full w-[76px] xs:w-[60px] xs:h-[60px]">
              <img
                src={Figure1}
                alt="figure"
                className="h-[49px] lg:h-20 w-[39px] lg:w-20 rounded-full object-cover transform-pic md:w-20 md:h-20"
              />
            </div>
            <div>
              <h1 className="text-md font-semibold text-[#313131]">
                Malmo University
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-start py-3">
          <div className="h-[98px] lg:h-32 w-[290px] md:h-28 md:w-[28rem]  lg:w-96 gap-x-3 flex items-center p-4  bg-[#02ffdd] rounded-full xs:w-[240px] xs:h-[70px]">
            <div className="h-[76px] lg:h-28 flex items-center justify-center bg-white rounded-full w-[76px] xs:h-[60px] xs:w-[60px] md:h-24 md:w-24">
              <img
                src={Figure3}
                alt="figure"
                className="h-[49px] lg:h-20 w-[39px] lg:w-20 rounded-full object-cover transform-pic md:w-20 md:h-20"
              />
            </div>
            <div>
              <h1 className="text-md font-semibold text-[#313131] md:text-lg lg:text-lg">
                University Of Zurich
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center py-4">
          <hr className="line" />
        </div>
      </div>
    </div>
  );
};

export default Lecture;
