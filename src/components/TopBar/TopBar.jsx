import React from 'react';

// Components
import Clock from '../Clock/Clock';

// Css
import './TopBar.css'

export default function TopBar() {
  return (
    <div 
      id='topbar' 
      className='flex justify-between p-4 text-3xl shadow-lg'>
      <div 
        className='border-4 p-1 w-1/4 border-[#7f5af0] border-opacity-75 rounded-md'>
        Scrapy
      </div>
      <Clock />
    </div>
  );
}