import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PlantDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { plant } = location.state || {}; // 전달된 식물 데이터 받기

  if (!plant) {
    return <p>식물 데이터를 불러오는 중입니다...</p>;
  }

  return (
    <div className="container mx-auto p-4 relative flex flex-col items-start">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 bg-transparent text-2xl text-gray-600 hover:text-gray-800 focus:outline-none"
      >
        &lt;
      </button>
      <h1 className="text-2xl w-full font-bold mb-4">{plant.plantName}은요...</h1>
      <p className="text-left w-full m-0">온도 요구량: {plant.similarity_percentage}%</p>
      <img src={`${process.env.PUBLIC_URL}/asset/Guages/temperature-1.png`} alt={`온도 1`} className="w-full mb-4" />
      <p className="text-left w-full m-0">물 요구량: {plant.similarity_percentage}%</p>
      <img src={`${process.env.PUBLIC_URL}/asset/Guages/water-1.png`} alt={`물 1`} className="w-full mb-4" />
      <p className="text-left w-full m-0">햇빛 요구량: {plant.similarity_percentage}%</p>
    </div>
  );
};

export default PlantDetail;