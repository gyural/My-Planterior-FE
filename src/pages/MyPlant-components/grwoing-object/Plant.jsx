import React, {useEffect, useState} from 'react'
import plantBottomBtn from './plantBottomBtn'
import '../animation.css'
import { getKakaoUserDataTest } from '../../../services/authAPI'
const Plant = ({currentGrow, isRain, handleWateringClick}) => {
  useEffect(() => {
    const fetchTest = async () =>{
      await getKakaoUserDataTest()
    }
  
    fetchTest()
  }, [])
  
  // 1 ~ 3 단계까지 성장
  return (
    <>
      {/* Bottom Buttons */}
      <div className='w-full absolute bottom-0 left-0 flex justify-start'>
        <div className='w-full flex justify-around p-0 mb-4'>
          {/* Water-Button */}
          <button
            onClick={handleWateringClick}
            className={
              `${isRain ? 'bg-blue-600 rotate-animation' : 'bg-white bounce-animation'}
              w-14 h-14 rounded-full flex justify-center items-center overflow-hidden`}
            >
              <img 
                src={`${process.env.PUBLIC_URL}/asset/growingPlant/plantBottomButton/water.png`} 
                alt='Water' 
                className='w-4/5 h-4/5 object-contain'
              />
          </button>
          {/* Other Buttons */}
          {plantBottomBtn.map((btn, idx) => {
            return (
              <button 
                key={btn.type} 
                className={`${'bg-white'} 
                w-14 h-14 rounded-full flex justify-center items-center overflow-hidden`}
              >
                {currentGrow > 1+idx ? (
                  <img 
                    src={btn.image} 
                    alt={btn.type} 
                    className='w-4/5 h-4/5 object-contain'
                  />
                  ) : (
                    <div className='w-4/5 h-4/5'></div>
                  )}
              </button>
            )
          })}
        </div>
      </div>
      {/* plantWrapper */}
      <div className={`w-full ${currentGrow === 3 ? 'h-[120%]' : 'h-full'} absolute bottom-1/3 left-0`}>
        <div className='w-full h-full flex flex-col items-center justify-center'>
          <div className="relative bg-white p-4 rounded-lg shadow-lg mb-4">
            <div className="absolute top-full left-1/4 transform -translate-x-1/2 w-0 h-0 border-t-[10px] border-t-white border-x-[10px] border-x-transparent"></div>
            <div className='font-semibold'>너가 날 좋아했으면 좋겠어</div>
          </div>
          <img 
            src={`${process.env.PUBLIC_URL}/asset/growingPlant/newGrowing/growing-${currentGrow}.png`} 
            alt={`식물 성장 상태-${currentGrow}`}
            loading='lazy'
            className={`${currentGrow === 3 ? 'w-3/4' : 'w-1/2'} object-contain object-center`}
            />

        </div>
      </div>
      
      
    
    </>
  )
}

export default Plant