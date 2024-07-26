import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';

const BottomNavBar = () => {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
        <NavLink 
          to="/" 
          end
          className={({ isActive }) => 
            `inline-flex flex-col items-center justify-center px-5 py-2 ${isActive ? 'bg-gray-50 dark:bg-gray-800' : 'hover:bg-gray-50 dark:hover:bg-gray-800'} group`}
          style={{ textDecoration: 'none' }}
        >
          <Icon icon="mdi:plant-outline" className='text-gray-800 group-focus:text-green-600' />
          <span className="text-sm text-gray-500 dark:text-gray-400 group-focus:text-green-600 dark:group-focus:text-green-500">홈</span>
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => 
            `inline-flex flex-col items-center justify-center px-5 py-2 ${isActive ? 'bg-gray-50 dark:bg-gray-800' : 'hover:bg-gray-50 dark:hover:bg-gray-800'} group`}
          style={{ textDecoration: 'none' }}
        >
          <Icon icon="material-symbols:potted-plant-outline-rounded" className='text-gray-800 group-focus:text-green-600' />
          <span className="text-sm text-gray-500 dark:text-gray-400 group-focus:text-green-600 dark:group-focus:text-green-500">About</span>
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => 
            `inline-flex flex-col items-center justify-center px-5 py-2 ${isActive ? 'bg-gray-50 dark:bg-gray-800' : 'hover:bg-gray-50 dark:hover:bg-gray-800'} group`}
          style={{ textDecoration: 'none' }}
        >
          <Icon icon="icon-park-outline:me" className='text-gray-800 group-focus:text-green-600' />
          <span className="text-sm text-gray-500 dark:text-gray-400 group-focus:text-green-600 dark:group-focus:text-green-500">My</span>
        </NavLink>
      </div>
    </div>
  );
};

export default BottomNavBar;