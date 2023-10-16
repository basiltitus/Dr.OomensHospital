import React from "react";
import AppBar from "../Utilities/AppBar";
import Footer from "../Utilities/Footer";
import Topbar from "../Utilities/Topbar";
import Hero from "./Hero";
import "./index.css";
import JoinCollege from "./JoinCollege";
import WelcomeCollege from "./WelcomeCollege";

const CollegeOfOphtalmology = () => {
  return (
    <div className="CollegePage">
      <Topbar />
      <AppBar />
      <Hero />
      <WelcomeCollege />
      <JoinCollege />
      <div type="button" class="email-bt" onClick={()=>window.location.href='https://wa.me/919446353417'}>
    <div class="text-call">
    <i class="fab fa-brands fa-whatsapp" aria-hidden={true}></i>
        {/* <span><i class="fab fa-brands fa-whatsapp" aria-hidden={true}></i></span> */}
    </div>
</div>
      <Footer />
    </div>
  );
};

export default CollegeOfOphtalmology;
