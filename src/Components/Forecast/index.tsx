import React from 'react';
import { weatherinfo} from "../../App";
type FunctionProps = {
    weather: weatherinfo | undefined
}

function Forecast(props: FunctionProps) {
    return (
        <div>
            {(!props.weather?.message) ?
            <div>
                <h1> {props.weather?.main.temp}°C</h1>
                <p> The pressure is, {props.weather?.main.pressure} hpa</p>
                <p> Feels Like {props.weather?.main.feels_like}°C</p>
                <p> The humidity is {props.weather?.main.humidity}%</p>
                <p> The max temp is {props.weather?.main.temp_max}°C</p>
                <p> The min temp is{props.weather?.main.temp_min}°C</p>

                {(props.weather?.main.temp !== undefined && props.weather?.main.temp > 25) ?
                <img src="cloudy.png"></img>
                :
                <img src="rainy.png"></img>}
                </div>
                : "Error city not found again"}
        </div>
    );
}

export default Forecast;