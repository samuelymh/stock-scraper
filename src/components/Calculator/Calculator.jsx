import React from 'react';
import { useState, useEffect } from 'react';

// Components
import SearchBox from '../SearchBox/SearchBox';

export default function Calculator() {
  const [stockTicker, setStockTicker] = useState('');

  return (
    <div>
      <SearchBox />
      This is calculator and searchbox
    </div>
  );
}