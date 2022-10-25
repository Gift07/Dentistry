import Group from "../../assets/Group.svg";
import Flutter from "../../assets/Flutter.svg";
import Javascript from "../../assets/Nodejs.svg";
import Figma from "../../assets/Figma Logo.svg";
import ReactLogo from "../../assets/React.svg";
import TechnologyCard from "./Components/TechnologyCard";
import Union from "../../assets/Union.svg";
import Union1 from "../../assets/Union1.svg";

const Technology = () => {
  return (
    <div className="py-8 relative md:px-16">
      <div className="pl-2 lg:px-24 flex xs:flex-col gap-x-2 xs:pl-2">
        <div className="flex items-center text-white text-[1.4rem] md:text-3xl lg:text-5xl  xs:text-xl">
          <h1 className="text-[#02ffdd]">Technology Software</h1>
        </div>
        <h1 className="text-[1.4rem] md:text-3xl lg:text-5xl font-bold text-white xs:text-xl">
          Providers.
        </h1>
      </div>
      <div className="absolute right-0 top-16">
        <img src={Union} alt="union" className="h-96" />
      </div>
      <div className="px-6 lg:px-24 w-full flex items-center justify-center py-8 relative">
        <img
          src={Group}
          alt="group"
          className="w-full h-[300px] object-contain"
        />
        <div className="medical-shadow absolute" />
      </div>
      <div className="px-6 lg:px-24 xs:pl-2 xs:px-0 relative md:px-0">
        <p className="text-white py-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra.
        </p>
        <div className="tec-ellipse absolute left-0 top-0" />
      </div>
      <div className="relative py-3  px-6 lg:px-24 xs:px-2 md:px-0">
        <button className="px-5 py-2 text-lg font-semibold bg-[#02ffdd] rounded-full absolute z-10 button-shadow xs:px-2 xs:text-md">
          get started
        </button>
      </div>
      <div className="w-full flex items-center justify-center pt-20  px-6 lg:px-24 xs:px-2 xs:pt-10 md:px-0">
        <div className="w-full grid grid-cols-2 gap-4 lg:gap-24 ">
          <TechnologyCard Flutter={Flutter} title={"Flutter"} />
          <TechnologyCard Flutter={ReactLogo} title={"React js"} />
          <TechnologyCard Flutter={Figma} title={"Figma"} />
          <TechnologyCard Flutter={Javascript} title={"Javascript"} />
        </div>
      </div>
      <div className="absolute left-0 -bottom-16">
        <img src={Union1} alt="union1" className="w-20 object-contain" />
      </div>
      <div className="eclips absolute right-0" />
      <div className="pt-12 w-full flex items-center justify-center xs:pt-6">
        <hr className="h-3 w-[200px] lg:w-[472px] bg-[#02ffdd] opacity-30 rounded-full xs:w-[160px]" />
      </div>
    </div>
  );
};

export default Technology;
