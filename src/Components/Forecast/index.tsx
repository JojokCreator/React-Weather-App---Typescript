import React from 'react';
import { weatherinfo} from "../../App";
type FunctionProps = {
    weather: weatherinfo
    
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
            {/* {(!props.weather?.message) ? */}
                <p> this is the Pressure {props.weather?.main.pressure}</p>
                {/* : "Error type again"} */}
        </div>
    );
}

export default Forecast;