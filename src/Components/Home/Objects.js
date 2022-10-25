import React from "react";
import Obj from "../../assets/OBJECTS.svg";
import Union1 from "../../assets/Union1.svg";

const Objects = () => {
  return (
    <div className="relative">
      <div className="py-12 xs:py-7 flex flex-col items-center justify-center relative">
        <div className="w-full flex items-center justify-center relative">
          <img src={Obj} alt="object" className=" h-[300px]" />
          <div className="image-shadow absolute" />
        </div>
        <div className="absolute left-0">
          <img src={Union1} alt="union1" className="w-[124px] object-contain" />
        </div>
        <div className="pt-12">
          <hr className="h-3 w-[200px] lg:w-[472px] bg-[#02ffdd] opacity-30 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Objects;
