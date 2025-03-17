import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import ServicesSection from './Components/ServicesSection'
import Footer from './Components/Footer'
import AboutUs from './Components/AboutUs';
// import About from './Components/About';
const App = () => {

  return (  
  <>
    <Navbar />
    <div className="">
      <Hero />
    </div>
    {/* <About /> */}
    <AboutUs />
    <ServicesSection />
    <Footer />
  </>

);
};

export default App;
