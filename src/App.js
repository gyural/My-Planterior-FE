import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes} from 'react-router-dom';
import {useRecoilValue, useSetRecoilState } from 'recoil';
import MyPlant from './pages/MyPlant';
// import Header from './components/Header';
import Recommend from './pages/Recommend';
import LoginModal from './components/LoginModal';
import { authState } from './atoms/authAtom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getGoogleUserData, getKakaoUserData } from './services/authAPI';
import PlantDetail from './pages/PlantDetail';

function App() {
  const auth = useRecoilValue(authState); // 수정된 부분
  const setAuth = useSetRecoilState(authState); // 수정된 부분

  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    const fetchUserData = async (token) =>{
      const userData = await getGoogleUserData(token)
      if(userData){
        // google-user
        console.log('name', userData)
        setAuth((prevState) => ({
          ...prevState,
          name: userData.name
        }));
      }else{
        // kakako-user
        const kakakoUserData = await getKakaoUserData(token)
        if(kakakoUserData?.properties?.nickname){
          setAuth((prevState) => ({
            ...prevState,
            name: kakakoUserData.properties.nickname
          }));
        }else{
          // 유저 정보 얻기 실패
          console.log('get User Data Fail')
        }
      }
    }
    if (!auth.isAuthenticated) {
      // 현재 url에 token-query가 있는지 확인
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('token');
      if (token) {
        // 토큰이 있으면 인증을 시도하는 로직 추가 가능
        setShowLoginModal(false);
        // token hide
        const url = new URL(window.location.href);
        url.search = '';
        window.history.replaceState({}, '', url);
        // getGoogleUserName
        fetchUserData(token)
        
        setAuth((prevState) => ({
          ...prevState,
          isAuthenticated: true
        }));

      } else {
        setShowLoginModal(true);
      }
    }else{
      setShowLoginModal(false)

    }
  }, [auth.isAuthenticated, setAuth]);

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  return (
    <Router>
      {/* Container */}
      <div className="flex flex-col justify-center items-center min-h-screen w-full">
        {/* <Header /> */}
        <main className="main-content flex-grow flex justify-center items-center">
          <Routes>
            <Route path="/" element={<MyPlant />} />
            <Route path="/recommand" element={<Recommend />} />
            <Route path="/recommand/detail" element={<PlantDetail />} />
          </Routes>
        </main>
      </div>
      <LoginModal isOpen={showLoginModal} onRequestClose={handleCloseLoginModal} />
    </Router>
  );
}

export default App;