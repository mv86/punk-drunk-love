import React, {Component} from 'react';
import './App.css';
import MainPage from './MainPage.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header-wrapper">
          <div className="App-header">
            <h1 id="app-title">Punk Drunk Love</h1>
            <ul id="nav-ul">
              <li>Home</li>
              <li>Search Beers</li>
              <li>View My Beers</li>
            </ul>
          </div>
        </div>
        <div className="App-info">
          <h1 id="lower-h1">Beautiful Brewdog Beers!</h1>
          <MainPage/>
        </div>
      </div>
    );
  }
}

export default App;
