import React from "react";
import classes from "@/styles/Footer.module.scss";
import { Paper, useTheme } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  const theme = useTheme();
  const stackItems = ["Next.js", "MUI", "Chart.js", "TypeScript"];

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
        <div className={classes.footerInner}>
          <div className={classes.footerCopy}>
            <span className={classes.footerEyebrow}>Northstar Commerce</span>
            <p>
              Portfolio demo for e-commerce operations, order-risk monitoring,
              and storefront performance review.
            </p>
            <div className={classes.stackList} aria-label='Project stack'>
              {stackItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <Link
            className={classes.authorCard}
            href='https://aleksandracislowski.com/'
            target='_blank'
            rel='noreferrer'
            aria-label='Open Aleksandra Cislowski portfolio website'
          >
            <span>Designed & built by</span>
            <strong>Aleksandra Cislowski</strong>
          </Link>
        </div>
      </Paper>
    </footer>
  );
};

export default Footer;
