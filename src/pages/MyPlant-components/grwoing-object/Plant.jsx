import React, {useState} from 'react'

const Plant = ({handlePlantGrow}) => {
  // 1 ~ 3 단계까지 성장
  const [growingState, setgrowingState] = useState(1)
  return (
    <>
      {/* 받침대 */}
      <div className='w-full h-4/5 absolute -bottom-0 left-0 flex justify-start'>
        <img 
          src={`${process.env.PUBLIC_URL}/asset/growingPlant/vase-big.png`} 
          alt={`식물 성장 상태-${growingState}`}
          loading='lazy'
          className='w-full h-[100%] object-cover'
        />
      </div>
      {/* plantWrapper */}
      <div className='w-full flex justify-start absolute top-0 left-0 h-3/5'>
        <img 
          src={`${process.env.PUBLIC_URL}/asset/growingPlant/growing-${growingState}.png`} 
          alt={`식물 성장 상태-${growingState}`}
          loading='lazy'
           />
      </div>

    
    
    </>
  )
}

export default Plant