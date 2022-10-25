import React from "react";

const Form = () => {
  return (
    <div className="py-8 pt-4 px-8 md:px-16 lg:px-24 relative xs:px-2">
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-5xl py-3 font-bold text-white">
          Contact us
        </h1>
      </div>
      <div>
        <form className="">
          <div className="text-white">
            <input
              placeholder="Name"
              className="input-form w-full p-2 my-2 outline-none border-r border-[#00ffdd] focus:border "
            />
          </div>
          <div className="text-white">
            <input
              placeholder="Email"
              className="input-form w-full p-2 my-2 outline-none border-r border-[#00ffdd] focus:border "
            />
          </div>
          <div className="text-white flex items-center my-2 relative">
            <div className="absolute z-20 pl-2">+91-</div>
            <input
              placeholder="Phone number"
              className="input-form w-full outline-none pl-10 border-r border-[#00ffdd] focus:border"
            />
          </div>
          <div className="image-shadow -right-32 absolute" />
          <div className="relative py-6">
            <button className="submit w-full">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
