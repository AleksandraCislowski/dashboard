import Dashboard from "./dashboard/Dashboard";
import { useSession } from "next-auth/react";
import Login from "@/components/Login";
import classes from "@/styles/Home.module.scss";
import React from "react";

const Home: React.FC = () => {
  const { data: session } = useSession();

  return (
    <main className={classes.main}>
      {session && <Dashboard />}
      {!session && <Login />}
      <Login />
    </main>
  );
};

export default Home;
