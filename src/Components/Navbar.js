import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="relative w-full flex justify-center">
      <div className="w-screen h-[100px] md:140px lg:h-[169px]  flex items-center justify-end px-8 md:px-16 lg:px-24 xs:pr-2 ">
        <div className="h-[32px] w-[32px] rounded-md flex items-center justify-center bg-[#02FFDD]">
          <AiOutlineMenu />
        </div>
      </div>
      <div className="image-shadow absolute -top-24" />
    </nav>
  );
};

export default Navbar;
