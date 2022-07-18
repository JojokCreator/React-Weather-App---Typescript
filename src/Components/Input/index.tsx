import React from 'react';
import { useThemeContext } from '../../Context/ThemeContext';

type FunctionProps = {
    setCity: React.Dispatch<React.SetStateAction<string>>
}

function Input(props: FunctionProps) {
    const { dark, day, night } = useThemeContext();
    const theme = dark ? day : night;
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        props.setCity(e.target.value)
    }
    return (
        <input style={{ background: theme.input, color: theme.syntax }} onChange={handleChange}></input>
    );
}

export default Input;