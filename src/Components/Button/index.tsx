import { useThemeContext } from '../../Context/ThemeContext';
import { Button } from '@mantine/core';

type ButtonProps = {
    onClick: () => void
}

function ButtonComp (props: ButtonProps) {
    const { dark, day, night } = useThemeContext();
    const theme = dark ? day : night;

    return (
       <Button styles={{ root: {background: theme.input, color: theme.syntax }}} onClick={props.onClick}>Click Me </Button>
    );
}

export default ButtonComp;