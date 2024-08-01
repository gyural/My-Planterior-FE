import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import {useRecoilValue, useSetRecoilState } from 'recoil';
import MyPlant from './pages/MyPlant';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import Recommend from './pages/Recommend';
import LoginModal from './components/LoginModal';
import { authState } from './atoms/authAtom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isRecommend, setIsRecommend] = useState(false);
  const auth = useRecoilValue(authState); // 수정된 부분
  const setAuth = useSetRecoilState(authState); // 수정된 부분

  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    if (!auth.isAuthenticated) {
      console.log('login false!!!')
      // 현재 url에 token-query가 있는지 확인
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('token');
      if (token) {
        // 토큰이 있으면 인증을 시도하는 로직 추가 가능
        setShowLoginModal(false);
        
        const url = new URL(window.location.href);
        url.search = '';
        window.history.replaceState({}, '', url);
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
        <Header />
        <main className="main-content flex-grow flex justify-center items-center">
          <Routes>
            <Route path="/" element={<MyPlant />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/recommand" element={<Recommend />} />
          </Routes>
        </main>
      </div>
      <LoginModal isOpen={showLoginModal} onRequestClose={handleCloseLoginModal} />
    </Router>
  );
}

export default App;