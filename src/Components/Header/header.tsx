import { useThemeContext } from '../../Context/ThemeContext';
import { Switch  } from '@mantine/core';

function Header() {
    const { dark, day, night, toggleDark } = useThemeContext();
    const theme = dark ? day : night;

    return (
        <div style={{ background: theme.ui, color: theme.syntax }}>
            <Switch label={(dark) ? 'Light' : 'Dark'} size="xl" className="toggle" onClick={toggleDark}>Toggle mode</Switch>
            <h1 >Weather Forecast</h1>
        </div>
    );
}

export default Header;