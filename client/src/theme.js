import { createTheme } from '@mui/material/styles';

const getTheme = (themeType) => {
  return createTheme({
    palette: {
      mode: themeType,
    },
  });
};

export default getTheme;
