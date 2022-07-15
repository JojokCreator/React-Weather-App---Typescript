import React,{useState} from 'react';
import './App.css';
import Button from './Components/Button';
import Forecast from './Components/Forecast';
import Input from './Components/Input';

function App() {
const [weather,setWeather] = useState();
  return (
    <div className="App">
      
      <Input/>
      <Button setWeather = {setWeather}/>
      <Forecast/>

    </div>
  );
}

export default App;
