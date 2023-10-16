import React from "react";
import AppBar from "../Utilities/AppBar";
import Footer from "../Utilities/Footer";
import Topbar from "../Utilities/Topbar";
import BookingHome from "./BookingHome";
import CarouselCard from "./CarouselCard";
import CarouselEvents from "./CarouselEvents";
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
      <br/>
      <BookingHome/>
      {/* <CarouselEvents/> */}
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
      <div type="button" class="email-bt" onClick={()=>window.location.href='https://wa.me/919446353417'}>
    <div class="text-call">
    <i class="fab fa-brands fa-whatsapp" aria-hidden={true}></i>
        {/* <span><i class="fab fa-brands fa-whatsapp" aria-hidden={true}></i></span> */}
    </div>
</div>
      <Footer />
</>
    )
}