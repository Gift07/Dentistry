import React from "react";
import Obj from "../../assets/OBJECTS.svg";
import Union1 from "../../assets/Union1.svg";
import Eclipse from "../../assets/Ellipse 10.svg";

const Objects = () => {
  return (
    <div className="relative">
      <div className="py-12 flex flex-col items-center justify-center relative">
        <div>
          <img
            src={Obj}
            alt="object"
            className="w-[300px] h-[300px] object-cover"
          />
        </div>
        <div className="absolute left-0">
          <img src={Union1} alt="union1" className="w-[124px] object-contain" />
        </div>
        <div className="pt-12">
          <hr className="h-3 w-[200px] lg:w-[472px] bg-[#02ffdd] opacity-30 rounded-full" />
        </div>
      </div>
      <div className="w-full absolute top-[231px]">
        <img
          src={Eclipse}
          alt="eclipse"
          className="h-[40rem] w-full object-fill "
        />
      </div>
    </div>
  );
};

export default Objects;
