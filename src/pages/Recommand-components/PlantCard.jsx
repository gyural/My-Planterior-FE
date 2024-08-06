import React from 'react';
import { getProductURL } from '../../services/privateAPI';
import FitIndex from './FitIndex';
import { useNavigate } from 'react-router-dom';
const PlantCard = ({img_path, name, fit, plant}) => {

  const navigate = useNavigate()

  const handleDetailClick = (plant) => {
    navigate('/recommand/detail', { state: { plant } });
  };
  const handleProductLink = async (product) => {
    // GET product-link
    const productUrl = await getProductURL(product)
    if(productUrl){
      const newWindow = window.open(productUrl, '_blank');
      if (newWindow === null || !newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        alert('팝업이 차단되었습니다. 팝업 차단을 해제해주세요.');
      }
    }else{
      alert("상품이 등록되어있지 않습니다.")
    }
  }
  return (
    <div className="w-[100%] mx-auto my-4 bg-white shadow-md rounded-lg overflow-hidden">
      <div className="w-full aspect-w-1 aspect-h-1 flex justify-center items-center bg-gray-100">
        <img
          src={img_path}
          alt="Plant"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-3">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-700 m-0">
          적합도
        </p>
        <FitIndex fit={fit}></FitIndex>
        {/* Button-Container */}
        <div className='w-full flex gap-2'>
          <button 
            className="w-[50%] bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 font-bold"
            onClick={() => {handleProductLink(name)}}
          >
            구매하기
          </button>
          <button 
            className="w-[50%] bg-white text-green-600 py-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 font-bold shadow-md"
            onClick={() => {handleDetailClick(plant)}}
            style={{boxShadow: '0 -4px 6px rgba(0, 0, 0, 0.1)'}}
          >
            자세히 보기
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;