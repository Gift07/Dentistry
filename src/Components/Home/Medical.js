import React from "react";
import Group7 from "../../assets/Group 7.svg";
import Eclipse from "../../assets/Ellipse 12.svg";
import Frame1 from "../../assets/Frame 1.svg";
import Frame2 from "../../assets/Frame 3.svg";
import Frame3 from "../../assets/Frame 2.svg";
import Frame4 from "../../assets/Frame 4.svg";
import MedicalCard from "./Components/MedicalCard";
import Union from "../../assets/Ellipse 8.svg";

const Medical = () => {
  return (
    <div className="pl-6 pt-16 md:py-12 lg:py-16  md:pl-16 lg:px-24 xs:pl-2 xs:pt-8">
      <div className="pt-16 md:pt-28 lg:pt-32  text-[1.7rem] md:text-3xl lg:text-5xl text-white w-full xs:pt-8 xs:text-xl">
        <div className="flex items-center gap-x-[4px] lg:gap-x-2 ">
          <h1>Manufacture Of</h1>
          <h1 className="text-[#02ffdd]">Medical</h1>
        </div>
      </div>
      <h1 className="text-white text-[1.7rem] md:text-3xl lg:text-5xl xs:text-xl">
        Equipments.
      </h1>
      <div className="w-full flex items-center justify-center my-8 relative">
        <img src={Group7} alt="group" className="h-[300px] z-20" />
        <div className="medical-shadow absolute top-2" />
      </div>
      <div className="relative ">
        <p className="text-white text-sm lg:text-md font-lightpriego my-6 lg:my-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra.
        </p>
        <div className="eclips absolute right-0 top-4" />
      </div>
      <div className=" py-3">
        <button className="px-5 py-2 text-lg font-semibold bg-[#02ffdd] rounded-full absolute z-10 button-shadow">
          get started
        </button>
      </div>
      <div className="flex  items-center justify-center gap-x-3 xs:gap-x-2 my-20">
        <MedicalCard eclipse={Eclipse} frame={Frame2} />
        <MedicalCard eclipse={Eclipse} frame={Frame1} />
        <MedicalCard eclipse={Eclipse} frame={Frame3} />
        <MedicalCard eclipse={Eclipse} frame={Frame4} />
      </div>
      <div className="pt-12 w-full flex items-center justify-center">
        <hr className="h-3 w-[278px] lg:w-[472px] bg-[#02ffdd] opacity-30 rounded-full" />
      </div>
    </div>
  );
};

export default Medical;
