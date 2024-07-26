import React, { useState, useEffect } from 'react';
import ConfirmModal from './MyPlant-components/ConfirmModal';
import DifficultyModal from './MyPlant-components/DifficultyModal';
import PlantImageModal from './MyPlant-components/PlantImageModal';
import { authState } from '../atoms/authAtom';
import { useRecoilValue } from 'recoil';
import plantImg from '../plantData/plantType';
import plantDifficulties from '../plantData/plantDifficulty';
import PlantGrowing from './MyPlant-components/PlantGrowing';

const MyPlant = () => {
  // auth-state
  const auth = useRecoilValue(authState);

  // Complete Modal
  const [completeModal, setCompleteModal] = useState(false);
  const handleCompleteClose = () => setCompleteModal(false);
  const handleCompleteShow = () => setCompleteModal(true);

  // Difficulty Modal
  const [difficultyModal, setDifficultyModal] = useState(false);
  const handleDifficultyClose = () => setDifficultyModal(false);
  const handleDifficultyShow = () => setDifficultyModal(true);

  // Plant Type Modal
  const [plantTypeModal, setPlantTypeModal] = useState(false);
  const handlePlantTypeClose = () => setPlantTypeModal(false);
  const handlePlantTypeShow = () => setPlantTypeModal(true);

  // 난이도
  const [difficulty, setDifficulty] = useState(null);

  // 식물 타입
  const [plantType, setPlantType] = useState(null);

  useEffect(() => {
    if (auth.isAuthenticated) {
      if (!difficulty) {
        handleDifficultyShow(); // Open difficulty modal if not set
      } else if (!plantType) {
        handlePlantTypeShow(); // Open plant type modal if difficulty is set but plant type is not
      }
    }
  }, [auth.isAuthenticated, difficulty, plantType]);

  return (
    <div className="w-full h-full" >
      <ConfirmModal show={completeModal} handleClose={handleCompleteClose} />
      {/* 난이도 모달 */}
      <DifficultyModal 
        isOpen={difficultyModal} 
        onRequestClose={handleDifficultyClose}
        difficulties={plantDifficulties}
        onSelectDifficulty={(selectedDifficulty) => {
          setDifficulty(selectedDifficulty);
          handleDifficultyClose();
        }} 
      />
      {/* 식물 선택 모달 */}
      <PlantImageModal
        isOpen={plantTypeModal}
        onRequestClose={handlePlantTypeClose}
        onSelectImage={(selectedPlantType) => {
          setPlantType(plantImg[selectedPlantType]);
          handlePlantTypeClose();
        }}
        plants={plantImg}
      />
      {plantType && <PlantGrowing onComplete={handleCompleteShow}></PlantGrowing>}
    </div>
  );
}

export default MyPlant;