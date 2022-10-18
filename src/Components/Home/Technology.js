import React from "react";
import Group from "../../assets/Group.svg";
import Flutter from "../../assets/Flutter.svg";
import TechnologyCard from "./Components/TechnologyCard";

const Technology = () => {
  return (
    <div className="py-8 px-10 lg:px-24 relative">
      <div className="flex flex-col">
        <div className="flex items-center gap-x-2 text-white text-2xl md:text-3xl lg:text-5xl font-bold">
          <h1 className="text-[#02ffdd]">Technology Software</h1>
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white">
          Providers
        </h1>
      </div>
      <div className="w-full flex items-center justify-center py-8">
        <img
          src={Group}
          alt="group"
          className="w-full h-[300px] object-contain"
        />
      </div>
      <div>
        <p className="text-white font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra.
        </p>
      </div>
      <div className="py-4">
        <button className="px-5 py-2 text-lg font-semibold bg-[#02ffdd] rounded-full">
          get started
        </button>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-full grid grid-cols-2 gap-6">
          <TechnologyCard Flutter={Flutter} />
          <TechnologyCard Flutter={Flutter} />
          <TechnologyCard Flutter={Flutter} />
          <TechnologyCard Flutter={Flutter} />
        </div>
      </div>
      <div className="pt-12 w-full flex items-center justify-center">
        <hr className="h-3 w-[472px] bg-[#02ffdd] opacity-30 rounded-full" />
      </div>
    </div>
  );
};

export default Technology;
