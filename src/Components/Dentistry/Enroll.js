import React from "react";
import Frame from "../../assets/Frame 8.png";

const Enroll = () => {
  return (
    <div className="w-full bg-white">
      <div className="w-full flex items-center justify-center py-4 relative">
        <img src={Frame} alt="frame" className="h-[194px] w-11/12 lg:hidden" />
        <div className="absolute top-0 left-10">
          <div className=" pt-8">
            <div className="flex items-center gap-x-2">
              <h1 className="text-3xl text-[#c82bd6]"> 25 Different</h1>
              <h1 className="text-3xl text-[#02ffdd]">Dental</h1>
            </div>
            <h1 className="text-[#02ffdd] text-3xl">Courses</h1>
          </div>
        </div>
        <div className="w-full flex items-center justify-end absolute pt-32 pr-10">
          <button className="enroll h-9 w-[119px]">Enroll now</button>
        </div>
      </div>
      <img
        src={Frame}
        alt="frame"
        className="hidden  lg:h-96  lg:object-cover lg:rounded-tl-[4rem]"
      />
      <div className="w-full flex items-center justify-center py-3">
        <hr className="line" />
      </div>
    </div>
  );
};

export default Enroll;
