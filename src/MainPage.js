import React, {Component} from 'react';
import RandomBeer from './RandomBeer.js';

class MainPage extends Component {

  render() {
    return (
    	<div id="main-page-div">
    		<RandomBeer/>
    	</div>
    	)
  }
}

export default MainPage;