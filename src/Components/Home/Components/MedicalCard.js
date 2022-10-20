import React from "react";

const MedicalCard = ({ eclipse, frame }) => {
  return (
    <div className="w-64 lg:h-56 lg:w-44 my-4 rounded-xl flex items-center justify-center relative shadow-2xl border-r border-[#20ffdd] border-opacity-30">
      <div className="w-full h-full">
        <img src={eclipse} alt="eclipse" className="w-full h-full" />
      </div>
      <div className="absolute w-full h-full flex items-center justify-center">
        <img src={frame} alt="frame1" className="h-20 w-20" />
      </div>
    </div>
  );
};

export default MedicalCard;
