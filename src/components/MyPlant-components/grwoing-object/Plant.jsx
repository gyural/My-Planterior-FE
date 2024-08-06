import React, {useEffect, useState} from 'react'
import plantBottomBtn from './plantBottomBtn'
import '../animation.css'
import Tooltip from './Toolkit'
import { emotionMessage } from '../message'
const Plant = ({
  currentGrow, 
  isRain, 
  handleWateringClick, 
  plantEmotion,
  onClickHandler,
  currentWater,
  waterLevel
}) => {

  // 메시지 목록
  const [messages, setmessage] = useState(emotionMessage[`grow${currentGrow}`].happy)
  
  const getRandomMessage = (messages) => {
    // messages 배열 중에 하나를 랜덤으로 추출
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  };
  // plant apear Animation
  const [isAnimating, setIsAnimating] = useState(false);
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
      const meeeagesList = emotionMessage[`grow${currentGrow}`][`${plantEmotion}`]
      setmessage(getRandomMessage(meeeagesList))
    }, 300); // 애니메이션 지속 시간과 일치하게 설정
  }, [currentGrow, plantEmotion]);
  return (
    <>
      {/* Bottom Buttons */}
      <div className='w-full absolute bottom-0 left-0 flex justify-start'
        >
        <div className='w-full flex relative justify-around p-0 mb-4'>
          {/* Water-Button */}
          

          <button
            onClick={handleWateringClick}
            className={
              `${isRain ? '  bg-blue-600 rotate-animation' : 'bg-white bounce-animation'}
              w-14 h-14 rounded-full relative flex justify-center items-center`}
            >
              <h3 className='absolute -top-7 text-2xl w-full text-white'>{currentWater}/{waterLevel}</h3>
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
      <div className={`w-full ${currentGrow === 3 ? 'h-[140%]' : 'h-full'} absolute bottom-1/2 left-0`}
        
      >
        <div className="w-full h-full flex flex-col items-center justify-center"
          onClick={onClickHandler}
        >
          <div className="p-6">
            <Tooltip
              arrowPosition="bottom"
              className="mb-4"
              message={messages}
            />
          </div>
          {/* plantEmotion에 따라서 이미지 파일 변환 */}
          <img
            src={`${process.env.PUBLIC_URL}/asset/emotion/grow-${currentGrow}/${plantEmotion}.png`}
            alt={`식물 성장 상태-${currentGrow}`}
            loading="lazy"
            className={`
             transition-transform duration-300
              ${isAnimating ? 'scale-90' : ''} 
              object-contain object-center`}
          />
        </div>
      </div>
      
      
    
    </>
  )
}

export default Plant