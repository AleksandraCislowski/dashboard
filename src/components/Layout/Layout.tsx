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
        <title>DataSoft - Dashboard</title>
        <meta name='description' content='Data dashboard' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={classes.layout} style={{ padding: "0 24px 0 80px" }}>
        <SideMenu />
        {props.children}
        <Box sx={{ height: "140px" }} />
        {tabletCheck && <Footer />}
      </main>
    </>
  );
};

export default Layout;
