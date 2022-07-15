import React from 'react';

type FunctionProps = {
    weather: any
}

function Forecast(props: FunctionProps) {
    return (
        <div>
           {(!props.weather?.message) ?
           <p> this is the forecast {props.weather?.main.pressure}</p> 
           : "Error type again"}
        </div>
    );
}

export default Forecast;