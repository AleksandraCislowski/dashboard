import React from "react";
import SideMenu from "../SideMenu";
import classes from "@/styles/Layout.module.scss";
import Head from "next/head";
import Footer from "../Footer";
import { Box, useMediaQuery } from "@mui/material";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const tabletCheck = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <Head>
        <title>Northstar Commerce</title>
        <meta
          name='description'
          content='Northstar Commerce is an e-commerce operations dashboard for tracking revenue, conversion, channel performance, and customer health.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' type='image/png' href='/favicon.png' />
        <link rel='apple-touch-icon' href='/favicon.png' />
      </Head>
      <main
        id='main-content'
        className={classes.layout}
        style={{ padding: "0 24px 176px 80px" }}
      >
        <SideMenu />
        {children}
        <Box sx={{ height: "32px" }} />
        {tabletCheck && <Footer />}
      </main>
    </>
  );
};

export default Layout;
