import React from "react";

const Form = () => {
  return (
    <div className="py-8 pt-4 px-8 md:16 lg:px-24">
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-5xl py-3 font-bold text-white">
          Contact us
        </h1>
      </div>
      <div>
        <form className="font-lightpriego">
          <div>
            <input
              placeholder="Name"
              className="py-3 px-6 my-3  outline-none border-r border-[#02ffdd] border-opacity-30 shadow-2xl rounded-full focus:border-2 focus:border-[#02ffdd] bg-[#1e1e1e] w-full"
            />
          </div>
          <div>
            <input
              placeholder="Name"
              className="py-3 px-6 my-3 outline-none border-r border-[#02ffdd] border-opacity-30 shadow-2xl rounded-full focus:border-2 focus:border-[#02ffdd] bg-[#1e1e1e] w-full"
            />
          </div>
          <div>
            <input
              placeholder="Name"
              className="py-3 px-6 my-3 outline-none border-r border-[#02ffdd] border-opacity-30 shadow-2xl rounded-full focus:border-2 focus:border-[#02ffdd] bg-[#1e1e1e] w-full"
            />
          </div>
          <div className="relative py-6">
            <div className="bg-[#02ffdd] shadow-2xl opacity-40 h-14 w-10/12 absolute rounded-full shadow-[#02ffdd]" />
            <button className="bg-[#02ffdd] shadow-2xl rounded-full  w-full flex items-center justify-center text-xl font-semibold py-4 text-black">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
