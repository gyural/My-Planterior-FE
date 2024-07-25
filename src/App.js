import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import MyPlant from './pages/MyPlant';
import About from './pages/About';
import Contact from './pages/Contact';
import BottomNavBar from './components/BottomNavbar';
import Header from './components/Header';
import Recommend from './pages/Recommend';
import LoginModal from './components/LoginModal';
import { authState } from './atoms/authAtom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isRecommend, setIsRecommend] = useState(false);
  const auth = useRecoilValue(authState);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    if (!auth.isAuthenticated) {
      setShowLoginModal(true);
    }
  }, [auth]);

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
        {!isRecommend && (
          <div className="w-full">
            <BottomNavBar />
          </div>
        )}
      </div>
      <LoginModal isOpen={showLoginModal} onRequestClose={handleCloseLoginModal} />
    </Router>
  );
}

export default App;