import React, { useState } from 'react';
import './App.css';
import Button from './Components/Button';
import Forecast from './Components/Forecast';
import Input from './Components/Input';

function App() {
const [city, setCity] = useState('')

  async function getForecast() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
    const body = await response.json()
    setWeather(body)
    console.log(city)
  }

  const [weather, setWeather] = useState<weatherinfo | null>();

  type weatherinfo = {
    main: {
      feels_like: number,
      humidity: number,
      pressure: number,
      temp: number,
      temp_max: number,
      temp_min: number,
    }

  };
  return (
    <div className="App">

      <Input setCity={setCity}/>
      <Button onClick={getForecast} />
      <Forecast weather={weather} />
    </div>
  );
}

export default App;
