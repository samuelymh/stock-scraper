import React from 'react';

// Components
import Clock from '../Clock/Clock';

// Css
import './TopBar.css'

export default function TopBar() {
  return (
    <div 
      id='topbar' 
      className='flex justify-around py-4 text-3xl'>
      <div 
        className='transition ease-in-out hover:scale-110 p-1 my-auto w-1/4 rounded-md'>
        Scrapy
      </div>
      <Clock />
    </div>
  );
}