import './Weather.css';
import React from 'react';






export default function Weather(props)  {
 
  
    return (
      <div className='Weather'>
        <p>{props.getDay}</p>
        <div className='weather-img'>
          <img src={props.img} alt="weather-img"></img>
        </div>
        <p className='weather'>{props.weather}</p>
        <p className='degree'>{props.max_degree}°/{props.min_degree}°</p>
        
      </div>
    );
  

}


  
  

    
  

  
  






  