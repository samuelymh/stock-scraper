import React from 'react';

// Components
import TickerCard from '../TickerCard/TickerCard';

const SearchHistory = ({ history }) => {
  const historyList = history.map((ticker, id) => {
    return (
      <TickerCard 
        key={id}
        ticker={ticker}
      />
    );
  });

  return (
    <ul className='border-4 m-2'>{historyList}</ul>
  );
}

export default SearchHistory;