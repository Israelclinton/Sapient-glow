import React from 'react';

const AboutUs = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-between px-6 py-12 mb-20 lg:flex-row lg:px-20">
      {/* Image Container */}
      <div className="relative w-full max-w-lg h-[250px] flex justify-center lg:justify-end">
        {/* First Image */}
        <img
          src="./src/assets/images/spa1.jpg"
          alt="Spa 1"
          className="absolute top-0 left-0 rounded-lg shadow-lg w-[250px] h-[180px]"
        />
        <img
          src="./src/assets/images/spa2.jpg"
          alt="Spa 2"
          className="absolute border-4 border-white rounded-lg shadow-lg top-20 right-24 sm:left-20 w-[250px] h-[180px]"
          />
        <img
          src="./src/assets/images/suite.jpg"
          alt="Suite"
          className="absolute border-4 border-white rounded-lg shadow-lg top-40 left-40 sm:left-56 w-[260px] h-[180px]"
        />
      </div>
      

      {/* About Us Content */}
      <div className="w-full max-w-2xl mb-8 text-center lg:text-left lg:mb-0">
        <h2 className="mb-4 text-4xl font-bold text-gray-600">
          About <span className="text-yellow-700">Us</span>
        </h2>
        <p className="text-gray-600 text-md">
          We are dedicated to providing the best wellness and beauty services. Our mission is to help you relax, rejuvenate, and feel your best with premium spa treatments, facial care, and wellness programs. We also offer holistic therapies, personalized skincare solutions, and luxurious body treatments designed to restore balance, enhance your natural glow, and promote overall well-being.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;