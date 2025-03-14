import React from "react";
const AboutUs = () => {
    return (
      <section className="flex items-center justify-between px-10 py-16 bg-white">
        {/* Left Side - Text */}
        <div className="max-w-[50%]">
          <h2 className="text-4xl font-bold text-gray-800">
            About <span className="text-yellow-700">Us</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            We are dedicated to providing the best wellness and beauty services.
            Our mission is to help you relax, rejuvenate, and feel your best with
            premium spa treatments, facial care, and wellness programs.
          </p>
        </div>
  
        {/* Right Side - Stacked Images */}
        <div className="relative w-[300px] h-[300px]">
          {/* Image 1 (Back) */}
          <img
            src="./src/assets/images/spa1.jpg"
            alt="spa1"
            className="absolute top-0 left-0 w-full rounded-lg opacity-60"
          />
          {/* Image 2 (Middle) */}
          <img
            src="./src/assets/images/spa2.jpg"
            alt="Spa2"
            className="absolute w-full rounded-lg top-4 left-4 opacity-80"
          />
          {/* Image 3 (Front) */}
          <img
            src="./src/assets/images/massage.jpg"
            alt="Massage"
            className="absolute w-full rounded-lg shadow-lg top-8 left-8"
          />
        </div>
      </section>
    );
  };
  
  export default AboutUs;