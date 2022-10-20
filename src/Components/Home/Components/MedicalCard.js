import React from "react";

const MedicalCard = ({ eclipse, frame }) => {
  return (
    <div className="medical-box w-[80px] h-[90px] lg:w-44 lg:h-full relative">
      <div className="w-full h-full">
        <img src={eclipse} alt="eclipse" className="w-full h-full" />
      </div>
      <div className="absolute top-0 w-full h-full flex items-center justify-center">
        <img src={frame} alt="frame1" className="h-20 w-20" />
      </div>
    </div>
  );
};

export default MedicalCard;
