import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { Button } from 'react-bootstrap';

const TemperatureModal = ({ isOpen, onRequestClose, onSelectTemperature }) => {
  const [selectedTemperature, setSelectedTemperature] = useState(null);

  const handleSelectTemperature = (temperature) => {
    setSelectedTemperature(temperature);
  };

  const handleConfirm = () => {
    if (selectedTemperature) {
      onSelectTemperature(selectedTemperature);
      onRequestClose(); // Close the modal after selecting temperature
    }
  };

  const temperatureLevels = {
    1: '시원함(15~20도)',
    2: '적당함(20~25도)',
    3: '따뜻함(25~30도)'
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="relative w-full max-w-lg h-auto mx-auto p-6 bg-white rounded-lg shadow-xl"
      overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center"
      ariaHideApp={false}
      shouldCloseOnOverlayClick={false}
    >
      <h2 className="text-xl font-semibold mb-6 text-center">식물을 둘 온도를 설정하세요</h2>
      <div className="flex flex-col gap-4">
        {Object.keys(temperatureLevels).map((level) => (
          <Button
            key={level}
            variant="outline-primary"
            onClick={() => handleSelectTemperature(level)}
            className={`w-full py-8 rounded-lg border-2 ${
              selectedTemperature === level ? 'border-blue-500 text-blue-500 bg-blue-100' : 'border-gray-300 text-gray-600 hover:bg-gray-100'
            }`}
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