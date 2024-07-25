import React from 'react';

const PlantCard = ({ img_path, name, fit }) => {
  return (
    <div className="w-[100%] mx-auto my-4 bg-white shadow-md rounded-lg overflow-hidden">
      <div className="w-full aspect-w-1 aspect-h-1 flex justify-center items-center bg-gray-100">
        <img
          src={img_path}
          alt="Plant"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{name}</h3>
        <p className="text-gray-700 mb-4">
          적합도 {fit}%
        </p>
        <button className="w-full bg-neutral-500 text-white py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2
         focus:ring-green-600 focus:ring-opacity-50 font-bold">
          구매하기
        </button>
      </div>
    </div>
  );
};

export default PlantCard;