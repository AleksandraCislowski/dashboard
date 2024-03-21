import Head from "next/head";
import Dashboard from "./dashboard/Dashboard";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu/SideMenu";
import { useSession } from "next-auth/react";
import { Fragment } from "react";
import Login from "@/components/Login";

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name='description' content='Data dashboard' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Header />
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
}
