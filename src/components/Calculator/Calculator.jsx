import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props){
    super(props);
    this.state = {
      finvizData: {}
    }
  }

  shouldComponentUpdate(nextProps){
    return nextProps.currentTicker !== this.props.currentTicker;
  }

  fetchFinvizData = () => {
    const { currentTicker } = this.props;
    const { finvizData } = this.state;

    // Make API call only if currentTicker is non-empty.
    if(currentTicker){
      console.log("Fetching data for " + currentTicker);
      fetch('http://localhost:3001/finviz', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          ticker: currentTicker
        })
      })
      .then(res => res.json())
      .then(data => {
        console.log("data:", {[currentTicker]: data});
        // Set state with fetched data.
        this.setState({ finvizData: {
          ...finvizData,
          [currentTicker]: data
        } }, () => { console.log("finvizData:", this.state.finvizData) });
      })
      .catch(err => console.log(err));
    }
  }

  cleanFinvizData = () => {
    this.setState({ finvizData: {} });
  }

  render(){
    console.log('Rendering calculator');
    this.fetchFinvizData();
    return (
      <div className='border-4 lg:w-3/5 w-full grow my-10 mx-5 rounded-md'>
        <p>Calculator</p>
      </div>
    );
  }
}

export default Calculator;