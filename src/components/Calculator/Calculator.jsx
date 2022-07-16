import React, { Component } from 'react';
// import puppeteer from 'puppeteer';
// const puppeteer = require('puppeteer');

// Components

class Calculator extends Component {
  FINVIZ_PAGE = "https://finviz.com/quote.ashx?t=MSFT";

  fetchFinvizData = () => {
    // async
    return 0;
  }

  cleanFinvizData = () => {
    return 0;
  }

  setFinvizData = () => {
    return 0;
  }

  render(){
    return (
      <div className='border-4 lg:w-3/5 w-full grow my-10 mx-5 rounded-md'>
        <p>Calculator</p>
      </div>
    );
  }
}

export default Calculator;