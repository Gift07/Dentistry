import React from "react";
import Group7 from "../../assets/Group 7.svg";
import Eclipse from "../../assets/Ellipse 12.svg";
import Frame1 from "../../assets/Frame 1.svg";
import Frame2 from "../../assets/Frame 3.svg";
import Frame3 from "../../assets/Frame 2.svg";
import Frame4 from "../../assets/Frame 4.svg";
import MedicalCard from "./Components/MedicalCard";
import Union from "../../assets/Union.svg";

const Medical = () => {
  return (
    <div className="py-10 md:py-12 lg:py-16 px-8 md:px-16 lg:px-24">
      <div className="pt-16 md:pt-28 lg:pt-32 text-[1.2rem] md:text-3xl lg:text-5xl font-bold text-white w-full">
        <div className="flex items-center gap-x-[4px] lg:gap-x-2 ">
          <h1>Manufacture Of</h1>
          <h1 className="text-[#02ffdd]">Medical</h1>
        </div>
      </div>
      <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-5xl">
        Equipments.
      </h1>
      <div className="w-full flex items-center justify-center my-8">
        <img
          src={Group7}
          alt="group"
          className="h-[300px] drop-shadow-xl shadow-[#02ffdd]"
        />
      </div>
      <div>
        <p className="text-white text-sm lg:text-md font-lightpriego my-6 lg:my-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra.
        </p>
      </div>
      <div className="relative py-3">
        <div className="bg-[#02ffdd] shadow-2xl opacity-40 h-10 w-32 absolute rounded-full shadow-[#02ffdd]" />
        <button className="px-5 py-2 text-lg font-semibold bg-[#02ffdd] rounded-full absolute z-10">
          get started
        </button>
      </div>
      <div className="flex items-center justify-center gap-x-8 my-10">
        <MedicalCard eclipse={Eclipse} frame={Frame2} />
        <MedicalCard eclipse={Eclipse} frame={Frame1} />
        <MedicalCard eclipse={Eclipse} frame={Frame3} />
        <MedicalCard eclipse={Eclipse} frame={Frame4} />
      </div>
      <div className="pt-12 w-full flex items-center justify-center">
        <hr className="h-3 w-[472px] bg-[#02ffdd] opacity-30 rounded-full" />
      </div>
    </div>
  );
};

export default Medical;
