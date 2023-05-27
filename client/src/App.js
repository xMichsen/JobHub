import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles'
import getTheme from "./theme";
import { useState, createContext } from "react";
import Home from "./home/Home";

export const ThemeContext = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = getTheme(darkMode ? 'dark' : 'light');

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}></Route>
            </Routes>  
        </BrowserRouter>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
