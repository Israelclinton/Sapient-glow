import React, { useRef } from "react";
import ServicesCard from "./ServicesCard";

const services = [
  { name: "Facial Treatment", image: "/assets/images/facial2.jpg" },
  { name: "Massage", image: "/assets/images/massage.jpg" },
  { name: "Resort", image: "/assets/images/resort4.jpg" },
  { name: "Suite", image: "/assets/images/suite2.jpg" },
  { name: "Spa Therapy", image: "/assets/images/therapy2.jpg" },
  { name: "Wellness", image: "/assets/images/spa1.jpg" },
  { name: "Cosmetics", image: "/assets/images/cosmetic5.jpg" },
  { name: "Nutrition", image: "/assets/images/nutrition6.jpg" },
  { name: "Pedicure", image: "/assets/images/pedicure.jpg" },
  { name: "Manicure", image: "/assets/images/manicure.jpg" },
  { name: "Fitness", image: "/assets/images/bell3.jpg" },
];

const ServicesSection = () => {
  const scrollRef = useRef(null);

  const scrollAmount = 300; // Adjust scroll step

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full mt-10 mb-10 overflow-hidden bg-whit">
      <h2 className="mb-6 text-4xl font-bold text-center text-yellow-700">
        Our <span className="text-gray-600">Services</span>
      </h2>

      {/* Scrollable Section */}
      <div className="relative flex items-center">
        {/* Left Scroll Button */}
        <button
          onClick={scrollLeft}
          className="absolute z-10 px-3 py-2 text-center text-white bg-yellow-700 rounded-full transform-translate-y-1/2 left-3">
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex w-full px-6 space-x-4 overflow-hidden overflow-x-scroll scrollbar-hide scroll-smooth"
        >
          {services.map((service, index) => (
            <div key={index} className="min-w-[250px]">
              <ServicesCard {...service} />
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={scrollRight}
          className="absolute z-10 p-2 px-3 text-center text-white bg-yellow-700 rounded-full transform-translate-y-1/2 right-3">
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
};

export default ServicesSection;