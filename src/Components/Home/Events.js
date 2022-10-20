import React from "react";
import { AiOutlineMinus } from "react-icons/ai";
import Grooup1 from "../../assets/Group (1).svg";
import Illustration from "../../assets/Illustration.svg";

const Events = () => {
  return (
    <div className="w-full py-6 lg:py-8 px-6 md:px-16 lg:px-24 relative">
      <div className="py-8">
        <div className="flex items-center gap-x-2">
          <div className="text-2xl md:text-3xl lg:text-5xl font-semibold text-white flex items-center lg:gap-x-2 ">
            <h1 className="text-[#02ffdd]">Enlargements, Events</h1>
          </div>
          <h1 className="text-white font-semibold text-2xl md:text-3xl lg:text-5xl">
            and
          </h1>
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-[#02ffdd] font-semibold flex items-center">
          Retro-festo
        </h1>
      </div>
      <div className="w-full flex items-center justify-center  relative">
        <img
          src={Illustration}
          alt="illustration"
          className="h-80 md:h-[26rem] lg:h-[28rem] z-50 shadow-[#02ffdd]"
        />
        <div className="w-full absolute -top-18 -right-8 lg:-right-20">
          <img
            src={Grooup1}
            alt="group"
            className="h-[32rem] -z-20 w-full object-cover mix-blend-luminosity"
          />
        </div>
        <div className="image-shadow absolute" />
      </div>
      <div className="eclips absolute left-0 bottom-64" />
      <div>
        <p className="text-white font-lightpriego">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra.
        </p>
      </div>
      <div className="relative py-3">
        <button className="px-5 py-2 text-lg font-semibold bg-[#02ffdd] rounded-full absolute z-10 button-shadow">
          get started
        </button>
      </div>
      <div className="pt-12 w-full flex items-center justify-center">
        <hr className="h-3 w-[230px] lg:w-[472px] bg-[#02ffdd] opacity-30 rounded-full mt-12" />
      </div>
    </div>
  );
};

export default Events;
