import React from 'react';
import { weatherinfo} from "../../App";
type FunctionProps = {
    weather: weatherinfo | undefined
}

function Forecast(props: FunctionProps) {
    return (
        <div>
            {(!props.weather?.message) ?
                <p> this is the Pressure {props.weather?.main.pressure}</p>
                : "Error type again"}
        </div>
    );
}

export default Forecast;