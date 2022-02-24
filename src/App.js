import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Flat from './components/flat';

function App() {
  const flat = {
    "name": "Trendy Apt in Buttes Montmartre",
    "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat2.jpg",
    "price": 200,
    "priceCurrency": "EUR",
    "lat": 48.885707,
    "lng": 2.343543
  };

  return (
    <div>
      <Flat flat={flat} />
    </div>
    );
  }

  export default App;


  /* React template */

  /*     <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */
