import React from "react";
import { useTheme, Theme, CSSObject } from "@mui/material/styles";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Drawer from "@mui/material/Drawer";
import classes from "@/styles/SideMenu.module.scss";
import { Box, Tooltip, useMediaQuery } from "@mui/material";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const menuRouteList = ["", "analytics", "profile", "settings"];
const menuListTranslations = ["Dashboard", "Analytics", "Profile", "Settings"];
const menuListIcons = [
  <DashboardIcon />,
  <EqualizerIcon />,
  <PersonIcon />,
  <SettingsIcon />,
];

const SideMenu = () => {
  const theme = useTheme();
  const { data: session } = useSession();
  const [open, setOpen] = React.useState(false);
  const mobileCheck = useMediaQuery("(min-width: 600px)");

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleListItemButtonClick = () => {
    setOpen(false);
  };

  return (
    <Drawer
      variant='permanent'
      anchor='left'
      open={open}
      sx={{
        width: drawerWidth,
        [`& .MuiDrawer-paper`]: {
          left: 0,
          top: mobileCheck ? 64 : 57,
          flexShrink: 0,
          whiteSpace: "nowrap",
          boxSizing: "border-box",
          ...(open && {
            ...openedMixin(theme),
            "& .MuiDrawer-paper": openedMixin(theme),
          }),
          ...(!open && {
            ...closedMixin(theme),
            "& .MuiDrawer-paper": closedMixin(theme),
          }),
        },
      }}
    >
      <Box className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerToggle}>
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </Box>
      <Divider />
      <Divider />
      <List>
        {menuListTranslations.map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: "block" }}>
            <Link
              className={classes.link}
              href={`/dashboard/${menuRouteList[index]}`}
            >
              <ListItemButton
                onClick={handleListItemButtonClick}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <Tooltip title={menuListTranslations[index]}>
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {menuListIcons[index]}
                  </ListItemIcon>
                </Tooltip>
                <ListItemText
                  primary={text}
                  sx={{
                    color: theme.palette.text.primary,
                    opacity: open ? 1 : 0,
                  }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            onClick={handleListItemButtonClick}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <Tooltip title={session ? "Logout" : "Login"}>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {session ? (
                  <LogoutIcon onClick={() => signOut()} />
                ) : (
                  <LoginIcon onClick={() => signIn()} />
                )}
              </ListItemIcon>
            </Tooltip>
            <ListItemText
              onClick={() => {
                if (session) {
                  return signOut();
                } else {
                  return signIn();
                }
              }}
              sx={{
                color: theme.palette.text.primary,
                opacity: open ? 1 : 0,
              }}
            >
              {session ? "Logout" : "Login"}
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideMenu;
