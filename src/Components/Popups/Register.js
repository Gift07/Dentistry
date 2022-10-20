import React from "react";
import Person from "../../assets/XMLID_338_.svg";
import Person2 from "../../assets/XMLID_332_.svg";
import Person3 from "../../assets/XMLID_336_.svg";

const Register = () => {
  return (
    <div
      className="z-50 fixed top-0 bg-transparent backdrop-blur-md backdrop-filter w-screen
     h-screen lg:min-h-screen lg:py-4 flex items-center justify-center"
    >
      <div className="w-11/12 md:w-8/12 lg:w-1/2 bg-[#2b275a] rounded-[3rem] p-2 relative">
        <div className="flex items-center justify-center gap-x-6 my-4">
          <div>
            <div className="flex items-center justify-end text-2xl gap-x-2">
              <h1 className="text-[#ff8412] font-kumbh font-black">50</h1>
              <h1 className="font-black text-white font-kumbh">Cities</h1>
            </div>
            <p className="my-2 text-xs text-white font-kumbh font-semibold">
              Clinics around 50 cities.
            </p>
          </div>
          <img src={Person} alt="person" className="h-24" />
        </div>
        <div className="flex items-center justify-center gap-x-6 my-2">
          <img src={Person2} alt="person" className="h-24" />
          <div>
            <div className="flex items-center justify-start text-2xl gap-x-2">
              <h1 className="text-[#ff8412] font-black font-kumbh">1 Lakh</h1>
              <h1 className="font-black text-white font-kumbh">Patients</h1>
            </div>
            <p className="my-2 text-xs text-white font-kumbh font-semibold">
              Treated over 1 lakh patients.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-x-6 my-2">
          <div>
            <div className="flex items-center justify-end text-2xl gap-x-2">
              <h1 className="text-[#ff8412] font-black font-kumbh">60</h1>
              <h1 className="font-black text-white font-kumbh">Clinics</h1>
            </div>
            <p className="my-2 text-xs text-white font-kumbh font-semibold">
              Total of 60 clinics across the country.
            </p>
          </div>
          <img src={Person3} alt="person" className="h-24" />
        </div>
        <div className="absolute top-[330px] -left-[1px]">
          <hr className="w-[299px]" />
        </div>
        <div>
          <div className="px-6">
            <h1 className="text-lg text-[#ff8412] font-black font-kumbh ">
              Register
            </h1>
          </div>
          <form>
            <div className="w-full flex items-center justify-center py-3">
              <input
                placeholder="Email Id"
                className="text-center font-inter text-sm text-[#83828e] capitalize flex p-2 items-center justify-center w-11/12 h-[47px] rounded-full outline-none bg-[#2b275a] shadow-input"
              />
            </div>
            <div className="w-full flex items-center justify-center py-3">
              <input
                placeholder="Phone number"
                className="text-center font-inter text-sm text-[#83828e] capitalize flex p-2 items-center justify-center w-11/12 h-[47px] rounded-full outline-none bg-[#2b275a] shadow-input"
              />
            </div>
            <div className="py-3 w-full flex items-center justify-center ">
              <button className=" w-11/12 h-[50px] uppercase bg-white rounded-full drop-shadow ">
                <h1 className=" font-kumbh button-text font-black">Submit</h1>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
