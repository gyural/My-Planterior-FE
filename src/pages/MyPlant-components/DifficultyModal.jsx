import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { Button, Image } from 'react-bootstrap';

const DifficultyModal = ({ isOpen, onRequestClose, onSelectDifficulty, difficulties }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('');

  const handleSelectDifficulty = (difficulty) => {
    setSelectedDifficulty(difficulty);
  };

  const handleConfirm = () => {
    if (selectedDifficulty) {
      onSelectDifficulty(selectedDifficulty);
      onRequestClose(); // Close the modal after selecting difficulty
    }
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="relative w-full max-w-3xl mx-auto my-8 p-6 bg-white rounded-lg shadow-xl"
      overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center"
      ariaHideApp={false}
    >
      <h2 className="text-2xl font-semibold mb-8 text-center">난이도를 선택하세요</h2>
      <div className="flex justify-around gap-2 mb-6">
        {difficulties?.map((difficulty) => (
          <Button
            key={difficulty.type}
            variant="outline-primary"
            onClick={() => handleSelectDifficulty(difficulty.type)}
            className={`flex flex-col items-center p-2 rounded-lg border-2 transition ${
              selectedDifficulty === difficulty.type
                ? `border-${difficulty.color}-500 text-${difficulty.color}-500 bg-${difficulty.color}-100`
                : 'border-gray-300 text-gray-600 hover:bg-gray-100'
            }`}
            style={{ width: '120px', height: '180px' }}
          >
            <Image
              src={difficulty.image}
              alt={difficulty.alt}
              className="w-full h-16 mb-1"
            />
            <span className="text-lg font-medium">{difficulty.type}</span>
          </Button>
        ))}
      </div>
      <div className="flex justify-center">
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

export default DifficultyModal;