import React from 'react';

type ButtonProps = {
    onClick: () => void
}

function Button (props: ButtonProps) {

    return (
       <button onClick={props.onClick}>Click Me </button>
    );
}

export default Button;