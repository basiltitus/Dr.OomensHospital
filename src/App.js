import './App.css';
import About from './components/About';
import AppBar from './components/AppBar';
import DoctorDiv from './components/DoctorDiv';
import Footer from './components/Footer';
import HeroScreen from './components/HeroScreen';
import Location from './components/Location';
import Vision from './components/Vision';

function App() {
  return (
    <div className="App">
    <AppBar />
    <HeroScreen />
   <Vision />
   <About />
   <hr/>
   <DoctorDiv/>
   <Location />
   <Footer />
   
    </div>
  );
}

export default App;
