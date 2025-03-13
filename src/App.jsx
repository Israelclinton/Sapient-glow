import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import ServicesSection from './Components/ServicesSection'
import Footer from './Components/Footer'
const App = () => {

  return (  
  <>
    <Navbar />
    <div className="">
      <Hero />
    </div>
    <ServicesSection />
    <Footer />
  </>

);
};

export default App;
