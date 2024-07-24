import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyPlant from './pages/MyPlant';
import About from './pages/About';
import Contact from './pages/Contact';
import BottomNavBar from './components/BottomNavbar';
import Header from './components/Header';
import Recommend from './pages/Recommend';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [isRecommend, setisRecommend] = useState(false)
  return (
      <Router>
        <div className="container p-0">
          <Header/>
          <main className="main-content">
            <Routes>
              <Route path="/" element={<MyPlant />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/recommand" element={<Recommend />} />
            </Routes>
          </main>
          {!isRecommend && (
            <div className="bottom-nav-bar">
              <BottomNavBar />
            </div>
          )}
        </div>
      </Router>
  );
}

export default App;