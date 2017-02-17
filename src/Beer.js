import React from 'react';

const Beer = props => {
	return (
	 <div className="intro-beer">
      <img src={props.src} alt="" className="beer-img-left"/>
      <div className="intro-beer-info">
	      <p>{props.name}</p>
	      <p>{props.id}</p>
	      <p>{props.tagline}</p>
      </div>
      <img src={props.src} alt="" className="beer-img-right"/>
   </div>
   )
}

export default Beer;