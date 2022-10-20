import React from "react";
import Bank from "../Components/Dentistry/Bank";
import Course from "../Components/Dentistry/Course";
import Dental from "../Components/Dentistry/Dental";
import Dicipline from "../Components/Dentistry/Dicipline";
import Enroll from "../Components/Dentistry/Enroll";
import Fees from "../Components/Dentistry/Fees";
import Form from "../Components/Dentistry/Form";
import Franchise from "../Components/Dentistry/Franchise";
import Group from "../Components/Dentistry/Group";
import Lecture from "../Components/Dentistry/Lecture";
import Paedatric from "../Components/Dentistry/Paedatric";
import Welcome from "../Components/Dentistry/Welcome";
import Footer from "../Components/Home/Footer";

const Dentistry = () => {
  return (
    <div className="bg-white min-h-screen font-poppins overflow-hidden">
      <div className="bg-[#1e1e1e]">
        <Welcome />
        <Group />
        <Dicipline />
      </div>
      <Fees />
      <Course />
      <Paedatric />
      <Dental />
      <Enroll />
      <Bank />
      <Lecture />
      <Franchise />
      <Form />
      <Footer />
    </div>
  );
};

export default Dentistry;
