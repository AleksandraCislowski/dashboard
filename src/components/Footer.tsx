import React from "react";
import classes from "@/styles/Footer.module.scss";
import { signIn, signOut, useSession } from "next-auth/react";
import Button from "@mui/material/Button";
import { Paper, useTheme } from "@mui/material";
import Link from "next/link";
import styled from "@emotion/styled";

const Footer = () => {
  const { data: session } = useSession();
  const theme = useTheme();

  const FooterLink = styled(Link)`
    color: ${theme.palette.text.primary};
  `;

  return (
    <footer className={classes.footer}>
      <Paper
        sx={{ width: "100%", backgroundColor: "default" }}
        color={"#262626"}
      >
        <ul role='menu'>
          <li>
            <FooterLink href={"/dashboard"}>Dashboard</FooterLink>
          </li>
          <li>
            <FooterLink href={"/dashboard/analytics"}>Analytics</FooterLink>
          </li>
          <li>
            <FooterLink href={"/dashboard/profile"}>Profile</FooterLink>
          </li>
          <li>
            <FooterLink href={"/dashboard/settings"}>Settings</FooterLink>
          </li>
          <li>
            <Button
              variant={"text"}
              color={session ? "error" : "success"}
              onClick={() => (session ? signOut() : signIn())}
            >
              {session ? "Sign Out" : "Sign In"}
            </Button>
          </li>
        </ul>
      </Paper>
    </footer>
  );
};

export default Footer;
