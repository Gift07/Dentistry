import React from "react";

const Form = () => {
  return (
    <div className="w-full bg-white flex items-center justify-center relative pt-56 lg:pt-48">
      <div className="w-11/12 md:w-8/12 lg:w-1/2 p-4 shadow-2xl bg-gray-50 z-50 absolute">
        <div className="text-[#0b0b0b] text-4xl font-bold">
          <h1>Submit Form</h1>
          <h1 className="text-[#02ffdd]">Franchise Enquiry</h1>
        </div>
        <div>
          <form>
            <div>
              <input
                placeholder="Name"
                className="py-3 px-6 my-3  outline-none border-r border-[#02ffdd] border-opacity-30 shadow-2xl rounded-full focus:border-2 focus:border-[#02ffdd] bg-[#fff] w-full"
              />
            </div>
            <div>
              <input
                placeholder="Name"
                className="py-3 px-6 my-3 outline-none border-r border-[#02ffdd] border-opacity-30 shadow-2xl rounded-full focus:border-2 focus:border-[#02ffdd] bg-[#fff] w-full"
              />
            </div>
            <div>
              <input
                placeholder="Name"
                className="py-3 px-6 my-3 outline-none border-r border-[#02ffdd] border-opacity-30 shadow-2xl rounded-full focus:border-2 focus:border-[#02ffdd] bg-[#fff] w-full"
              />
            </div>
            <div>
              <button className="bg-[#02ffdd] shadow-2xl uppercase rounded-full  w-full flex items-center justify-center text-xl font-semibold py-4">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
