import React from "react";
import AppBar from "../Utilities/AppBar";
import Footer from "../Utilities/Footer";
import Topbar from "../Utilities/Topbar";
import CarouselCard from "./CarouselCard";
import DoctorDiv from "./DoctorDiv";
import HeroScreen from "./HeroScreen";
import Location from "./Location";
import Services from "./Services";
import Vision from "./Vision";
import WelcomeCard from "./WelcomeCard";

export default function Home(){
    return(
<>
<Topbar />
      <AppBar />
      <HeroScreen />
      <WelcomeCard />
      <hr/>
      <Services />  
      <hr />
      <Vision />
      <hr />
      <DoctorDiv />
      <hr />
      <CarouselCard />
      <hr />
      <Location />
      <Footer />
</>
    )
}