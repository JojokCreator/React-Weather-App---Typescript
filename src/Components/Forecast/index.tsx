import React from 'react';
import { weatherinfo} from "../../App";
import '../../App.css';
import { WiBarometer, WiThermometer, WiThermometerExterior, WiRaindrop } from "react-icons/wi";
import { useThemeContext } from '../../Context/ThemeContext';


interface FunctionProps {
    weather: weatherinfo | undefined
}

function Forecast ({weather} :FunctionProps) {
    const { dark, day, night } = useThemeContext();
    const theme = dark ? day : night;
    console.log(weather)
    return (
        <div>
            {(weather) ?
            <div style={{ background: theme.ui, color: theme.syntax }} className="row">
                <div className="row">
                <div className="col">
                <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="icon"></img>
                <p> {weather.description}</p>
                </div>
                <h1> {Math.round(weather.temp)}°C</h1>
                <div className="col align">
                <h2> Feels Like {Math.round(weather.feels_like)}°C</h2>
                <p> <WiThermometer />{Math.round(weather.temp_max)}°C  <WiThermometerExterior/> {Math.round(weather.temp_min)}°C</p>
                <p> <WiBarometer/> Pressure {weather.pressure} hpa</p>
                <p> <WiRaindrop/> Humidity {weather.humidity}%</p>
                </div>
                </div>
            </div>
                : <p>Please Enter a City To Search For</p>}
        </div>
    );
}

export default Forecast;