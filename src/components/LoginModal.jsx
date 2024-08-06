import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { useSetRecoilState } from 'recoil';
import { authState } from '../atoms/authAtom';
import { submitGoogle } from '../services/authAPI';

const LoginModal = ({ isOpen, onRequestClose }) => {
  const setAuth = useSetRecoilState(authState);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="bg-white p-6 rounded-lg max-w-md mx-auto mg-auto shadow-lg outline-none"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      shouldCloseOnOverlayClick={false}
    >
      {/* 로고 */}
      <div className="flex justify-center mb-6">
        <div
          className="w-20 h-20 bg-no-repeat bg-center bg-contain"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/asset/logo.png)` }}
        />
      </div>

      {/* 안내 문구 */}
      <p className="text-center text-gray-700 mb-4">로그인을 통해 마이플렌테리어를 이용해보세요</p>

      {/* 카카오 로그인 버튼 */}
      <div className="w-full flex justify-center mb-4">
      <button 
        onClick={() => window.location.href = 'https://mpserver.shop/api/kakao/oauth/kakao/callback'}
        className="flex items-center h-12 w-full py-2 px-4 bg-[#FEE500] hover:bg-[#fee500cb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fee500cb] focus:ring-opacity-50">
        <img
          src={`${process.env.PUBLIC_URL}/asset/kakao-login-icon.png`}
          alt="Kakao"
          className="h-full mr-2"
        />
        <span className="text-black">카카오 로그인</span>
      </button>
      </div>

      {/* 구글 로그인 버튼 */}
      <div className="w-full flex justify-center mb-4">
        <button 
          className="flex items-center h-12 w-full py-2 px-4 bg-white border border-gray-300 hover:bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
          onClick={submitGoogle}
          >
          
          <img
            src={`${process.env.PUBLIC_URL}/asset/web_light_rd_na@4x.png`}
            alt="Google"
            className="h-full mr-2"
          />
          <span className="text-gray-700">구글 로그인(IOS만 가능)</span>
        </button>
      </div>
      
    </ReactModal>
  );
};

export default LoginModal;