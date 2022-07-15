import React from 'react';

type FunctionProps = {
    setCity: React.Dispatch<React.SetStateAction<string>>
}

function Input(props: FunctionProps) {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        props.setCity(e.target.value)
    }
    return (
        <input onChange={handleChange}></input>
    );
}

export default Input;