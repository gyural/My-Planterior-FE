import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// 더미 데이터 정의
const dummyPlantData = {
  plantName: '몬스테라',
  temperature: 18, // 온도는 16~20 사이에 해당하는 단계 2
  smellCodeName: '중간', // 향기 단계는 2
  similarity_percentage: 75, // 물 요구량
};

const PlantDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { plant } = location.state || dummyPlantData; // Mock 데이터 사용

  // 향기 단계 변환 함수
  const getScentLevel = (scent) => {
    switch (scent) {
      case '없음':
        return 1;
      case '거의없음':
        return 1;
      case '약함':
        return 2;
      case '중간':
        return 2;
      case '강함':
        return 3;
      default:
        return '정보 없음';
    }
  };

  // 온도 단계 변환 함수
  const getTemperatureLevel = (temperature) => {
    if (temperature >= 10 && temperature <= 15) {
      return 1;
    } else if (temperature >= 16 && temperature <= 20) {
      return 2;
    } else if (temperature >= 21 && temperature <= 25) {
      return 3;
    } else {
      return '정보 없음';
    }
  };

  if (!plant) {
    return <p>식물 데이터를 불러오는 중입니다...</p>;
  }

  return (
    <div
      className="container mx-auto p-4 relative flex flex-col items-start"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/asset/sundol-detail.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 100%',
      }}
    >
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 bg-transparent text-2xl text-gray-600 hover:text-gray-800 focus:outline-none"
      >
        &lt;
      </button>
      <div
        className="relative p-6 bg-white border-2 border-black rounded-lg shadow-lg"
        style={{ maxWidth: '500px' }} // 최대 너비를 설정하여 컨테이너가 너무 넓어지지 않도록 합니다.
      >
        {/* 하단 뾰족이 */}
        <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-[20px] border-t-white border-x-[20px] border-x-transparent"></div>
        <h1 className="text-2xl font-bold mb-4">{plant.plantName}</h1>
        <p className="text-left mb-2">온도 요구량: {getTemperatureLevel(plant.temperature)} 단계</p>
        <img
          src={`${process.env.PUBLIC_URL}/asset/Guages/temperature-${getTemperatureLevel(plant.temperature)}.png`}
          alt={`온도 ${getTemperatureLevel(plant.temperature)}`}
          className="w-full mb-4"
        />
        <p className="text-left mb-2">물 요구량: {plant.similarity_percentage}%</p>
        <img
          src={`${process.env.PUBLIC_URL}/asset/Guages/water-1.png`}
          alt={`물 1`}
          className="w-full mb-4"
        />
        <p className="text-left mb-2">향기 단계: {getScentLevel(plant.smellCodeName)}</p>
        <p className="text-left mb-2">햇빛 요구량: {plant.similarity_percentage}%</p>
      </div>
    </div>
  );
};

export default PlantDetail;