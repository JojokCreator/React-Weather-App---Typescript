import { useThemeContext } from '../../Context/ThemeContext';

function Header() {
    const { dark, day, night, toggleDark } = useThemeContext();
    const theme = dark ? day : night;

    return (
        <div style={{ background: theme.ui, color: theme.syntax }}>
            <button className="toggle" style={{ background: theme.ui, color: theme.syntax }} onClick={toggleDark}>Toggle mode</button>
            <h1 >Weather Forecast</h1>
        </div>
    );
}

export default Header;