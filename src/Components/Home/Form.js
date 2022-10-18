import React from "react";

const Form = () => {
  return (
    <div className="py-8 pt-4 px-10">
      <div>
        <h1 className="text-5xl py-3 font-bold text-white">Contact us</h1>
      </div>
      <div>
        <form>
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
          <div>
            <button className="bg-[#02ffdd] shadow-2xl rounded-full  w-full flex items-center justify-center text-xl font-semibold py-4">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
