import { useContext } from 'react';
import { ThemeContext } from '../App';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function ThemeToggle() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <IconButton onClick={handleThemeChange}>
        {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        {darkMode ? 'dark mode' : 'light mode'}
    </IconButton>
  );
}

export default ThemeToggle;
