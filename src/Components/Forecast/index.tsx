import React from 'react';

type FunctionProps = {
    weather: any
    
    // {
    //     main: {
    //         feels_like: number,
    //         humidity: number,
    //         pressure: number,
    //         temp: number,
    //         temp_max: number,
    //         temp_min: number,
    //     }
    // }
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