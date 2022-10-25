import React from "react";

const Form = () => {
  return (
    <div className="w-full bg-white flex items-center justify-center relative pt-56 lg:pt-48">
      <div className="w-11/12 md:w-11/12 lg:w-8/12 p-4  bg-[#f7f7f7] z-50 absolute">
        <div className="text-[#0b0b0b] text-2xl xs:text-xl md:text-4xl">
          <h1 className=" text-[#313131]">Submit Form</h1>
          <h1 className="text-[#02ffdd]">Franchise Enquiry</h1>
        </div>
        <div>
          <form>
            <div>
              <input
                placeholder="Name"
                className="h-[45px] px-6 my-3  outline-none rounded-full focus:border-2 focus:border-[#02ffdd] bg-[#fff] w-full"
              />
            </div>
            <div>
              <input
                placeholder="Email"
                className="h-[45px] px-6 my-3  outline-none rounded-full focus:border-2 focus:border-[#02ffdd] bg-[#fff] w-full"
              />
            </div>
            <div className="relative mb-20">
              <div className="absolute z-20 top-6 left-2">+91-</div>
              <input
                placeholder="Phone number"
                className="py-3 h-[45px] my-3 absolute outline-none pl-12 rounded-full focus:border-2 focus:border-[#02ffdd] bg-[#fff] w-full"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-[#02ffdd]  uppercase rounded-full  w-full flex items-center justify-center text-xl font-semibold py-4"
              >
                <h1 className="">Submit</h1>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
