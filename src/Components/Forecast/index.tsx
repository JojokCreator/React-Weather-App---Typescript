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
                <p> The pressure is, {props.weather?.main.pressure} hpa</p>
                <p> Feels Like {props.weather?.main.feels_like}°F</p>
                <p> The humidity is {props.weather?.main.humidity}%</p>
                <p> The temperature is {props.weather?.main.temp}°F</p>
                <p> The max temp is {props.weather?.main.temp_max}°F</p>
                <p> The min temp is{props.weather?.main.temp_min}°F</p>
                </div>
                : "Error type again"}
        </div>
    );
}

export default Forecast;