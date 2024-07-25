import React, { useState, useEffect } from 'react';
import Watering from './Watering';
import { Icon } from '@iconify/react';
import WaterEventModal from './growingEvent/WaterEventModal';

const PlantGrowing = () => {
  // 비오는 상태
  const [isRain, setIsRain] = useState(false);
  // 물 레벨 모달
  const [waterLevel, setwaterLevel] = useState(null)
  const [WaterEventModalOpen, setWaterEventModalOpen] = useState(false)
  const closeWaterModal = () =>{
    setWaterEventModalOpen(false)
  }

  const handleWateringClick = () => {
    if (!isRain) {
      setIsRain(true);
      setTimeout(() => {
        setIsRain(false);
      }, 3000); // 3초 후에 false로 변경
    }
  };

  useEffect(() => {
    setWaterEventModalOpen(true)
  
    
  }, [])
  
  return (
    <div
      className={`w-full h-screen bg-cover bg-center relative ${isRain ? 'bg-blue-100' : ''}`}
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/asset/plantPlace/bed-room.png)` }}
    >
      {/* Watering Button */}
      <button
        onClick={handleWateringClick}
        className={`absolute top-4 left-4 p-2 text-white rounded-full focus:outline-none ${
          isRain ? 'bg-blue-600' : 'bg-neutral-400  '
        }`}
      >
        <Icon className="w-8 h-8" icon="iconoir:watering-soil" />
      </button>

      {isRain && <Watering />}

      <WaterEventModal isOpen={WaterEventModalOpen} 
      onRequestClose={closeWaterModal} 
      onSelectWateringFrequency={setwaterLevel}></WaterEventModal>
    </div>
  );
};

export default PlantGrowing;