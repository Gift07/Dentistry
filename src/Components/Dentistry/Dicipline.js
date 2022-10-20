import React from "react";

const Dicipline = () => {
  return (
    <div className="pt-8 md:pt-12 lg:pt-16 pl-6 md:px-16 lg:px-24 bg-[#1e1e1e] pb-3">
      <div className="w-full">
        <div className=" flex items-center gap-x-2 text-white text-2xl md:text-3xl lg:text-5xl  font-bold">
          <h1>Choose</h1>
          <h1 className="text-[#02ffdd]">Dicipline</h1>
        </div>
      </div>
      <div className="py-4 w-full flex items-center justify-center my-3">
        <button className=" w-11/12 border-2 dicipline-shadow h-[60px] text-[#02ffdd] text-xl">
          Dentistry
        </button>
      </div>
      <div className="w-full flex items-center justify-center my-6 gap-x-3 px-2">
        <button className="w-1/3 py-3 text-white font-semibold bg-[#0b0b0b] shadow-2xl rounded-full">
          Arts
        </button>
        <button className="w-1/3 py-3 text-white font-semibold bg-[#0b0b0b] shadow-2xl rounded-full">
          Dentist
        </button>
        <button className="w-1/3 py-3 text-white font-semibold bg-[#0b0b0b] shadow-2xl rounded-full">
          Hygiene
        </button>
      </div>
      <div className="w-full flex items-center my-6 gap-x-3 px-2">
        <button className="w-1/3 py-3 text-white font-semibold bg-[#0b0b0b] shadow-2xl rounded-full">
          Music
        </button>
        <button className="w-1/3 py-3 text-white font-semibold bg-[#0b0b0b] shadow-2xl rounded-full">
          Drama
        </button>
      </div>
      <div className="my-3">
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
