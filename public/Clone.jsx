import React, { useState } from "react";
import ServicesCard from "/src/Components/ServicesCard";

const services = [
  { name: "Facial Treatment", image: "src/assets/images/facial2.jpg" },
  { name: "Massage", image: "src/assets/images/massage.jpg" },
  { name: "Resort", image: "src/assets/images/resort4.jpg" },
  { name: "Suite", image: "src/assets/images/suite2.jpg" },
  { name: "Spa Therapy", image: "src/assets/images/therapy2.jpg" },
  { name: "Wellness", image: "src/assets/images/spa1.jpg" },
  { name: "Cosmetics", image: "src/assets/images/cosmetic5.jpg" },
  { name: "Nutrition", image: "src/assets/images/nutrition6.jpg" },
];

const ServicesSection = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
      const scrollAmount = 300;
    
      const scrollLeft = () => {
        setScrollPosition((prev) => Math.max(prev - scrollAmount, 0));
      };
    
      const scrollRight = () => {
        setScrollPosition((prev) => Math.min(prev + scrollAmount, services.length * 50));
      };

  return (
    <div className="relative w-full mb-16 overflow-hidden">
        <button onClick={scrollLeft} className="absolute z-10 px-3 py-2 text-gray-800 transform -translate-y-1/2 bg-yellow-700 rounded-full left-1 top-1/2"><ion-icon name="chevron-back-outline"></ion-icon></button>
        <div className="flex w-full overflow-x-hidden transition-transform duration-500 justify-items-center" style={{ transform: `translateX(-${scrollPosition}px)` }}>
      {services.map((service, index) => (
        <ServicesCard key={index} {...service} />
      ))}
    </div>
    <button onClick={scrollRight} className="absolute z-10 px-3 py-2 text-gray-800 transform -translate-y-1/2 bg-yellow-700 rounded-full right-3 top-1/2"><ion-icon name="chevron-forward-outline"></ion-icon></button>
    </div>
  );
};

export default ServicesSection;