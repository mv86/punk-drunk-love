import React from 'react';

const Beer = props => {
	return (
	 <div className="intro-beer">
      <img src={props.src} alt="" className="beer-img-left"/>
      <div className="intro-beer-info">
         <h2 className="header">Have you tried?</h2>
         <p className="beer-info" id="beer-name">{props.name}</p>
         <p className="beer-info">{props.tagline}!</p>
	      <p className="beer-info">{props.abv} abv</p>
         <h4 className="header">Goes great with.....</h4>
         <p className="beer-info">{props.foodPair}</p>
      </div>
      <img src={props.src} alt="" className="beer-img-right"/>
   </div>
   )
}

export default Beer;