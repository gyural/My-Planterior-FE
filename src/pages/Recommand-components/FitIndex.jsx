import React from 'react';


const FitIndex = ({ fit }) => {
  // fit 값을 100% 기준에서 5점 만점으로 변환
  const fitScore = (fit / 100) * 5;
  console.log(fitScore)

  const getPratial = (idx, fit) => {
    const getFloat = (idx+1) - fit 
    if(getFloat > 1){
      return 100
    }else{
      return (1 -getFloat) * 100
    }
  }
  return (
    <div className='flex items-center mb-1'>
  <div className='relative w-full h-6 flex'>
    {[...Array(5)].map((_, idx) => (
      <div
        key={idx}
        className=' flex justify-center items-center relative'
      >
        <div className='relative h-4 w-4 mr-3'>
          <img
            src={`${process.env.PUBLIC_URL}/asset/recommand-index.png`}
            alt={`Fit Index ${idx + 1}`}
            className='relative top-0 left-0 h-full w-full object-cover'
          />
          {fitScore < (idx + 1) && (
            <div
              className='absolute top-0 left-0 h-full w-full'
              style={{
                background: `linear-gradient(to right, rgba(0, 0, 0, 0) 0%, #fff ${getPratial(fitScore, idx)}%)`,
                zIndex: 10,  // Ensure this value is higher than the image
              }}
            />
          )}
        </div>
      </div>
    ))}
  </div>
</div>
  );
};

export default FitIndex;