import { ThemeOptions } from "@mui/material";

const darkTheme: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#295c85",
      light: "#6d95b6",
      dark: "#18374f",
    },
    secondary: {
      main: "#2f7f90",
      light: "#74a6b2",
      dark: "#235d69",
    },
    success: {
      main: "#67b6a6",
    },
    error: {
      main: "#e28476",
    },
    background: {
      default: "#0f1720",
      paper: "#151f2b",
    },
    text: {
      primary: "#f4f7fb",
      secondary: "rgba(244, 247, 251, 0.72)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
  },
};

export default darkTheme;
