import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { Button } from 'react-bootstrap';

const WaterEventModal = ({ isOpen, onRequestClose, onSelectWateringFrequency }) => {
  const [selectedFrequency, setSelectedFrequency] = useState('');

  const handleSelectFrequency = (frequency) => {
    setSelectedFrequency(frequency);
  };

  const handleConfirm = () => {
    if (selectedFrequency) {
      onSelectWateringFrequency(selectedFrequency);
      onRequestClose(); // Close the modal after selecting frequency
    }
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="relative w-full max-w-lg h-auto mx-auto p-6 bg-white rounded-lg shadow-xl"
      overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75"
      ariaHideApp={false}
    >
      <h2 className="text-xl font-semibold mb-6 text-center">물 주는 빈도를 선택하세요</h2>
      <div className="flex flex-col gap-4">
        {[1, 2, 3].map((frequency) => (
          <Button
            key={frequency}
            variant="outline-primary"
            onClick={() => handleSelectFrequency(frequency)}
            className={`w-full py-3 rounded-lg border-2 ${
              selectedFrequency === frequency ? 'border-blue-500 text-blue-500 bg-blue-100' : 'border-gray-300 text-gray-600 hover:bg-gray-100'
            }`}
          >
            {`한 달에 ${frequency}번`}
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

export default WaterEventModal;