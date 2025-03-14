import React, { useState, useRef } from "react";
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
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollAmount = containerRef.current
    ? containerRef.current.clientWidth / 2
    : 300; // Adjust scroll based on container width

  const scrollLeft = () => {
    setScrollPosition((prev) => Math.max(prev - scrollAmount, 0));
  };

  const scrollRight = () => {
    const maxScroll =
      containerRef.current.scrollWidth - containerRef.current.clientWidth;
    setScrollPosition((prev) => Math.min(prev + scrollAmount, maxScroll));
  };

  return (
    <div className="relative w-full h-[260px] overflow-hidden bg-white mb-6">
      <h2 className="absolute top-0 text-4xl font-bold text-center text-yellow-700 transform -translate-x-1/2 left-1/2">
        Our <span className="text-gray-600">Services</span>
      </h2>
      
      {/* Left Button */}
      <button
        onClick={scrollLeft}
        className="absolute z-10 px-3 py-2 text-white transform -translate-y-1/2 bg-yellow-700 rounded-full left-1 top-1/2"
      >
        <ion-icon name="chevron-back-outline"></ion-icon>
      </button>

      {/* Scrollable Container */}
      <div
        ref={containerRef}
        className="flex w-full overflow-hidden transition-transform duration-500"
        style={{ transform: `translateX(-${scrollPosition}px)` }}
      >
        {services.map((service, index) => (
          <div key={index} className="flex-shrink-0 w-[250px] mx-2">
            <ServicesCard {...service} />
          </div>
        ))}
      </div>

      {/* Right Button */}
      <button
        onClick={scrollRight}
        className="absolute z-10 px-3 py-2 text-white transform -translate-y-1/2 bg-yellow-700 rounded-full right-3 top-1/2"
      >
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </button>
    </div>
  );
};

export default ServicesSection;