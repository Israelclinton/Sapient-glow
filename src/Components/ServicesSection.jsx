import React, { useState } from "react";
import ServicesCard from "./ServicesCard";

const services = [
  { name: "Facial Treatment", image: "src/assets/images/facial2.jpg" },
  { name: "Massage", image: "src/assets/images/massage.jpg" },
  { name: "Resort", image: "src/assets/images/resort4.jpg" },
  { name: "Suite", image: "src/assets/images/suite2.jpg" },
  { name: "Spa Therapy", image: "src/assets/images/therapy2.jpg" },
  { name: "Wellness", image: "src/assets/images/spa1.jpg" },
  { name: "Cosmetics", image: "src/assets/images/cosmetic5.jpg" },
  { name: "Nutrition", image: "src/assets/images/nutrition6.jpg" },
  { name: "Pedicure", image: "src/assets/images/pedicure.jpg" },
  { name: "Manicure", image: "src/assets/images/manicure.jpg" },
];

const ServicesSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollAmount = 300;

  const scrollLeft = () => {
    setScrollPosition((prev) => Math.max(prev - scrollAmount, 0));
  };

  const scrollRight = () => {
    setScrollPosition((prev) => Math.min(prev + scrollAmount, services.length * 150));
  };

  return (
    <div className="relative w-full h-[220px] overflow-hidden bg-white">
      <button onClick={scrollLeft} className="absolute z-10 px-3 py-2 text-white bg-yellow-700 rounded-full transform-translate-y-1/2 left-1 top-1/2"><ion-icon name="chevron-back-outline"></ion-icon></button>
      <div className="flex w-full overflow-x-hidden transition-transform duration-500 justify-items-center" style={{ transform: `translateX(-${scrollPosition}px)` }}>
        {services.map((service, index) => (
          <div key={index} className="flex-shrink-0 w-[250px] mx-2">
            <ServicesCard {...service} />
          </div>
        ))}
      </div>
      <button onClick={scrollRight} className="absolute z-10 px-3 py-2 text-white bg-yellow-700 rounded-full transform-translate-y-1/2 right-3 top-1/2"><ion-icon name="chevron-forward-outline"></ion-icon></button>
    </div>
  );
};

export default ServicesSection;