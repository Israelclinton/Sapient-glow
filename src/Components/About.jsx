import React from 'react';
const About = () => {
  return (
    <div className="grid justify-between grid-cols-1 gap-6 px-6 py-12 mb-5 flex-grid sm:grid-cols-3 lg:grid-cols-4 sm:px-8items-center lg:px-20">
      {/* About Us Content */}
      <div className="w-full max-w-2xl mb-12 text-start">
        <h2 className="mb-4 text-4xl font-bold text-gray-600">
          About <span className="text-yellow-700">Us</span>
        </h2>
        <p className="text-gray-600 text-md text-wrap md:w-auto">
          We are dedicated to providing the best wellness and beauty services. Our mission is to help you relax, rejuvenate, and feel your best with premium spa treatments, facial care, and wellness programs. We also offer holistic therapies, personalized skincare solutions, and luxurious body treatments designed to restore balance, enhance your natural glow, and promote overall well-being.
        </p>
      </div>

      {/* Image Container */}
      <div className="relative w-full max-w-lg h-[250px]">
        {/* First Image */}
        <img
          src="./public/assets/images/spa1.jpg"
          alt="Spa 1"
          className="absolute top-0 left-0 rounded-lg shadow-lg w-[250px] h-[150px]"
        />

        {/* Second Image */}
        <img
          src="./public/assets/images/meditation4.jpg"
          alt="Meditation 4"
          className="absolute border-4 border-white rounded-lg shadow-lg top-20 left-16  w-[250px] h-[150px]"
        />

        {/* Third Image */}
        <img
          src="./public/assets/images/spa5.jpg"
          alt="Spa 3"
          className="absolute border-4 border-white rounded-lg shadow-lg top-40 left-36 w-[250px] h-[150px]"
        />
        {/* Fourth Image */}
        <img
          src="./public/assets/images/suite.jpg"
          alt="Suite"
          className="absolute border-4 border-white rounded-lg shadow-lg top-60 left-52 w-[250px] h-[150px]"
        />
      </div>
    </div>
  );
};

export default About;