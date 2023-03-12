import "./App.css";
import About from "./components/About";
import AppBar from "./components/AppBar";
import CarouselCard from "./components/CarouselCard";
import DoctorDiv from "./components/DoctorDiv";
import Footer from "./components/Footer";
import HeroScreen from "./components/HeroScreen";
import Location from "./components/Location";
import Services from "./components/Services";
import Topbar from "./components/Topbar";
import Vision from "./components/Vision";
import WelcomeCard from "./components/WelcomeCard";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
