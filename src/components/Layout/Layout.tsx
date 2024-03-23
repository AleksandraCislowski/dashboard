import React from "react";
import SideMenu from "../SideMenu/SideMenu";
import classes from "@/styles/Layout.module.scss";
import { useSession } from "next-auth/react";
import Head from "next/head";

const Layout = (props: any) => {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>DataSoft - Dashboard</title>
        <meta name='description' content='Data dashboard' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main
        className={classes.layout}
        style={{ padding: session ? "0 24px 0 80px" : 0 }}
      >
        {session && <SideMenu />}
        {props.children}
      </main>
    </>
  );
};

export default Layout;
