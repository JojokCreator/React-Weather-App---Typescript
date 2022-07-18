import { useThemeContext } from '../../Context/ThemeContext';

type ButtonProps = {
    onClick: () => void
}

function Button (props: ButtonProps) {
    const { dark, day, night } = useThemeContext();
    const theme = dark ? day : night;

    return (
       <button style={{ background: theme.ui, color: theme.syntax }} onClick={props.onClick}>Click Me </button>
    );
}

export default Button;