import React from "react";
import Group from "../../assets/Group.svg";
import Flutter from "../../assets/Flutter.svg";
import Javascript from "../../assets/Nodejs.svg";
import Figma from "../../assets/Figma Logo.svg";
import ReactLogo from "../../assets/React.svg";
import TechnologyCard from "./Components/TechnologyCard";
import Union from "../../assets/Union.svg";
import Union1 from "../../assets/Union1.svg";
import Eclipse from "../../assets/Ellipse 8.svg";

const Technology = () => {
  return (
    <div className="py-8 px-8 lg:px-24 relative">
      <div className="flex flex-col">
        <div className="flex items-center gap-x-2 text-white text-2xl md:text-3xl lg:text-5xl font-bold">
          <h1 className="text-[#02ffdd]">Technology Software</h1>
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white">
          Providers
        </h1>
      </div>
      <div className="absolute right-0 top-16">
        <img src={Union} alt="union" className="h-96" />
      </div>
      <div className="w-full flex items-center justify-center py-8 relative">
        <img
          src={Group}
          alt="group"
          className="w-full h-[300px] object-contain"
        />
        <div className="w-full absolute top-0">
          <img
            src={Eclipse}
            alt="eclipse"
            className="h-[40rem] w-full object-fill "
          />
        </div>
      </div>
      <div>
        <p className="text-white font-lightpriego py-4">
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
      <div className="w-full flex items-center justify-center pt-12">
        <div className="w-full grid grid-cols-2 gap-6">
          <TechnologyCard Flutter={Flutter} title={"Flutter"} />
          <TechnologyCard Flutter={ReactLogo} title={"React js"} />
          <TechnologyCard Flutter={Figma} title={"Figma"} />
          <TechnologyCard Flutter={Javascript} title={"Java script"} />
        </div>
      </div>
      <div className="absolute left-0 -bottom-16">
        <img src={Union1} alt="union1" className="w-20 object-contain" />
      </div>
      <div className="pt-12 w-full flex items-center justify-center">
        <hr className="h-3 w-[200px] lg:w-[472px] bg-[#02ffdd] opacity-30 rounded-full" />
      </div>
    </div>
  );
};

export default Technology;
