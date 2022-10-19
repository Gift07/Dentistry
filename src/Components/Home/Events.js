import React from "react";
import Grooup1 from "../../assets/Group (1).svg";
import Illustration from "../../assets/Illustration.svg";

const Events = () => {
  return (
    <div className="w-full py-6 lg:py-8 px-8 md:px-16 lg:px-24">
      <div>
        <div className="text-2xl md:text-3xl lg:text-5xl font-semibold text-white flex items-center lg:gap-x-2 ">
          <h1 className="text-[#02ffdd]">Enlargements, Events</h1>
        </div>
        <h1 className="text-white font-semibold text-2xl md:text-3xl lg:text-5xl">
          and
        </h1>
      </div>
      <h1 className="text-2xl md:text-3xl lg:text-5xl text-[#02ffdd] font-semibold">
        Retro-festo
      </h1>
      <div className="w-full flex items-center justify-center  relative">
        <img
          src={Illustration}
          alt="illustration"
          className="h-80 md:h-[26rem] lg:h-[28rem] z-50"
        />
        <div className="w-full absolute -top-18 -right-8 lg:-right-20">
          <img
            src={Grooup1}
            alt="group"
            className="h-[32rem] -z-20 w-full object-cover"
          />
        </div>
      </div>
      <div>
        <p className="text-white">
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
      <div className="pt-12 w-full flex items-center justify-center">
        <hr className="h-3 w-[200px] lg:w-[472px] bg-[#02ffdd] opacity-30 rounded-full" />
      </div>
    </div>
  );
};

export default Events;
