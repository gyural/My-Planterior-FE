import React, { useState, useEffect } from 'react';
import Watering from './Watering';
import WaterEventModal from './growingEvent/WaterEventModal';
import SunEventModal from './growingEvent/SunEventModal';
import TemperatureModal from './growingEvent/TeperatureModal';
import SunData from '../../plantData/SunData'
import { growState } from '../..//atoms/growAtom';
import { useRecoilState } from 'recoil';
import Plant from './grwoing-object/Plant';
import './animation.css'
import GaugeBar from '../../components/GaugeBar';

const PlantGrowing = ({onComplete}) => {
  // 제출용growing-state
  const [grow, setGrowState] = useRecoilState(growState)
  // 식물 성장 상태
  const [currentGrow, setCurrentGrow] =useState(1)
  // 비오는 상태
  const [isRain, setIsRain] = useState(false);
  // 물 레벨 모달
  const [waterLevel, setwaterLevel] = useState(null)
  const [WaterEventModalOpen, setWaterEventModalOpen] = useState(true)
  // 햇빛 모달
  const [sunlevel, setsunlevel] = useState(null)
  const [isSunEventModalOpen, setisSunEventModalOpen] = useState(null)
  const [isWeatherIcon, setisWeatherIcon] = useState(false)
  const [currentWater, setCurrentWater] = useState(null)
  // temperatureModal
  const [temperatureLevel, setTemperatureLevel] = useState(null)
  const [isTemperatureModalOpen, setisTemperatureModalOpen] = useState(null)
  const [temperature, settemperature] = useState(null)
  // clse Modal Handling
  const closeWaterModal = () =>{
    setWaterEventModalOpen(false)
  }
  const closeSunModal = () =>{
    setisSunEventModalOpen(false)
    // 햇빛 애니매이션

    // 햇빛 아이콘 visible
    setisWeatherIcon(true)
    // 식물 2단계로 성장
    handlePlantGrow(currentGrow)
    // 물 충전
    setCurrentWater(waterLevel)
  }
  const closeTemperatureMdal = () =>{
    setisTemperatureModalOpen(false)
    //  온도 설정 애니매이션
    
    // 식물 3단계로 성장
    handlePlantGrow(currentGrow)
    // 물 충전
    setCurrentWater(waterLevel)
  }
  const handleWaterLever = (value) =>{
    setwaterLevel(value)
    setCurrentWater(value)
    setGrowState((prevState) => ({
      ...prevState,
      water_need: value === 1 ? 10 : 
      value === 2 ? 20 : 
      value === 3 ? 30 :prevState.level
    }));
  }
  const handleSunLevel = (value) =>{
    setsunlevel(value)
    setGrowState((prevState) => ({
      ...prevState,
      sunright: value === 1 ? 10 : 
      value === 2 ? 20 : 
      value === 3 ? 30 :prevState.level
    }));
  }
  const handleWateringClick = () => {
    if (!isRain) {
      setIsRain(true);
      setTimeout(() => {
        setIsRain(false);
      }, 3000); // 3초 후에 false로 변경

      setCurrentWater(currentWater-1)
    }
  };
  // 식물 성장
  const handlePlantGrow = (prev) =>{
    // 식물 성장 애니매이션
    setCurrentGrow(prev+1)
  }
  // plant-growing-source
  
  useEffect(() => {
    if(currentWater===0){
      if(isSunEventModalOpen===null){
        // sunModalOpen
        setTimeout(() => {
          setisSunEventModalOpen(true)
        }, 3500); // 3초 후에 false로 변경
      }else if(isTemperatureModalOpen===null){
        // 식물 성장 애니매이션 

        // 온도 선택 모달 open
        setTimeout(() => {
          setisTemperatureModalOpen(true)
        }, 3500); 
      }else{
        // 식물 최종 성장

        // 식물 추천 연결 모달 생성
        setTimeout(() => {
          onComplete()

        }, 3500); 
      }
      
    }
  }, [currentWater])
  
  return (
    <div
      className={`w-full h-[100vh] bg-cover bg-center relative ${isRain ? 'bg-blue-100' : ''}`}
      style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL}/asset/growingPlant/bedroom-bg-new.png)`,
        backgroundSize: 'cover'
        
      }}
    >
      <div className='w-full h-8 flex justify-center mx-auto absolute top-4'>
        {/* 4칸으로 구분되는 게이지 바좀 만들어줘 */}
        <GaugeBar currentGrow={currentGrow}></GaugeBar>
      </div>
      {/*식물 */}
      {/* plant-Container */}
      <div className='w-full h-1/2 absolute bottom-0 left-0'>
      <Plant 
        handleWateringClick={handleWateringClick}
        isRain={isRain} 
        currentGrow={currentGrow}>
      </Plant>

      </div>
      
      {/* Watering Button */}
      {/* <button
        onClick={handleWateringClick}
        className={`absolute top-4 left-4 p-2 text-white rounded-full focus:outline-none ${
          isRain ? 'bg-blue-600 rotate-animation' : 'bg-neutral-400 bounce-animation'
        }`}
      >
        <Icon className="w-8 h-8" icon="iconoir:watering-soil" />
      </button> */}

      {isRain && <Watering />}
      {/* WaterEventModal */}
      <WaterEventModal isOpen={WaterEventModalOpen} 
      onRequestClose={closeWaterModal} 
      onSelectWateringFrequency={handleWaterLever}>

      </WaterEventModal>


      {/* SunEventModal */}
      <SunEventModal 
        isOpen={isSunEventModalOpen}
        onRequestClose={closeSunModal}
        onSelectSun={handleSunLevel}
        sunTypeData={SunData}
        ></SunEventModal>
      {/* TemperatureEventModal */}
      <TemperatureModal
        isOpen={isTemperatureModalOpen}
        onRequestClose={closeTemperatureMdal}
        onSelectTemperature={setTemperatureLevel}
      >
      </TemperatureModal>
      {/* WeatherIconContainer */}
      {/* <div className='absolute top-4 right-4'>
        {isWeatherIcon &&
        <Weather sunlevel={sunlevel}></Weather>
        }
      </div> */}

    </div>

  );
};

export default PlantGrowing;