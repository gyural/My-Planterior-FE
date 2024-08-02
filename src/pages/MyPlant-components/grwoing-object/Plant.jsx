import React, {useState} from 'react'

const Plant = ({currentGrow}) => {
  // 1 ~ 3 단계까지 성장
  return (
    <>
      {/* 받침대 */}
      <div className='w-full h-4/5 absolute -bottom-0 left-0 flex justify-start'>
        <img 
          src={`${process.env.PUBLIC_URL}/asset/growingPlant/vase-big.png`} 
          alt={`식물 성장 상태-${currentGrow}`}
          loading='lazy'
          className='w-full h-[100%] object-cover'
        />
      </div>
      {/* plantWrapper */}
      <div className='w-full flex justify-start absolute bottom-1/2 left-0'>
        <img 
          src={`${process.env.PUBLIC_URL}/asset/growingPlant/growing-${currentGrow}.png`} 
          alt={`식물 성장 상태-${currentGrow}`}
          loading='lazy'
          className='w-4/5 object-contain object-center'
           />
      </div>
      
    
    
    </>
  )
}

export default Plant