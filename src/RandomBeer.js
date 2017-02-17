// import React from 'react';

const fetchRandomBeer = () => {
	fetch('https://api.punkapi.com/v2/beers/random')
	.then(res => {

		if (res.status !== 200) {
			console.log("Sorry, there was a problem. Status Code: "
				+ res.status);
			return;
		}

		res.json().then(data => {
			console.log(data);
			return data;
		});
	})
	.catch(err => {
		console.log('Fetch Error: ', err);
	});
}

const RandomBeer = fetchRandomBeer();

console.log(RandomBeer)

export default RandomBeer;