import React from 'react';

const SearchBox = ({ onSearchChange, onButtonSubmit, onEnterKeypress }) => {
  return (
    <div className='flex'>
      <input
        id='inputField'
        onChange={onSearchChange}
        onKeyPress={onEnterKeypress}
        className='border-4 mx-2 rounded-md w-full indent-2' 
        type='search' 
        placeholder='input ticker symbol'
      />
      <button
        id='submitButton' 
        className='border-4 p-2 transition ease-in-out hover:scale-110 rounded-md mr-2' 
        onClick={onButtonSubmit} >
        search
      </button>
    </div>
  );
}

export default SearchBox;