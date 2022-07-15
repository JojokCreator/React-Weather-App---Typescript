import React from 'react';

function Button () {

    async function getForecast () {
        const city = "London"
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`)
        const body = await response.json()
      
    console.log (body);
    }
    return (
       <button onClick= {getForecast}>Click Me </button>
    );
}

export default Button;