import { createTheme } from '@mui/material/styles';

const getTheme = (themeType) => {
  return createTheme({
    palette: {
      mode: themeType,
      primary: {
        main: themeType === 'dark' ? "#fff" : "#2b2031",
      },
      secondary: {
        main: themeType === 'dark' ? "#d3d3d3d3" : "#eaf4fc",
      }
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
  });
};

export default getTheme;
