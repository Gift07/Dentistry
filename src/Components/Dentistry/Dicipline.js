import React from "react";
import discipline_data from "../../Data/Discipline";

const Dicipline = () => {
  const [item, setItem] = React.useState({ id: 10, name: "Dentistry" });
  return (
    <div className="pt-8 md:pt-12 lg:pt-16 md:px-16 lg:px-24 bg-[#1e1e1e] pb-3">
      <div className="w-full">
        <div className="pl-6 flex items-center gap-x-2 text-white text-3xl md:text-3xl lg:text-5xl  font-bold">
          <h1>Choose</h1>
          <h1 className="text-[#02ffdd]">Dicipline</h1>
        </div>
      </div>
      <div className="py-4 w-full flex items-center justify-center my-3">
        <button className=" w-11/12 border-2 dicipline-shadow h-[60px] text-[#02ffdd] text-xl">
          {item.name}
        </button>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-11/12 flex items-center justify-center mb-4">
          <div className="grid grid-cols-3 gap-3">
            {discipline_data.map((item) => (
              <button
                key={item.id}
                onClick={() => setItem(item)}
                className="px-8 h-[35px] text-white font-semibold bg-[#0b0b0b] shadow-2xl rounded-full"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="my-3 pl-6">
        <div className="w-full flex items-center gap-x-2 text-sm">
          <h1 className="text-[#02ffdd] uppercase font-semibold">Note: </h1>
          <h1 className="text-white text-xs">
            You have entered this page via Dentistry link.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Dicipline;
