import React from "react";


const ServicesCard = ({ name, image }) => {
  return (
    <div className="w-[220px] h-[220px] shadow-lg rounded-lg overflow-hidden shadow-gray-600 duration-500 font-semibold ">
        <img src={image} alt={name} className="w-full h-[150px] object-cover cover hover:scale-[1.1] duration-500" />
        <div className="p-4 text-center text-yellow-700">
          <h3 className="text-lg font-bold">{name}</h3>
        </div>
      </div>
    );
  };

export default ServicesCard;