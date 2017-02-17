import React from 'react';
import {Component} from 'react';
import Beer from './Beer.js';

class MainPage extends Component {

  state = {
    name: "", 
    id: "", 
    tagline: "", 
    src: "" 
  };

  fetchRandomBeer = () => {
    fetch('https://api.punkapi.com/v2/beers/random')
    .then(res => {

      if (res.status !== 200) {
        console.log("Sorry, there was a problem. Status Code: "
         + res.status);
        return;
      }

      res.json().then(data => {
        console.log(data);
        this.setState({
          name: data[0].name,
          id: data[0].id,
          tagline: data[0].tagline,
          src: data[0].image_url
        })
      });
    })
    .catch(err => {
     console.log('Fetch Error: ', err);
   });
  }

  componentDidMount() {
    console.log('mounting')
    this.fetchRandomBeer()
    setInterval(this.fetchRandomBeer, 15000)
  }

  render() {
    return (
    	<div>
    		<Beer 
    			name={this.state.name}
    			id={this.state.id}
    			tagline={this.state.tagline}
    			src={this.state.src}
    		/>
    	</div>
    	)
  }
}

export default MainPage;