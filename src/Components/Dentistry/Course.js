import React from "react";
import Frame from "../../assets/Frame 5.jpg";
import { BsDot } from "react-icons/bs";

const Course = () => {
  return (
    <div className="w-full bg-white">
      <div className="py-3 w-full flex items-center justify-center pt-10">
        <p className="text-3xl lg:text-4xl ">Courses</p>
      </div>
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
          <button className="w-[119px] py-2 text-lg font-medium apply-button rounded-full ">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
