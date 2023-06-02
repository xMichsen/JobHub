import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles'
import getTheme from "./theme";
import { useState, createContext } from "react";
import Home from "./home/Home";
import Jobs from "./jobs/Jobs";
import PostAJob from "./postajob/PostAJob";
import AboutUs from "./aboutus/AboutUs";
import ContactUs from "./contactus/ContactUs";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Account from "./Account/Account";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ThemeContext = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = getTheme(darkMode ? 'dark' : 'light');

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/postajob" element={<PostAJob />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/account" element={<Account />} />
            </Routes>  
        </BrowserRouter>
        <ToastContainer position="bottom-center" theme={darkMode ? 'dark' : 'light'} />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
