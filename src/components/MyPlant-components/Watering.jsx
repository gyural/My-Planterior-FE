import React from 'react';
import './RainAnimation.css';

const RainAnimation = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {[...Array(100)].map((_, i) => (
        <div
          key={i}
          className="absolute w-px h-24 bg-gradient-to-b from-blue-500 to-transparent animate-fall"
          style={{
            left: `${Math.random() * 100}vw`,
            animationDuration: `${Math.random() * 0.5 + 0.5}s`,
            animationDelay: `${Math.random() * 1}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default RainAnimation;