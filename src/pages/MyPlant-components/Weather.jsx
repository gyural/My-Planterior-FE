import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

const sunLevels = {
  1: {
    icon: 'CLOUDY',
    color: '#4f4f4f', // 어두운 회색
    size: 64,
    animate: true
  },
  2: {
    icon: 'PARTLY_CLOUDY_DAY',
    color: '#7f7f7f', // 중간 회색
    size: 64,
    animate: true
  },
  3: {
    icon: 'CLEAR_DAY',
    color: '#ffd700', // 밝은 노란색
    size: 64,
    animate: true
  }
};

const Weather = ({ sunlevel }) => {
  const weatherData = sunLevels[sunlevel] || sunLevels[3]; // 기본값을 sunlevel3으로 설정
  return (
    <ReactAnimatedWeather
      icon={weatherData.icon}
      color={weatherData.color}
      size={weatherData.size}
      animate={weatherData.animate}
    />
  );
};

export default Weather;