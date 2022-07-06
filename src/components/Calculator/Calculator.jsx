import React from 'react';
import { useState, useEffect } from 'react';

// Components
import SearchBox from '../SearchBox/SearchBox';

export default function Calculator() {
  const [stockTicker, setStockTicker] = useState('');

  const fetchFinvizData = () => {
    return 0;
  }

  const cleanFinvizData = () => {
    return 0;
  }

  const setFinvizData = () => {
    return 0;
  }


  return (
    <div>
      <SearchBox setStockTicker={setStockTicker}/>
      This is calculator and searchbox
    </div>
  );
}