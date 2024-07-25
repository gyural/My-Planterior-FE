import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { Button, Image } from 'react-bootstrap';

const PlantImageModal = ({ isOpen, onRequestClose, onSelectImage, plants }) => {
  const [selectedImage, setSelectedImage] = useState('');

  const handleSelectImage = (image) => {
    setSelectedImage(image);
  };

  const handleConfirm = () => {
    if (selectedImage) {
      onSelectImage(selectedImage);
      onRequestClose(); // Close the modal after selecting image
    }
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="relative w-full max-w-2xl h-[80%] mx-auto my-8 p-6 bg-white rounded-lg shadow-xl overflow-auto"
      overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75"
      ariaHideApp={false}
    >
      <h2 className="text-xl font-semibold mb-6 text-center text-pink-600">이미지를 선택하세요</h2>
      <div className="grid grid-cols-3 gap-4">
        {plants.map((plant, index) => (
          <Button
            key={index}
            variant="outline-primary"
            onClick={() => handleSelectImage(index)}
            className={`w-full h-32 flex items-center justify-center rounded-lg border-2 ${selectedImage === plant.src ? 'border-blue-500 bg-blue-100' : 'border-gray-300 text-gray-600 hover:bg-gray-100'}`}
          >
            <Image 
              src={plant.src} 
              alt={plant.alt} 
              className="max-w-full max-h-full object-contain"
            />
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
}

export default PlantImageModal;