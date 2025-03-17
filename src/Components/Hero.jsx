import React, { useState, useEffect } from "react";
import ReadMore from "./ReadMore";
import hero from '../assets/images/hero.jpg';
import hero1 from "../assets/images/hero1.jpg";
import hero2 from "../assets/images/hero2.jpg";
import hero7 from "../assets/images/hero7.jpg";
import hero4 from "../assets/images/hero4.jpg";
import hero5 from "../assets/images/hero5.jpg";
import hero6 from "../assets/images/hero6.jpg";
import hero9 from "../assets/images/hero9.jpg";
import hero11 from "../assets/images/hero11.jpg";


// const images = [hero, hero1, hero2, hero7, hero4, hero5, hero6];
const images = [hero, hero1, hero11, hero2, hero7, hero4, hero5, hero9, hero6];


const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[580px] overflow-hidden border-b-2 border-gray-400 mt-16 mb-4">
      <div
        className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            <div
              className="h-[580px] w-full bg-cover bg-center px-8"
              style={{ backgroundImage: `url(${src})` }}
            >
              <div className="px-4 py-24 font-bold text-left text-black md:w-auto">
                <h1 className="mb-6 text-5xl text-yellow-700 ">Sapient-Glow</h1>
                <div className="px-8 py-6 text-wrap w-[480px] mb-4">
                  <p className="text-xl text-gray-600">
                    Offering the best relaxation through a combination of soothing treatments, luxurious spa services, and a peaceful atmosphere designed to rejuvenate your body and mind, ensuring a truly blissful experience.
                  </p>
                </div>
                <ReadMore>Read More</ReadMore>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;

