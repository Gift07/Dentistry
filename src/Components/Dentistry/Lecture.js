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
      <div className="relative px-6 lg:px-96">
        <div className="w-[290px] flex items-center justify-start pt-3">
          <div className="w-full flex items-center justify-end py-3">
            <div className="h-[98px] lg:h-32 w-full lg:w-96 gap-x-3 flex items-center p-4  bg-[#02ffdd] rounded-full">
              <div className="h-[76px] lg:h-28 flex items-center justify-center bg-white rounded-full w-[76px]">
                <img
                  src={Figure2}
                  alt="figure"
                  className="h-[49px] lg:h-20 w-[39px] lg:w-20 rounded-full object-cover transform-pic"
                />
              </div>
              <div>
                <h1 className="text-md font-semibold text-[#313131]">
                  Computence University
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-end py-3">
          <div className="h-[98px] lg:h-32 w-[290px] lg:w-96 gap-x-3 flex items-center p-4  bg-[#ea00ff] rounded-full">
            <div className="h-[76px] lg:h-28 flex items-center justify-center bg-white rounded-full w-[76px]">
              <img
                src={Figure1}
                alt="figure"
                className="h-[49px] lg:h-20 w-[39px] lg:w-20 rounded-full object-cover transform-pic"
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
          <div className="h-[98px] lg:h-32 w-[290px] lg:w-96 gap-x-3 flex items-center p-4  bg-[#02ffdd] rounded-full">
            <div className="h-[76px] lg:h-28 flex items-center justify-center bg-white rounded-full w-[76px]">
              <img
                src={Figure3}
                alt="figure"
                className="h-[49px] lg:h-20 w-[39px] lg:w-20 rounded-full object-cover transform-pic"
              />
            </div>
            <div>
              <h1 className="text-md font-semibold text-[#313131]">
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
