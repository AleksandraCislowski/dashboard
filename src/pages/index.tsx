import Head from "next/head";
import Dashboard from "./dashboard/Dashboard";
import SideMenu from "../components/SideMenu/SideMenu";
import { useSession } from "next-auth/react";
import { Fragment } from "react";
import Login from "@/components/Login";
import classes from "@/styles/Home.module.scss";
import React from "react";

const Home: React.FC = () => {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>DataSoft - Dashboard</title>
        <meta name='description' content='Data dashboard' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={classes.main}>
        {session && (
          <Fragment>
            <SideMenu />
            <Dashboard />
          </Fragment>
        )}
        <Login />
      </main>
    </>
  );
};

export default Home;
