import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { Button } from 'react-bootstrap';
import { useRecoilState } from 'recoil';
import { growState } from '../../../atoms/growAtom'

const TemperatureModal = ({ isOpen, onRequestClose, onSelectTemperature }) => {
  // growing-state
  const [grow, setGrowState] = useRecoilState(growState)
  const [selectedTemperature, setSelectedTemperature] = useState(null);

  const handleSelectTemperature = (idx) => {
    setSelectedTemperature(idx);
    
    
  };

  const handleConfirm = () => {
    if (selectedTemperature >= 0) {
      onSelectTemperature(selectedTemperature);
      setGrowState((prevState) => ({
        ...prevState,
        temperature: selectedTemperature === 0 ? 10 : 
        selectedTemperature === 1 ? 20 : 
        selectedTemperature === 2 ? 30 :prevState.level
      }));
      onRequestClose(); // Close the modal after selecting temperature
    }
  };

  const temperatureLevels = {
    0: '시원함(15~20도)',
    1: '적당함(20~25도)',
    2: '따뜻함(25~30도)'
  };
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="relative w-full max-w-lg h-auto mx-auto p-6 bg-white rounded-lg shadow-xl z-10"
      overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center"
      ariaHideApp={false}
      shouldCloseOnOverlayClick={false}
    >
      <h2 className="text-xl font-semibold mb-6 text-center">식물을 둘 온도를 설정하세요</h2>
      <div className="flex flex-col gap-4">
        {Object.keys(temperatureLevels).map((level, idx) => (
          <Button
            key={level}
            variant="outline-primary"
            onClick={() => handleSelectTemperature(idx)}
            className={`w-full py-8 rounded-lg border-2 ${
              selectedTemperature === level ? 'border-blue-500 text-blue-500 bg-blue-100' : 'border-gray-300 text-gray-600 hover:bg-gray-100'
            }`}
            style={{
              backgroundColor: `${selectedTemperature === idx ? '#0d6efd' : 'white'}`,
              color: `${selectedTemperature === idx ? 'white' : 'gray'}`,
            }}

          >
            {temperatureLevels[level]}
          </Button>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <Button
          variant="primary"
          onClick={handleConfirm}
          className="w-full py-3 rounded-full bg-blue-500 text-white hover:bg-blue-600"
        >
          확인
        </Button>
      </div>
    </ReactModal>
  );
};

export default TemperatureModal;