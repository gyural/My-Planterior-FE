import React, { useState, useEffect } from 'react';
import ConfirmModal from './MyPlant-components/ConfirmModal';
import DifficultyModal from './MyPlant-components/DifficultyModal';
import PlantImageModal from './MyPlant-components/PlantImageModal';
import { authState } from '../atoms/authAtom';
import { useRecoilState, useRecoilValue } from 'recoil';
import plantImg from '../plantData/plantType';
import plantDifficulties from '../plantData/plantDifficulty';
import PlantGrowing from './MyPlant-components/PlantGrowing';
import { growState } from '../atoms/growAtom';

const MyPlant = () => {
  // auth-state
  const auth = useRecoilValue(authState);
  // grow-state
  const [grow, setGrowState] = useRecoilState(growState)
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
          setGrowState((prevState) => ({
            ...prevState,
            level: selectedDifficulty === '쉬움' ? 100 : selectedDifficulty === '보통' ? 200 : selectedDifficulty === '어려움' ? 300 : prevState.level
          }));
          handleDifficultyClose();
        }} 
      />
      {/* 식물 선택 모달 */}
      <PlantImageModal
        isOpen={plantTypeModal}
        onRequestClose={handlePlantTypeClose}
        onSelectImage={(selectedPlantType) => {
          setPlantType(plantImg[selectedPlantType]);
          const type = plantImg[selectedPlantType].type
          handlePlantTypeClose();
          setGrowState((prevState) => ({
            ...prevState,
            purpose: type === '잎식물' ? 10 : 
            type === '꽃보기식물' ? 20 : 
            type === '열매보기식물' ? 50 : 
            type === '잎, 꽃보기 식물' ? 30 : 
            type === '선인장 다육식물' ? 40 :prevState.purpose
          }));
        }}
        plants={plantImg}
      />
      {plantType && <PlantGrowing onComplete={handleCompleteShow}></PlantGrowing>}
    </div>
  );
}

export default MyPlant;