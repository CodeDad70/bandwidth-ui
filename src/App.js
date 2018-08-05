import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ServicesCard from './containers/ServicesCard';
import ResourcesCard from './containers/ResourcesCard';
import ResourcesHover from './containers/ResourcesHover'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bandwidth UI sketch!</h1>
        </header>
        <p className="App-intro">
         
         <ResourcesHover/>
        </p>
      </div>
    );
  }
}

export default App;
