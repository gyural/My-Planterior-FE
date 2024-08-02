import React, { useEffect, useState } from 'react'
import submitRecommandPlant from '../services/privateAPI'
import PlantCard from './Recommand-components/PlantCard'
import { growState } from '../atoms/growAtom'
import { useRecoilValue } from 'recoil';
import { authState } from '../atoms/authAtom';

const RecommendPage = () => {
  const grow_state = useRecoilValue(growState);
  const auth_state = useRecoilValue(authState)
  const [recommandData, setrecommandData] = useState(null)
  useEffect(() => {
    const fetch_recomand_data = async () => {
      const res = await submitRecommandPlant(grow_state)
      if(res){
        setrecommandData(res)
      }
    }
    console.log(recommandData)
    
    fetch_recomand_data()
  }, [])
  console.log(recommandData)
  return (
    <div className="w-full flex flex-col items-center px-4 py-4">
      <div className="bg-neutral-100 w-full max-w-3xl pt-10 px-4 rounded-lg shadow-md ">
      <h2 className="text-lg text-gray-900 mb-10">
        <strong className="underline text-xl">
          {auth_state.name ? `${auth_state.name}님` : '고객님'}
        </strong>
        {auth_state.name ? '을 위한 맞춤형 식물들을 소개할게요!' : '맞춤형 식물들을 소개할게요!'}
      </h2>
        {recommandData?  (
          recommandData.map((plant, index) => (
            <PlantCard 
              key={index}
              img_path={plant.imageSource[0]}
              name={plant.plantName}
              fit={plant.similarity_percentage}
              // buylink={}
            />
          ))
        ) : (
          <p className="text-center text-gray-700">추천식물을 불러오는 중입니다.</p>
        )}
      </div>
    </div>
  )
}

export default RecommendPage