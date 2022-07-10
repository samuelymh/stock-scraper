import React from 'react';

const TickerCard = ({ ticker }) => {
  return (
    <li className='m-2 transition ease-in-out hover:scale-110 hover:text-[#2cb67d]'>
      {ticker.toLocaleUpperCase()}
    </li>
  );
}

export default TickerCard;