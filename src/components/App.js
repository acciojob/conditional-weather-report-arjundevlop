
import React from "react";
import './../styles/App.css';
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [weather, setWeather] = useState({ location:"", temperature: 0, conditions: "" });
  const thresold = 20;
  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
  
        const options = {
          method: 'GET',
          url: 'https://weatherapi-com.p.rapidapi.com/current.json',
          params: {q: `${latitude},${longitude}`},
          headers: {
            'X-RapidAPI-Key': '0472bf7d25msh934ea097e712a5ap1c999djsn273e0400ad65',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
          }
        };
        
        axios.request(options).then(function abc(response) {
          //console.log(response.data);
          
         setWeather({temperature:response.data.current.feelslike_c,conditions:response.data.current.condition.text,location:response.data.location.name})
          
  
          
  
          
        }).catch(function (error) {
          console.error(error);
        });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
    const weatherStyle = {color: weather.temperature > thresold ? "red" : "blue"};
  
  
    
    

  
  
  
  

  return (
    <div className="weatherApp">
    <h1>Weather App</h1>
    <div>Location - {weather.location}</div>
    <div className="temperature">Temperature: <span style={weatherStyle}>{weather.temperature}°C</span></div>
    <div className="condition">Conditons : {weather.conditions}</div>
        
    </div>
  )

  
  

  
  
  
  

  

  
}

export default App;
