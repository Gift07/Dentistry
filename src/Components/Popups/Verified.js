import React from "react";
import Obj from "../../assets/OBJECTS1.svg";
import Subtract from "../../assets/Subtract.svg";
import Vector from "../../assets/Vector.svg";
import Vector1 from "../../assets/Vector (1).svg";

const Verified = () => {
  return (
    <div className="z-50 fixed top-0 bg-transparent backdrop-blur-md backdrop-filter w-screen h-screen flex items-center justify-center">
      <div className="w-11/12 md:w-8/12 lg:w-1/2 bg-[#2b275a] rounded-[3rem] p-2 flex flex-col items-center justify-center">
        <div className="h-10 w-[318px] flex items-center justify-center text-xs font-kumbh font-extrabold gap-x-3 mt-3  rounded-full verified">
          <div className="flex items-center text-white">
            <div>
              <img src={Subtract} alt="sub" className="h-[18px]" />
            </div>
            <h1 className="font-kumbh font-extrabold text-xs">50 Cities</h1>
          </div>
          <div className="flex items-center text-white">
            <div>
              <img src={Vector} alt="sub" className="h-[18px]" />
            </div>
            <h1 className="font-kumbh font-extrabold text-xs">
              1 Lakh Patients
            </h1>
          </div>
          <div className="flex items-center text-white">
            <div>
              <img src={Vector1} alt="sub" className="h-[18px]" />
            </div>
            <h1 className="font-kumbh text-xs font-extrabold">60 Clinics</h1>
          </div>
        </div>
        <div className="w-full flex items-center justify-center pt-3 mt-6 pb-8">
          <img src={Obj} alt="obj" className="h-40" />
        </div>
        <div>
          <div className="w-full flex flex-col items-center justify-center">
            <h1 className="text-3xl text-[#ff8412] font-black font-kumbh">
              Account Verified
            </h1>
            <div className="w-full flex flex-col items-center justify-center pt-3 pb-8">
              <p className=" font-kumbh text-xs font-medium text-white">
                Browse into our App to book appointment
              </p>
              <p className=" font-kumbh  text-xs font-medium text-white">
                with our finest doctors.
              </p>
            </div>
          </div>

          <div className="py-3 w-full flex items-center justify-center">
            <button className="w-[318px] py-3 uppercase bg-white rounded-full font-black font-kumbh popup-submit">
              <h1 className=" font-kumbh button-text font-black text-xl">
                Get started
              </h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verified;
