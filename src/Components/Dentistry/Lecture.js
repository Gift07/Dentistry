import React from "react";
import Figure1 from "../../assets/g10.svg";
import Figure2 from "../../assets/g11.svg";
import Figure3 from "../../assets/path2684.svg";

const Lecture = () => {
  return (
    <div className="w-full bg-white">
      <div className="w-full flex items-center justify-center">
        <h1 className="text-2xl">Guest Lecture by</h1>
      </div>
      <div className="px-10 lg:px-96">
        <div className="w-full flex items-center justify-start py-3">
          <div className="h-28 lg:h-32 w-full lg:w-96 gap-x-3 flex items-center p-6 bg-[#02ffdd] rounded-full">
            <div className="h-24 lg:h-28 flex items-center justify-center bg-white rounded-full w-32">
              <img
                src={Figure1}
                alt="figure"
                className="h-16 lg:h-20 w-16 lg:w-20 rounded-full"
              />
            </div>
            <div>
              <h1 className="text-md">Complutense University of Madrid</h1>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-end py-3">
          <div className="h-28 lg:h-32 w-full lg:w-96 gap-x-3 flex items-center p-6 bg-[#ea00ff] rounded-full">
            <div className="h-24 lg:h-28 flex items-center justify-center bg-white rounded-full w-32">
              <img
                src={Figure2}
                alt="figure"
                className="h-16 lg:h-20 w-16 lg:w-20 rounded-full"
              />
            </div>
            <div>
              <h1 className="text-md">Malmo University</h1>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-start py-3">
          <div className="h-28 lg:h-32 w-full lg:w-96 gap-x-3 flex items-center p-6 bg-[#02ffdd] rounded-full">
            <div className=" h-24lg:h-28 flex items-center justify-center bg-white rounded-full w-32">
              <img
                src={Figure3}
                alt="figure"
                className="h-16 lg:h-20 w-16 lg:w-20 rounded-full"
              />
            </div>
            <div>
              <h1 className="text-md">University of Zurich</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lecture;
