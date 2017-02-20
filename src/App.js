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
        <div className="App-info">
          <h1 id="lower-h1">You'll love this site!</h1>
          <MainPage/>
        </div>
      </div>
    );
  }
}

export default App;
