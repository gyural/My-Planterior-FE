import React from 'react';

const GaugeBar = ({ currentGrow }) => {
  const levels = [
    { type: 'image', src: `${process.env.PUBLIC_URL}/asset/growingPlant/newGrowing/growing-1.png`, alt: 'lv1' },
    { type: 'text', label: 'lv2' },
    { type: 'image', src: `${process.env.PUBLIC_URL}/asset/growingPlant/newGrowing/growing-3.png`, alt: 'lv4' },
  ];

  return (
    <div className='relative w-4/5 h-10'>
      {/* 게이지 바 */}
      <div className='absolute bottom-0 left-0 w-full h-6 bg-gray-200 flex justify-between'>
        {levels.map((level, idx) => (
          <div
            key={idx}
            className={`flex-1 flex justify-center items-center ${
              idx + 1 < currentGrow ? 'bg-blue-500' : 'bg-gray-300'
            } border-r border-white`}
          >
            {level.type === 'image' ? (
              <img src={level.src} alt={level.alt} className='h-full' />
            ) : (
              <span>{level.label}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GaugeBar;