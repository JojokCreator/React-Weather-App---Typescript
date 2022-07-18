import React, { useState } from 'react';
import './App.css';
import Button from './Components/Button';
import Forecast from './Components/Forecast';
import Input from './Components/Input';
import Header from './Components/Header/header'
import { useThemeContext } from './Context/ThemeContext';

export interface weatherinfo {
    description: string;
    feels_like: number;
    humidity: number;
    icon: string;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
};


function App() {
const [city, setCity] = useState('')
const [weather, setWeather] = useState<weatherinfo>();
const { dark, day, night } = useThemeContext();
const theme = dark ? day : night;

  async function getForecast() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
    const body = await response.json()
    console.log(body)
    const obj = body.main
    if (Array.isArray(body.weather)) {
    Object.assign(obj, {description: body.weather[0].description})
    Object.assign(obj, {icon: body.weather[0].icon})
    setWeather(obj)
    return 
    }
    setWeather(undefined) 
  }

  return (
      <div className="App" style={{ background: theme.ui, color: theme.syntax }}>
      <Header />
      <Input setCity={setCity}/>
      <Button onClick={getForecast} />
      <Forecast weather={weather} />
      </div>
  );
}

export default App;
