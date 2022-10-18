import React from "react";
import Frame from "../../assets/Frame 8.jpg";

const Enroll = () => {
  return (
    <div className="w-full bg-white">
      <div className="w-full flex items-center justify-center py-4">
        <img
          src={Frame}
          alt="frame"
          className="h-80 w-11/12 object-cover rounded-tl-[4rem] lg:hidden"
        />
        <img
          src={Frame}
          alt="frame"
          className="hidden  lg:h-96  lg:object-cover lg:rounded-tl-[4rem] lg:rounded-br-[4rem]"
        />
      </div>
    </div>
  );
};

export default Enroll;
