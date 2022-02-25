import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
// import logo from './logo.svg';
// import { render } from '@testing-library/react';
import './App.css';
import Flat from './components/flat';
import Marker from './components/marker';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: []
    };
  }

  componentDidMount() {
    const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json";
    fetch(url) //AJAX
      .then(response => response.json())
      .then((data) => {
        this.setState({
          flats: data
        });
      })
  }

  selectFlat = (flat) => {
    console.log(flat);
  }


  render() {
    const defaultCenter = {
      lat: 48.8566,
      lng: 2.3522
    }

    return (
      <div className="app">
        <div className="main">
          <div className="search"></div>
          <div className="flats-container">
            {this.state.flats.map((flat) => {
              return <Flat
              key={flat.id}
              flat={flat}
              selectFlat={this.selectFlat} />
            })}
          </div>
        </div>
          <div className="map">
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultCenter}
              defaultZoom={11}
            >
              {this.state.flats.map((flat) => {
                return <Marker key={flat.id} lat={flat.lat} lng={flat.lng} text={flat.price} />
              })}
            </GoogleMapReact>
          </div>
      </div>
    );
  }


  }

  export default App;


  /* React template */

/*   function App() {
    <div className="App">
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
    </div>
  } */
