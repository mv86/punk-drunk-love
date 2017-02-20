import React from 'react';
import {Component} from 'react';
import Beer from './Beer.js';

class RandomBeer extends Component {

	state = {
    name: "",
    description: "", 
    id: "", 
    tagline: "",
    abv: "", 
    src: "",
    foodPair: ""
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
          description: data[0].description,
          id: data[0].id,
          tagline: data[0].tagline,
          abv: data[0].abv,
          src: data[0].image_url,
          foodPair: data[0].food_pairing[1]
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
    	<div id="random-beer-div">
    		<Beer 
    			name={this.state.name}
    			description={this.state.description}
    			id={this.state.id}
    			tagline={this.state.tagline}
    			abv={this.state.abv}
    			src={this.state.src}
    			foodPair={this.state.foodPair}
    		/>
    	</div>
    	)
  }
}

export default RandomBeer;