import React from 'react';

const AboutUs = () => {
  return (
    <div className="flex flex-row items-center justify-between px-6 py-12 lg:px-20">
      {/* About Us Content */}
      <div className="w-full max-w-2xl mb-12 text-start">
        <h2 className="mb-4 text-4xl font-bold text-gray-600">
          About <span className="text-yellow-700">Us</span>
        </h2>
        {/* <p className="text-gray-600 w-[50px] text-md text-wrap md:w-auto">
          We are dedicated to providing the best wellness and beauty services.
          Our mission is to help you relax, rejuvenate, and feel your best with
          premium spa treatments, facial care, and wellness programs.
        </p> */}
        <p className="text-gray-600 w-[50px] text-md text-wrap md:w-auto">
          We are dedicated to providing the best wellness and beauty services. Our mission is to help you relax, rejuvenate, and feel your best with premium spa treatments, facial care, and wellness programs. We also offer holistic therapies, personalized skincare solutions, and luxurious body treatments designed to restore balance, enhance your natural glow, and promote overall well-being.
        </p>
      </div>

      {/* Image Container */}
      <div className="relative w-full max-w-lg h-[250px]">
        {/* First Image */}
        <img
          src="./src/assets/images/spa1.jpg"
          alt="Spa 1"
          className="absolute top-0 left-0 rounded-lg shadow-lg w-[150px] h-[100px]"
        />

        {/* Second Image */}
        <img
          src="./src/assets/images/spa2.jpg"
          alt="Spa 2"
          className="absolute border-4 border-white rounded-lg shadow-lg top-10 left-20  w-[150px] h-[100px]"
        />

        {/* Third Image */}
        <img
          src="./src/assets/images/spa5.jpg"
          alt="Spa 3"
          className="absolute border-4 border-white rounded-lg shadow-lg top-20 left-40 [150px] h-[100px]"
        />
        {/* Fourth Image */}
        <img
          src="./src/assets/images/spa5.jpg"
          alt="Spa 3"
          className="absolute border-4 border-white rounded-lg shadow-lg top-32 left-60 [150px] h-[100px]"
        />
      </div>
    </div>
  );
};

export default AboutUs;