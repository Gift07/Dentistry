import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Eclipse from "../assets/Ellipse 8.svg";

const Navbar = () => {
  return (
    <nav className="relative">
      <div className="w-screen h-[100px] md:140px lg:h-[169px]  flex items-center justify-end px-10 lg:px-24">
        <div className="h-[32px] w-[32px] rounded-md flex items-center justify-center bg-[#02FFDD]">
          <AiOutlineMenu />
        </div>
      </div>
      <div className="w-full h-[200px] md:h-[300px] lg:h-[400px] absolute top-0">
        <img
          src={Eclipse}
          alt="eclipse"
          className="h-full w-full object-cover"
        />
      </div>
    </nav>
  );
};

export default Navbar;
