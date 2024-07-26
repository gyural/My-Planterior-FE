import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { Button, Image } from 'react-bootstrap';

const SunEventModal = ({ isOpen, onRequestClose, onSelectSun, sunTypeData }) => {
  const [selectedSun, setSelectedSun] = useState(null);

  const handleSelectSun = (sun) => {
    setSelectedSun(sun);
  };

  const handleConfirm = () => {
    if (selectedSun) {
      onSelectSun(selectedSun);
      onRequestClose(); // Close the modal after selecting sun level
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
      <h2 className="text-2xl font-semibold mb-8 text-center">햇빛의 정도를 선택하세요</h2>
      <div className="flex justify-around gap-2 mb-6">
        {sunTypeData?.map((sunItem) => (
          <Button
            key={sunItem.type}
            variant="outline-primary"
            onClick={() => handleSelectSun(sunItem.type)}
            className={`flex flex-col items-center p-2 rounded-lg border-2 transition ${
              selectedSun === sunItem.type
                ? `border-${sunItem.color}-500 text-${sunItem.color}-500 bg-${sunItem.color}-100`
                : 'border-gray-300 text-gray-600 hover:bg-gray-100'
            }`}
            style={{ width: '120px', height: '180px' }}
          >
            <Image
              src={sunItem.image}
              alt={sunItem.alt}
              className="w-full h-16 mb-1"
            />
            <span className="text-lg font-medium">{sunItem.type}</span>
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

export default SunEventModal;