import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <div
      className={`${
        pathname === "/dentistry" && "pt-56"
      } w-full bg-[#0b0b0b] py-4 px-8 md:px-16 lg:px-24 text-white`}
    >
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#02ffdd]">
          DreamRoots Entertainment and
          <br /> Technology Private Limited
        </h1>
      </div>
      <div>
        <p className="text-white font-light max-w-md py-4">
          We work together to dream, create and produce work that we are proud
          of for folks that we believe in. We crop 21st century produce and
          encourage our tribes to push themselves.
        </p>
      </div>
      <div className="py-4 lg:py-8">
        <h1 className="font-bold text-xl py-2">Address</h1>
        <div>
          <p>DreamRoots Entertainment and Technology Private Ltd.</p>
          <p>Indiranagar, Bangalore 560038</p>
        </div>
      </div>
      <div className="py-4 lg:py-8">
        <h1 className="font-bold text-xl py-2">Contact</h1>
        <div>
          <p>info@pluginbaby.co</p>
        </div>
      </div>
      <div className="py-4 lg:py-8">
        <h1 className="font-bold text-xl py-2">Gst</h1>
        <div>
          <p>29AAGCD5678Q1ZM</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
