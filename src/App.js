import React, {Component} from 'react';
import './App.css';
import MainPage from './MainPage.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>You like Punk Ipa???</h1>
        </div>
         <ul id="nav-ul">
            <li>Home</li>
            <li>Search Beers</li>
            <li>View My Beers</li>
          </ul>
        <div className="App-info">
          <h1 id="lower-h1">You'll love this site!</h1>
          <MainPage/>
        </div>
      </div>
    );
  }
}

export default App;
