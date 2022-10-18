import React from "react";
import Grooup1 from "../../assets/Group (2).svg";
import Illustration from "../../assets/Illustration.svg";

const Events = () => {
  return (
    <div className="w-full py-8 px-10 relative">
      <div>
        <div className="text-5xl font-semibold text-white flex gap-x-2 ">
          <h1 className="text-[#02ffdd]">Enlargements, Events</h1>
          <h1>and</h1>
        </div>
        <h1 className="text-5xl text-[#02ffdd] font-semibold">Retro-festo</h1>
      </div>
      <div className="w-full flex items-center justify-center z-50">
        <img src={Illustration} alt="illustration" className="h-[35rem]" />
      </div>
      {/* <div className="w-full absolute top-0 -right-[39rem]">
        <img src={Grooup1} alt="group" className="h-[42rem] -z-20" />
      </div> */}
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
        <hr className="h-3 w-[472px] bg-[#02ffdd] opacity-30 rounded-full" />
      </div>
    </div>
  );
};

export default Events;
