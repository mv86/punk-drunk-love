import React from 'react';
import {Component} from 'react';
import AppInfo from './AppInfo.js';
import RandomBeer from './RandomBeer.js';

class MainPage extends Component {

  render() {
    return (
    	<div id="main-page-div">
        <AppInfo/>
    		<RandomBeer/>
    	</div>
    	)
  }
}

export default MainPage;