import React from "react";
import SideMenu from "../SideMenu";
import classes from "@/styles/Layout.module.scss";
import Head from "next/head";
import Footer from "../Footer";
import { Box, useMediaQuery } from "@mui/material";

const Layout = (props: any) => {
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
      <main className={classes.layout} style={{ padding: "0 24px 176px 80px" }}>
        <SideMenu />
        {props.children}
        <Box sx={{ height: "32px" }} />
        {tabletCheck && <Footer />}
      </main>
    </>
  );
};

export default Layout;
