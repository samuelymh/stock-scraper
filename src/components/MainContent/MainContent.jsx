import React, { Component } from 'react';

// Components
import Calculator from '../Calculator/Calculator';
import SearchSection from '../SearchSection/SearchSection';

class MainContent extends Component {
  constructor(){
    super();
    this.state = {
      searchField: '',
      currentTicker: '',
      history: []
    }
  }

  onSearchChange = event => {
    event.target.value = event.target.value.toLocaleUpperCase();
    this.setState({ searchField: event.target.value.trim() });
  }

  onButtonSubmit = () => {
    // Append searched ticker into history if field is non-empty
    const { history, searchField } = this.state;
    if(searchField){
      this.setState({ history: [...history, searchField] });
      this.setState({ currentTicker: searchField });

      // To reset input field and its state
      this.setState({ searchField: '' })
      const inputField = document.getElementById('inputField');
      inputField.value = '';
    }
  }
  
  onEnterKeypress = event => {
    if(event.key === 'Enter') {
      this.onButtonSubmit();
    }
  }

  render() {
    const { history, currentTicker } = this.state;

    return (
      <div className='flex flex-wrap border-4 sm:mx-10 md:w-auto rounded-md'>
        <SearchSection 
          onSearchChange={this.onSearchChange} 
          onButtonSubmit={this.onButtonSubmit}
          onEnterKeypress={this.onEnterKeypress}
          history={history}
        />
        <Calculator currentTicker={currentTicker}/>
      </div>
    );
  }
}

export default MainContent;