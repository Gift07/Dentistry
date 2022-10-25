import React from "react";

const TechnologyCard = ({ Flutter, title }) => {
  return (
    <div className="tech-box w-[150px] h-[64px] lg:w-full lg:h-24 flex items-center gap-x-2 pl-2 xs:w-[120px] md:w-full">
      <div>
        <img
          src={Flutter}
          alt="flutter"
          className="h-8 lg:h-16 object-contain xs:h-6 md:h-10"
        />
      </div>
      <div>
        <h1 className=" text-xl lg:text-4xl semibold text-[#02ffdd] xs:text-sm md:text-3xl">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TechnologyCard;
