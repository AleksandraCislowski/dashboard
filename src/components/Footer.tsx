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
        sx={{
          width: "100%",
          backgroundColor: "background.paper",
          boxShadow:
            theme.palette.mode === "dark"
              ? "0 -18px 38px rgba(2, 6, 23, 0.24)"
              : "0 -18px 38px rgba(15, 23, 42, 0.08)",
          backdropFilter: "blur(16px)",
        }}
        color={"#262626"}
      >
        <nav aria-label='Footer navigation'>
          <ul>
            <li>
              <FooterLink href={"/dashboard"}>Overview</FooterLink>
            </li>
            <li>
              <FooterLink href={"/dashboard/analytics"}>Order Intelligence</FooterLink>
            </li>
            <li>
              <FooterLink href={"/dashboard/profile"}>Account</FooterLink>
            </li>
            <li>
              <FooterLink href={"/dashboard/settings"}>Preferences</FooterLink>
            </li>
            <li>
              <Button
                variant={"text"}
                color={session ? "error" : "success"}
                onClick={() => (session ? signOut() : signIn())}
              >
                {session ? "Sign out" : "Sign in"}
              </Button>
            </li>
          </ul>
        </nav>
      </Paper>
    </footer>
  );
};

export default Footer;
