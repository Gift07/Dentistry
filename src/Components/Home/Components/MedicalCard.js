import React from "react";

const MedicalCard = ({ eclipse, frame }) => {
  return (
    <div className="medical-box w-[80px] h-[90px] lg:w-44 lg:h-full relative xs:w-[60px] xs:h-[70px] md:w-36 md:h-full">
      <div className="w-full h-full">
        <img src={eclipse} alt="eclipse" className="w-full h-full" />
      </div>
      <div className="absolute top-0 w-full h-full flex items-center justify-center">
        <img src={frame} alt="frame1" className="h-20 w-20 xs:h-16 xs:w-16" />
      </div>
    </div>
  );
};

export default MedicalCard;
