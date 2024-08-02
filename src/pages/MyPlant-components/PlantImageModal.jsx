import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { Button, Image } from 'react-bootstrap';

const PlantImageModal = ({ isOpen, onRequestClose, onSelectImage, plants }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSelectImage = (image) => {
    setSelectedImage(image);
  };

  const handleConfirm = () => {
    if (selectedImage !== null) {
      onSelectImage(selectedImage);
      onRequestClose(); // Close the modal after selecting image
    }
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="relative w-full max-w-2xl h-[80%] mx-auto my-8 p-6 bg-white rounded-lg shadow-xl overflow-auto"
      overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center"
      ariaHideApp={false}
    >
      <h2 className="text-xl mb-6 text-center font-bold">이미지를 선택하세요</h2>
      <div className="grid grid-cols-3 gap-4">
        {plants.map((plant, index) => (
          <button
            key={index}
            variant="outline-primary"
            onClick={() => handleSelectImage(index)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'center',
              padding: '8px',
              borderRadius: '8px',
              border: `2px solid ${selectedImage === index ? 'blue' : 'gray'}`,
              backgroundColor: `${selectedImage === index ? '#0d6efd' : 'white'}`,
              color: `${selectedImage === index ? 'white' : 'gray'}`,
              transition: 'background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease',
              cursor: 'pointer',
            }}
          >
            <Image 
              src={plant.src} 
              alt={plant.alt} 
              className="max-w-full max-h-full object-contain"
            />
            <span style={{ fontSize: '18px', fontWeight: '500' }}>{plant.type}</span>
          </button>
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
}

export default PlantImageModal;