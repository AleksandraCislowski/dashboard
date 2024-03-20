import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Dashboard from "./dashboard/Dashboard";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu/SideMenu";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name='description' content='Data dashboard' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <Header />
        <SideMenu />
        <Dashboard />
      </main>
    </>
  );
}
