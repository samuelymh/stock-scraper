import React from 'react';

// Components
import SearchBox from '../SearchBox/SearchBox';
import SearchHistory from '../SearchHistory/SearchHistory';

const SearchSection = ({ onSearchChange, onButtonSubmit, onEnterKeypress, history }) => {
    return(
      <div className='border-4 lg:w-1/6 w-full grow my-10 mx-5 rounded-md'>
        <p>SearchSection</p>
        <SearchBox 
          onSearchChange={onSearchChange}
          onButtonSubmit={onButtonSubmit} 
          onEnterKeypress={onEnterKeypress} 
        />
        <SearchHistory history={history} />
      </div>
    );
}

export default SearchSection;