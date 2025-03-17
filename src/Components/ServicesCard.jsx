import React from "react";


const ServicesCard = ({ name, image }) => {
  return (
    <div className="w-[220px] h=[220px] overflow-hidden duration-500 bg-gray-100 hover:underline decoration-yellow-700 decoration-1 rounded-2xl border-gray-300 border-2">
      <div className="h-[150px] w-full overflow-hidden hover:scale-[1.1] duration-500">
        <img src={image} alt={name} className="w-full h-[150px] cover " />
      </div>
        <div className="p-4 text-center text-yellow-700">
          <h3 className="text-lg font-bold">{name}</h3>
        </div>
      </div>
    );
  };

export default ServicesCard;