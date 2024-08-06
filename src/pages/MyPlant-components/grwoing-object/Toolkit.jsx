// Tooltip.js
import React, { useState } from 'react';

const Tooltip = ({ msgIndex, className, arrowPosition, messages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  console.log(msgIndex)

  return (
    <div
      className={`relative ${className}`}
    >
      {/* 화살표 */}
      {arrowPosition === 'bottom' && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-[10px] border-t-white border-x-[10px] border-x-transparent"></div>
      )}
      {arrowPosition === 'top' && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-b-[10px] border-b-white border-x-[10px] border-x-transparent"></div>
      )}
      {/* 컨텐츠 */}
      <div
        className={`bg-white p-4 rounded-lg shadow-lg transition-transform duration-300 ${isOpen ? 'scale-105' : 'scale-100'}`}
      >
        {messages[msgIndex]}
      </div>
    </div>
  );
};

export default Tooltip;