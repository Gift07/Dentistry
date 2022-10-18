import React from "react";

const TechnologyCard = ({ Flutter, title }) => {
  return (
    <div className="w-full my-3 rounded-2xl shadow-2xl border-r border-[#02ffdd] border-opacity-30 py-4 lg:px-3 flex items-center lg:gap-x-3">
      <div>
        <img src={Flutter} alt="flutter" className="h-16 object-contain" />
      </div>
      <div>
        <h1 className="text-4xl font-semibold text-[#02ffdd]">{title}</h1>
      </div>
    </div>
  );
};

export default TechnologyCard;
