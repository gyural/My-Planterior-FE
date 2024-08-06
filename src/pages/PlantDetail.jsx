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
  console.log(plant)
  // 향기 단계 변환 함수
  const getScentLevel = (scent) => {
    switch (scent) {
      case '없음':
        return 1;
      case '거의 없음':
        return 2;
      case '약함':
        return 3;
      case '중간':
        return 4;
      case '강함':
        return 5;
      default:
        return '정보 없음';
    }
  };
  // 햇빛 단계 변환 함수
  const getSunLevel = (sun) => {
    switch (sun) {
      case '낮은 광도(300~800 Lux)':
        return 1;
      case '중간 광도(800~1,500 Lux)':
        return 2;
      case '높은 광도(1,500~10,000 Lux)':
        return 3;
      default:
        return '정보 없음';
    }
  };
  // 온도 단계 변환 함수
  const getTemperatureLevel = (temperature) => {
    switch (temperature) {
      case '"10~15℃"':
        return 1;
      case "16~20℃":
        return 2;
      case "21~25℃":
        return 3;
      default:
        return '정보 없음';
    }
  };

  if (!plant) {
    return <p>식물 데이터를 불러오는 중입니다...</p>;
  }
  console.log(getTemperatureLevel(plant.smellCodeName))
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
        <p className="text-left mb-2">온도 요구량</p>
        <img
          src={`${process.env.PUBLIC_URL}/asset/Guages/temperature-${getTemperatureLevel(plant.temperature)}.png`}
          alt={`온도 ${getTemperatureLevel(plant.temperature)}`}
          className="w-full mb-4"
        />
        <p className="text-left mb-2">물 요구량</p>
        <img
          src={`${process.env.PUBLIC_URL}/asset/Guages/water-1.png`}
          alt={`물 1`}
          className="w-full mb-4"
        />
        <p className="text-left mb-2">향기 단계: {plant.smellCodeName}</p>
        {/* 향기 햇빛 Container */}
        <div className='flex gap-4'>
          {/* sun container */}
          <div className='w-1/2 justify-center items-center flex-col'>
          <img 
            src={`${process.env.PUBLIC_URL}/asset/SunType/sunlevel-${getSunLevel(plant.lightDemand)}.png`} 
            alt={`향기-${getSunLevel(plant.lightDemand)}`}
            className='w-full'
            />
          </div>
          
          {/* scent container */}
          <div className='w-1/2 flex justify-center items-center flex-col'>
            <img 
              src={`${process.env.PUBLIC_URL}/asset/Guages/scent-${getScentLevel(plant.smellCodeName)}.png`} 
              alt={`향기-${getScentLevel(plant.smellCodeName)}`}
              className='w-full'
              />
          </div>

          
        </div>
        {/* textContainer */}
        <div className='flex w-full justify-around'>
          <p>{plant.lightDemand.slice(0,5)}</p>
          <p>{plant.smellCodeName}</p>
        </div>
      </div>
    </div>
  );
};

export default PlantDetail;