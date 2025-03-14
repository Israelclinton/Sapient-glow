import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import ServicesSection from './Components/ServicesSection'
import Footer from './Components/Footer'
import AboutUs from './Components/AboutUs';
const App = () => {

  return (  
  <>
    <Navbar />
    <div className="">
      <Hero />
    </div>
    <AboutUs />
    <ServicesSection />
    <Footer />
  </>

);
};

export default App;
