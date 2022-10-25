import React from "react";
import Frame from "../../assets/Frame 5.png";
import { BsDot } from "react-icons/bs";

const Course = () => {
  return (
    <div className="w-full bg-white">
      <div className="py-3 w-full flex items-center justify-center pt-10 xs:pt-6">
        <p className="text-3xl lg:text-4xl xs:text-2xl ">Courses</p>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-11/12 dentistry-box">
          <div className="w-full">
            <img
              src={Frame}
              alt="frame"
              className="h-[194px] w-full lg:h-96 xs:h-[140px] md:h-80"
            />
          </div>
          <div className=" px-10 lg:py-3 lg:px-24 xs:px-5 md:py-3">
            <h1 className="text-3xl lg:text-4xl font-black text-[#02ffdd] xs:text-xl">
              The oral cavity
            </h1>
            <div>
              <ol className="py-3 lg:py-4 font-lightpriego">
                <li className="flex items-center gap-x-2">
                  <BsDot size={17} /> The Interplay between Medical & Dentistry{" "}
                </li>
                <li className="flex items-center gap-x-2">
                  <BsDot size={17} /> Pain Management: Approaches & Challenges
                </li>
                <li className="flex items-center gap-x-2">
                  <BsDot size={17} />
                  Diabetic patients and their care Endocrine disorders Care of
                </li>
                <li className="flex items-center gap-x-2">
                  <BsDot size={17} /> cardiovascular disease and infections
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
    </div>
  );
};

export default Course;
