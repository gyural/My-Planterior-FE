import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { Button} from 'react-bootstrap';

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
      shouldCloseOnOverlayClick={false}
    >
      <h2 className="text-2xl font-semibold mb-8 text-center">난이도를 선택하세요</h2>
      <div className="flex justify-around gap-2 mb-6">
      {difficulties?.map((difficulty) => (
        <button
          key={difficulty.type}
          onClick={() => handleSelectDifficulty(difficulty.type)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '8px',
            borderRadius: '8px',
            border: `2px solid ${selectedDifficulty === difficulty.type ? 'blue' : 'gray'}`,
            backgroundColor: `${selectedDifficulty === difficulty.type ? '#0d6efd' : 'white'}`,
            color: `${selectedDifficulty === difficulty.type ? 'white' : 'gray'}`,
            width: '120px',
            height: '180px',
            transition: 'background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            if (selectedDifficulty !== difficulty.type) {
              e.target.style.backgroundColor = 'lightgray';
            }
          }}
          onMouseLeave={(e) => {
            if (selectedDifficulty !== difficulty.type) {
              e.target.style.backgroundColor = 'white';
            }
          }}
        >
          <img
            src={difficulty.image}
            alt={difficulty.alt}
            style={{
              width: '100%',
              height: '64px', // Tailwind's 16
              marginBottom: '4px', // Tailwind's 1
            }}
          />
          <span style={{ fontSize: '18px', fontWeight: '500' }}>{difficulty.type}</span>
        </button>
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