import React from "react";
import Events from "../Components/Home/Events";
import Footer from "../Components/Home/Footer";
import Form from "../Components/Home/Form";
import Medical from "../Components/Home/Medical";
import Objects from "../Components/Home/Objects";
import Technology from "../Components/Home/Technology";
import Welcome from "../Components/Home/Welcome";
import Navbar from "../Components/Navbar";
import Verified from "../Components/Popups/Verified";

const Home = () => {
  const [popup, setPopup] = React.useState(false);
  return (
    <div className="bg-[#1E1E1E] min-h-screen font-poppins overflow-hidden">
      {popup && <Verified />}
      <Navbar />
      <Welcome />
      <Objects />
      <Medical />
      <Technology />
      <Events />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
