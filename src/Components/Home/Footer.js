import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-[#0b0b0b] py-4 px-10 text-white">
      <div>
        <h1 className="text-5xl font-bold text-[#02ffdd]">
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
      <div className="py-8">
        <h1 className="font-bold text-xl py-2">Address</h1>
        <div>
          <p>DreamRoots Entertainment and Technology Private Ltd.</p>
          <p>Indiranagar, Bangalore 560038</p>
        </div>
      </div>
      <div className="py-8">
        <h1 className="font-bold text-xl py-2">Contact</h1>
        <div>
          <p>info@pluginbaby.co</p>
        </div>
      </div>
      <div className="py-8">
        <h1 className="font-bold text-xl py-2">Gst</h1>
        <div>
          <p>29AAGCD5678Q1ZM</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
