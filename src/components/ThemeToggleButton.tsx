import React from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";

export type ThemeToggleButtonProps = {
  ColorModeContext: React.Context<{ toggleColorMode: () => void }>;
};

const ThemeToggleButton = (props: ThemeToggleButtonProps) => {
  const mobileCheck = useMediaQuery("(min-width: 500px)");
  const {
    ColorModeContext = React.createContext({ toggleColorMode: () => {} }),
  } = props;
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <>
      {mobileCheck && (
        <Typography
          sx={{
            color: theme.palette.text.secondary,
            fontSize: "0.92rem",
            textTransform: "capitalize",
          }}
        >
          {theme.palette.mode}
        </Typography>
      )}
      <IconButton
        sx={{
          mr: 2,
          ml: 0.5,
          color:
            theme.palette.mode === "dark"
              ? theme.palette.secondary.light
              : theme.palette.secondary.dark,
          backgroundColor:
            theme.palette.mode === "dark"
              ? alpha(theme.palette.secondary.light, 0.14)
              : alpha(theme.palette.secondary.main, 0.12),
          "&:hover": {
            backgroundColor:
              theme.palette.mode === "dark"
                ? alpha(theme.palette.secondary.light, 0.22)
                : alpha(theme.palette.secondary.main, 0.18),
          },
        }}
        title={`${theme.palette.mode} mode`}
        aria-label={`${theme.palette.mode} mode button`}
        onClick={colorMode.toggleColorMode}
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </>
  );
};

export default ThemeToggleButton;
