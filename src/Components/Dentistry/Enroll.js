import React from "react";
import Frame from "../../assets/Frame 8.png";

const Enroll = () => {
  return (
    <div className="w-full bg-white">
      <div className="w-full flex items-center justify-center py-4 relative">
        <img
          src={Frame}
          alt="frame"
          className="h-[194px] w-11/12 lg:h-96 xs:h-[140px] md:h-80"
        />
        <div className="absolute top-0 left-10 xs:left-5 md:left-20 lg:left-24">
          <div className="pt-8 xs:pt-4 md:pt-10">
            <div className="flex items-center gap-x-2">
              <h1 className="text-3xl text-[#c82bd6] xs:text-xl md:text-4xl lg:text-4xl">
                {" "}
                25 Different
              </h1>
              <h1 className="text-3xl text-[#02ffdd] xs:text-xl md:text-4xl lg:text-4xl">
                Dental
              </h1>
            </div>
            <h1 className="text-[#02ffdd] text-3xl xs:text-xl md:text-4xl">
              Courses
            </h1>
          </div>
        </div>
        <div className="w-full flex items-center justify-end absolute pt-32 pr-10 xs:pt-24 xs:pr-5 md:pt-48 md:pr-12 lg:pr-20 lg:pt-56">
          <span className="enroll h-9 w-[119px] flex items-center justify-center xs:w-[90px] md:h-12">
            <h2>Enroll now</h2>
          </span>
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
