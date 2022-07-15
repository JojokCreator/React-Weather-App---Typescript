import React from 'react';

type FunctionProps = {
    weather: any
}

function Forecast(props: FunctionProps) {
    
    return (
        <div>
           <p> this is the forecast {props.weather?.main.pressure}</p> 
        </div>
    );
}

export default Forecast;