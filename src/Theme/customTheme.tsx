// Theme/customTheme.ts
import { createTheme } from "@mui/material";

const getCustomTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#00927c",
      },
      secondary: {
        main: "#EAF0F1",
      },
      background: {
        default: mode === "dark" ? "#121212" : "#ffffff",
        paper: mode === "dark" ? "#1e1e1e" : "#f5f5f5",
      },
      text: {
        primary: mode === "dark" ? "#ffffff" : "#000000",
      },
    },
  });

export default getCustomTheme;
