import React from "react";
import Frame from "../../assets/Frame 5.png";
import { BsDot } from "react-icons/bs";

const Course = () => {
  return (
    <div className="w-full bg-white">
      <div className="py-3 w-full flex items-center justify-center pt-10">
        <p className="text-3xl lg:text-4xl ">Courses</p>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-11/12 dentistry-box">
          <div className="w-full">
            <img
              src={Frame}
              alt="frame"
              className="h-[194px] w-full lg:hidden"
            />
            <img
              src={Frame}
              alt="frame"
              className="hidden  lg:h-96  lg:object-cover lg:rounded-tl-[4rem]"
            />
          </div>
          <div className=" px-10 lg:py-3 lg:px-80">
            <h1 className="text-3xl lg:text-4xl font-black text-[#02ffdd]">
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
              <span className="w-[119px] h-[36px] text-lg font-medium apply-button rounded-full flex items-center justify-center">
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
