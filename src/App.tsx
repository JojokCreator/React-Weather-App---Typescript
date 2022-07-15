import React,{useState} from 'react';
import './App.css';
import Button from './Components/Button';
import Forecast from './Components/Forecast';
import Input from './Components/Input';

function App () {

  async function getForecast () {
    const city = "London"
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`)
    const body = await response.json()
    setWeather(body)
console.log (body);
console.log(weather)
}

const [weather, setWeather] = useState<weatherinfo | null >(null);

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
      
      <Input/>
      <Button onClick={getForecast}/>
      <Forecast weather={weather}/>
      <div>{weather?.main.pressure}</div>
    </div>
  );
}

export default App;
