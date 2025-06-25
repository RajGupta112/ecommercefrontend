import React, { useMemo, useState } from 'react';
import { ThemeProvider, CssBaseline, Button } from '@mui/material';
import './App.css';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import IconButton from '@mui/material/IconButton';


import Navbar from './Customer/components/Navbar';
import getCustomTheme from './Theme/customTheme';

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const theme = useMemo(() => getCustomTheme(mode), [mode]);

  const toggleTheme = () => {
    setMode(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
  <CssBaseline />
  <Navbar />
  <div style={{ padding: "-1rem" }}>
    <IconButton onClick={toggleTheme} color="inherit">
      {mode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  </div>
</ThemeProvider>

  );
}

export default App;
