import React from 'react';

const Header = () => {
  return (
    <div className="w-full h-[60px] flex items-center px-4 bg-white shadow">
      <div
        className="w-[56px] h-[56px] bg-no-repeat bg-center bg-contain"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/asset/logo.png)` }}
      ></div>
      <span className="ml-4 text-2xl font-bold text-[#3E6606]">MyPlanterior</span>
    </div>
  );
}

export default Header;