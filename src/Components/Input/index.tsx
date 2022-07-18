import React from 'react';
import { useThemeContext } from '../../Context/ThemeContext';
import { Input } from '@mantine/core';

type FunctionProps = {
    setCity: React.Dispatch<React.SetStateAction<string>>
}

function Form(props: FunctionProps) {
    const { dark, day, night } = useThemeContext();
    const theme = dark ? day : night;
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        props.setCity(e.target.value)
    }
    return (
        <Input variant="default" styles={{ input: {background: theme.input, color: theme.syntax}}} onChange={handleChange}></Input>
    );
}

export default Form;