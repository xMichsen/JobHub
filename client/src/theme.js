import { createTheme } from '@mui/material/styles';

const getTheme = (themeType) => {
  return createTheme({
    palette: {
      mode: themeType,
      primary: {
        main: themeType === 'dark' ? "#fff" : "#2b2031",
        logo: themeType === 'dark' ? "#2b2031" : "#2b2031",
        card: themeType === 'dark' ? "#9575cd" : "#d1c4e9",
        paper: themeType === 'dark' ? "#1f1e1e" : "#FFF4FF",
      },
      secondary: {
        main: themeType === 'dark' ? "#FFA500" : "#fff",
        main2: themeType === 'dark' ? "#9575cd" : "#d1c4e9",
        main3: themeType === 'dark' ? "#FFA500" : "#ccffcc",
        login: themeType === 'dark' ? "#FFA500" : "#2b2031",
      },

    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
  });
};

export default getTheme;
