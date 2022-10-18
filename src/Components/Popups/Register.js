import React from "react";
import Person from "../../assets/XMLID_338_.svg";

const Register = () => {
  return (
    <div className="z-50 fixed top-0 bg-transparent backdrop-blur-md backdrop-filter w-screen h-screen flex items-center justify-center">
      <div className="w-11/12 bg-[#2b275a] rounded-2xl p-2">
        <div className="flex items-center justify-center gap-x-6 my-4">
          <div>
            <div className="flex items-center justify-center text-lg gap-x-2">
              <h1 className="text-orange-500 font-semibold">50</h1>
              <h1 className="font-semibold text-white">Cities</h1>
            </div>
            <p className="my-2 text-xs text-white">Clinics around 50 cities.</p>
          </div>
          <img src={Person} alt="person" className="h-24" />
        </div>
        <div className="flex items-center justify-center gap-x-6 my-4">
          <div>
            <div className="flex items-center justify-center text-lg gap-x-2">
              <h1 className="text-orange-500 font-semibold">50</h1>
              <h1 className="font-semibold text-white">Cities</h1>
            </div>
            <p className="my-2 text-xs text-white">Clinics around 50 cities.</p>
          </div>
          <img src={Person} alt="person" className="h-24" />
        </div>
        <div className="flex items-center justify-center gap-x-6 my-4">
          <div>
            <div className="flex items-center justify-center text-lg gap-x-2">
              <h1 className="text-orange-500 font-semibold">50</h1>
              <h1 className="font-semibold text-white">Cities</h1>
            </div>
            <p className="my-2 text-xs text-white">Clinics around 50 cities.</p>
          </div>
          <img src={Person} alt="person" className="h-24" />
        </div>
        <div>
          <div className="px-6">
            <h1 className="text-lg text-orange-400 font-semibold">Register</h1>
          </div>
          <form>
            <div className="w-full flex items-center justify-center py-3">
              <input
                placeholder="Email Id"
                className="flex p-2 items-center justify-center w-11/12 h-16 rounded-full outline-none bg-[#2b275a] shadow-xl  drop-shadow-lg"
              />
            </div>
            <div className="w-full flex items-center justify-center py-3">
              <input
                placeholder="Phone number"
                className="flex p-2 items-center justify-center w-11/12 h-16 rounded-full outline-none bg-[#2b275a] shadow-xl  drop-shadow-lg"
              />
            </div>
            <div className="py-3 w-full flex items-center justify-center">
              <button className=" w-11/12 py-3 uppercase bg-white rounded-full font-bold text-[#2b275a] drop-shadow">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
