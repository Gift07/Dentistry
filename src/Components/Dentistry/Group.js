import React from "react";
import GroupImage from "../../assets/Group (2).svg";
import Union from "../../assets/Union.svg";

const Group = () => {
  return (
    <div className=" md:pt-12 lg:pt-16 px-10 md:x-16 lg:px-24 relative bg-[#1e1e1e]">
      <div className="w-full h-full flex items-center justify-center">
        <img
          src={GroupImage}
          alt="group"
          className="h-96 md:h-[28rem] lg:h-[30rem] xs:h-80"
        />
        <div className="image-shadow absolute" />
      </div>
      <div className="absolute right-0 -top-40">
        <img src={Union} alt="union" className="h-96 xs:h-80" />
      </div>
    </div>
  );
};

export default Group;
