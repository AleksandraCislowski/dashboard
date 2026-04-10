import { ThemeOptions } from "@mui/material";

const lightTheme: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#234E70",
      light: "#4B7596",
      dark: "#17364E",
    },
    secondary: {
      main: "#2C7A7B",
      light: "#A9D2CF",
      dark: "#1F5B5C",
    },
    success: {
      main: "#2C7A7B",
    },
    error: {
      main: "#C96A5B",
    },
    background: {
      default: "#F4F1EA",
      paper: "#FFFDF9",
    },
    text: {
      primary: "#1F2933",
      secondary: "#667085",
    },
    divider: "rgba(31, 41, 51, 0.10)",
  },
};

export default lightTheme;
