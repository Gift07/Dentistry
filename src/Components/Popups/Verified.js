import React from "react";
import Obj from "../../assets/OBJECTS1.svg";
import Subtract from "../../assets/Subtract.svg";
import Vector from "../../assets/Vector.svg";
import Vector1 from "../../assets/Vector (1).svg";

const Verified = () => {
  return (
    <div className="z-50 fixed top-0 bg-transparent backdrop-blur-md backdrop-filter w-screen h-screen flex items-center justify-center">
      <div className="w-11/12 md:w-8/12 lg:w-1/2 bg-[#2b275a] rounded-2xl p-2">
        <div className="h-10 w-full shadow-2xl flex items-center justify-center text-xs gap-x-1">
          <div className="flex items-center text-white">
            <div>
              <img src={Subtract} alt="sub" className="h-4" />
            </div>
            <h1>50 Cities</h1>
          </div>
          <div className="flex items-center text-white">
            <div>
              <img src={Vector} alt="sub" className="h-4" />
            </div>
            <h1>1 Lakh Patients</h1>
          </div>
          <div className="flex items-center text-white">
            <div>
              <img src={Vector1} alt="sub" className="h-4" />
            </div>
            <h1>60 Clinics</h1>
          </div>
        </div>
        <div className="w-full flex items-center justify-center py-3">
          <img src={Obj} alt="obj" className="h-36" />
        </div>
        <div>
          <div className="w-full flex flex-col items-center justify-center">
            <h1 className="text-xl text-orange-400 font-semibold">
              Account Verified
            </h1>
            <div className="w-full flex flex-col items-center justify-center py-3">
              <p className=" font-lightpriego text-xs text-white">
                Browse into our App to book appointment
              </p>
              <p className=" font-lightpriego text-xs text-white">
                with our finest doctors.
              </p>
            </div>
          </div>

          <div className="py-3 w-full flex items-center justify-center">
            <button className=" w-11/12 py-3 uppercase bg-white rounded-full font-bold text-[#2b275a] drop-shadow">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verified;
