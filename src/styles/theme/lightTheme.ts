import { ThemeOptions } from "@mui/material";

const lightTheme: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#295c85",
      light: "#5a83a6",
      dark: "#1d425f",
    },
    secondary: {
      main: "#2f7f90",
      light: "#a9c6ce",
      dark: "#235d69",
    },
    success: {
      main: "#2f7f90",
    },
    error: {
      main: "#cf6a5c",
    },
    background: {
      default: "#edf2f6",
      paper: "#ffffff",
    },
    text: {
      primary: "#1f2a36",
      secondary: "#5f6b7a",
    },
    divider: "rgba(31, 42, 54, 0.12)",
  },
};

export default lightTheme;
